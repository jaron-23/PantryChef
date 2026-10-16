# PantryChef — Multi-page Recipe Community

## Pages
- `index.html` — ingredient matching homepage (Home stays in the navigation).
- `recipes.html` — searchable recipe library with 50+ starter recipes and food photos.
- `submit-recipe.html` — signed-in users can publish a recipe with ingredients, instructions, and an optional photo URL.
- `account.html` — create an account or log in.
- `favorites.html` — save and revisit recipes.
- `meal-planner.html` — build a weekly meal plan.
- `shopping-list.html` — organize ingredients.
- `about.html` — project information.

## Run it
Open `index.html` in a browser. If your browser restricts local file storage, run the folder with a simple local web server (for example, VS Code Live Server). Internet access is needed for the remote Unsplash food photos.

## Demo account behavior and important limitation
This is a front-end demo. Accounts, login sessions, favorite recipes, meal plans, shopping lists, and community recipe uploads are stored in the browser's `localStorage`. Create an account first, then log in to use the functional pages. Uploaded recipes are shared across accounts in the same browser profile, but **they are not automatically shared with other people's devices or browsers**. For true public multi-user accounts and globally shared uploads, connect a backend such as Firebase Authentication and Cloud Firestore (with security rules). This demo does not provide production-grade authentication or secure password storage.

All sample food photos are remote image URLs; use images you own or have permission to share when uploading a recipe.
