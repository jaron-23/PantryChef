# PantryChef Firebase setup

This version replaces browser-only account registration/login with Firebase Authentication and syncs the user's PantryChef app data to Cloud Firestore.

## 1. Add your Firebase web config
1. Open Firebase Console → Project settings → General → Your apps → PantryChef Web.
2. Choose the **Config** option and copy the `firebaseConfig` values.
3. Open `firebase-config.js` and replace each `PASTE_...` placeholder with the matching value. Do not include the outer `const firebaseConfig =` line; keep the `window.PANTRYCHEF_FIREBASE_CONFIG = { ... };` structure.
4. Save the file.

## 2. Enable sign-in
Firebase Console → Authentication → Sign-in method → Email/Password → Enable.

## 3. Publish Firestore rules
Open Firebase Console → Firestore Database → Rules. Replace the rules with the contents of `firestore.rules`, then click **Publish**. These rules restrict profile and synced app data to the signed-in owner. Do not use public read/write rules.

## 4. Deploy the website
From this folder, open a terminal and run:
```bash
firebase deploy
```
If Firebase CLI asks you to choose a project, select your existing PantryChef project. This folder's `firebase.json` serves the site files from the project root.

## 5. Test it
1. Open the hosted website and create an account.
2. Add a favorite, change the meal plan, or edit the shopping list.
3. Sign in with the same account in a second browser/device. The synced data should appear after the cloud data loads.
4. If login fails, check that Email/Password is enabled and the hosting domain is listed under Authentication → Settings → Authorized domains.

## Notes
- Firebase Authentication stores account credentials; this project does not save passwords in localStorage or Firestore.
- Cloud sync covers the existing app's localStorage data keys for recipes, favorites, ingredients/categories, meal plans and shopping list. The current implementation stores each user's app data privately under `users/{uid}/pantryData/`.
- The Firebase web config is designed to be present in a browser app; Firestore Security Rules and Authentication protect user data.
- Existing demo accounts saved in localStorage are not imported. Create a new Firebase account using the same email/password if needed.
