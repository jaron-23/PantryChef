const acctNext=new URLSearchParams(location.search).get('next')||'index.html';
const acctSafeNext=['index.html','recipes.html','favorites.html','meal-planner.html','shopping-list.html','submit-recipe.html','about.html'].includes(acctNext)?acctNext:'index.html';
const acctMsg=id=>document.getElementById(id);
const firebaseReady=()=>window.pantryFirebaseReady&&window.pantryAuth;
document.getElementById('registerForm').addEventListener('submit',async e=>{
 e.preventDefault();
 const name=document.getElementById('registerName').value.trim(),email=document.getElementById('registerEmail').value.trim(),password=document.getElementById('registerPassword').value,confirm=document.getElementById('registerConfirm').value,msg=acctMsg('registerMessage');
 if(password!==confirm){msg.textContent='Passwords do not match.';return}
 if(!firebaseReady()){msg.textContent='Firebase is not configured. Open firebase-config.js and add your Firebase web app settings first.';return}
 msg.textContent='Creating your account…';
 try{const cred=await pantryAuth.createUserWithEmailAndPassword(email,password);await cred.user.updateProfile({displayName:name});await pantryDb.collection('users').doc(cred.user.uid).set({name,email:cred.user.email,createdAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});localStorage.setItem('pantrychef_user',JSON.stringify({uid:cred.user.uid,name,email:cred.user.email}));msg.textContent='Account created! Redirecting…';setTimeout(()=>location.href=acctSafeNext,500)}
 catch(err){msg.textContent=authFriendlyError(err)}
});
document.getElementById('accountLoginForm').addEventListener('submit',async e=>{
 e.preventDefault();const email=document.getElementById('accountEmail').value.trim(),password=document.getElementById('accountPassword').value,msg=acctMsg('accountLoginMessage');
 if(!firebaseReady()){msg.textContent='Firebase is not configured. Open firebase-config.js and add your Firebase web app settings first.';return}
 msg.textContent='Signing in…';
 try{const cred=await pantryAuth.signInWithEmailAndPassword(email,password);localStorage.setItem('pantrychef_user',JSON.stringify({uid:cred.user.uid,name:cred.user.displayName||email.split('@')[0],email:cred.user.email}));msg.textContent='You are logged in. Redirecting…';setTimeout(()=>location.href=acctSafeNext,450)}
 catch(err){msg.textContent=authFriendlyError(err)}
});
function authFriendlyError(err){const c=err&&err.code;return ({'auth/email-already-in-use':'An account with this email already exists. Please log in.','auth/invalid-email':'Please enter a valid email address.','auth/weak-password':'Please use a password with at least 6 characters.','auth/invalid-credential':'Email or password is incorrect.','auth/user-not-found':'No account was found for this email. Create an account first.','auth/wrong-password':'Email or password is incorrect.','auth/too-many-requests':'Too many attempts. Please try again later.','auth/network-request-failed':'Network error. Check your connection and try again.'})[c]||'Could not complete the request. Check your Firebase setup and try again.'}
