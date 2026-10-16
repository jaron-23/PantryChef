/* Firebase Auth + per-user Firestore sync for PantryChef (compat SDK). */
(function () {
  const config = window.PANTRYCHEF_FIREBASE_CONFIG || {};
  const required = ['apiKey','authDomain','projectId','appId'];
  const configured = required.every(k => config[k] && !String(config[k]).includes('PASTE_'));
  window.pantryFirebaseReady = false;
  window.pantryCloudReady = Promise.resolve(false);
  if (!configured || !window.firebase) {
    console.warn('PantryChef Firebase is not configured yet. Add your web app config to firebase-config.js.');
    return;
  }
  if (!firebase.apps.length) firebase.initializeApp(config);
  const auth = firebase.auth();
  const db = firebase.firestore();
  window.pantryAuth = auth;
  window.pantryDb = db;
  window.pantryFirebaseReady = true;


window.pantryIsAdmin = async function () {
  const user = auth.currentUser;
  if (!user) return false;

  try {
    const token = await user.getIdTokenResult(true);
    return token.claims.admin === true;
  } catch (error) {
    console.error('Admin verification failed:', error);
    return false;
  }
};
window.pantryLoadAllRecipes = async function () {
    if (!auth.currentUser) {
        throw new Error('Please sign in first.');
    }

    const isAdmin = await window.pantryIsAdmin();

    if (!isAdmin) {
        throw new Error('Administrator permission required.');
    }

    const snapshot = await db.collectionGroup('pantryData').get();
    const result = [];

    snapshot.forEach(doc => {
        if (doc.id !== 'pantrychef_recipes') return;

        const ownerUid = doc.ref.parent.parent?.id;
        const value = doc.data()?.value;

        if (!ownerUid || !Array.isArray(value)) return;

        value.forEach(recipe => {
            result.push({
                ...recipe,
                _pantryOwnerUid: ownerUid
            });
        });
    });

    return result;
};

window.pantryUpdateOwnerRecipes = async function (ownerUid, updatedRecipes) {
    if (!auth.currentUser) {
        throw new Error('Please sign in first.');
    }

    if (!(await window.pantryIsAdmin())) {
        throw new Error('Administrator permission required.');
    }

    if (!ownerUid || !Array.isArray(updatedRecipes)) {
        throw new Error('Invalid recipe data.');
    }

    await docFor(ownerUid, 'pantrychef_recipes').set({
        value: updatedRecipes,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
};
  const KEYS = [
    'pantrychef_recipes', 'pantrychef_ingredients', 'pantrychef_categories',
    'pantrychef_favorites', 'pantrychef_mealplan', 'pantrychef_meal_plan',
    'pantrychef_shopping', 'pantrychef_shoppinglist', 'pantrychef_shopping_list'
  ];
  const docFor = (uid, key) => db.collection('users').doc(uid).collection('pantryData').doc(key);
  let currentUid = null;
  let applyingCloud = false;
  let syncTimer = null;

  async function syncLocalToCloud(uid, key) {
    if (!uid || applyingCloud || !KEYS.includes(key)) return;
    let value;
    try { value = JSON.parse(localStorage.getItem(key) || 'null'); } catch (_) { return; }
    if (value === null) return;
    await docFor(uid, key).set({ value, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
  }
  window.pantrySyncNow = async function () {
    if (!currentUid) return;
    for (const key of KEYS) await syncLocalToCloud(currentUid, key);
  };

  const originalSet = Storage.prototype.setItem;
  Storage.prototype.setItem = function (key, value) {
    originalSet.call(this, key, value);
    if (this === localStorage && currentUid && KEYS.includes(String(key)) && !applyingCloud) {
      clearTimeout(syncTimer);
      syncTimer = setTimeout(() => syncLocalToCloud(currentUid, String(key)).catch(e => console.error('PantryChef cloud sync failed:', e)), 350);
    }
  };

 
window.pantryCloudReady = new Promise(resolve => {
  auth.onAuthStateChanged(async user => {
    if (!user) {
      currentUid = null;
      localStorage.removeItem('pantrychef_user');
      resolve(false);
      return;
    }

    currentUid = user.uid;

    const profile = {
      uid: user.uid,
      name: user.displayName || user.email.split('@')[0],
      email: user.email
    };

    localStorage.setItem('pantrychef_user', JSON.stringify(profile));

    try {
      const snaps = await Promise.all(
        KEYS.map(key => docFor(user.uid, key).get())
      );

      const hasCloudData = snaps.some(s => s.exists);

      applyingCloud = true;

      snaps.forEach((snap, i) => {
        if (
          snap.exists &&
          Object.prototype.hasOwnProperty.call(snap.data(), 'value')
        ) {
          localStorage.setItem(
            KEYS[i],
            JSON.stringify(snap.data().value)
          );
        }
      });

      applyingCloud = false;

      if (!hasCloudData) {
        await window.pantrySyncNow();
      } else {
        const recipesIndex = KEYS.indexOf('pantrychef_recipes');

        if (!snaps[recipesIndex].exists) {
          await syncLocalToCloud(user.uid, 'pantrychef_recipes');
        }
      }

      resolve(true);
    } catch (e) {
      applyingCloud = false;
      console.error('PantryChef could not load cloud data:', e);
      resolve(false);
    }
  });
});
})();
