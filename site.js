    /* PantryChef site interactions.
    Uses localStorage plus firebase-sync.js for cloud sync. */
    (function () {
    'use strict';

    const $ = id => document.getElementById(id);

    const SEED = Array.isArray(window.seedRecipes)
        ? window.seedRecipes
        : (typeof seedRecipes !== 'undefined' ? seedRecipes : []);

    const DEFAULT_CATEGORIES = Array.isArray(window.defaultCategories)
        ? window.defaultCategories
        : (
            typeof defaultCategories !== 'undefined'
            ? defaultCategories
            : [
                'Filipino',
                'Quick & easy',
                'Vegetarian',
                'Budget meals',
                'Breakfast',
                'Seafood',
                'Desserts',
                'Other'
                ]
        );

    function load(key, fallback) {
        try {
        const value = JSON.parse(localStorage.getItem(key));
        return value == null ? fallback : value;
        } catch (_) {
        return fallback;
        }
    }

    function save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function esc(value) {
        return String(value == null ? '' : value).replace(
        /[&<>"']/g,
        char => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[char]
        );
    }

    function toast(message) {
        const el = $('pageToast') || $('toast');

        if (!el) return;

        el.textContent = message;
        el.classList.add('show');

        window.setTimeout(
        () => el.classList.remove('show'),
        2600
        );
    }

    function syncCloud() {
        if (typeof window.pantrySyncNow !== 'function') {
        return Promise.resolve();
        }

        return window.pantrySyncNow();
    }

    function currentUser() {
        return load('pantrychef_user', {}) || {};
    }

    function recipes() {
        const value = load('pantrychef_recipes', SEED);

        return Array.isArray(value) ? value : SEED.slice();
    }

async function loadRecipesForManagement() {
    const isAdmin =
        typeof window.pantryIsAdmin === 'function' &&
        await window.pantryIsAdmin();

    if (isAdmin &&
        typeof window.pantryLoadAllRecipes === 'function') {
        return await window.pantryLoadAllRecipes();
    }

    return recipes();
}


    // Preserve existing recipes and add missing built-in recipes.
    const initialRecipes = recipes();

    const knownIds = new Set(
        initialRecipes.map(recipe => recipe.id)
    );

    const mergedRecipes = initialRecipes.concat(
        SEED.filter(recipe => !knownIds.has(recipe.id))
    );

    if (mergedRecipes.length !== initialRecipes.length) {
        save('pantrychef_recipes', mergedRecipes);
    }

    let pageRecipes = recipes().filter(
        recipe => recipe.status !== 'Draft'
    );

    let pageFavorites = load('pantrychef_favorites', []);

    // --------------------------------------------------
    // RECIPE CARDS
    // --------------------------------------------------

    function recipeCard(recipe) {
        const saved = pageFavorites.includes(recipe.id);

        const ingredients = Array.isArray(recipe.ingredients)
        ? recipe.ingredients
        : [];

        const instructions = Array.isArray(recipe.instructions)
        ? recipe.instructions
        : [];

        return `
        <article class="page-recipe">

            <img
            src="${esc(recipe.image || '')}"
            alt="${esc(recipe.title)}"
            loading="lazy"
            onerror="
                this.onerror=null;
                this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'
            "
            >

            <div class="page-recipe-body">

            <div class="eyebrow">
                ${esc(recipe.category || 'Other')}
            </div>

            <h3>${esc(recipe.title)}</h3>

            <p>${esc(recipe.description || '')}</p>

            <div class="recipe-meta">
                <span>
                ◷ ${Number(recipe.prep || 0) +
                    Number(recipe.cook || 0)} min
                </span>

                <span>
                ₱${Number(recipe.cost || 0)} / serving
                </span>

                <span>
                ★ ${esc(recipe.rating || '4.6')}
                </span>
            </div>

            <div class="recipe-card-actions"
     style="display:flex !important;
            flex-direction:row !important;
            flex-wrap:wrap !important;
            gap:10px !important;
            visibility:visible !important;
            opacity:1 !important;">

  <button
    class="mini-btn primary"
    type="button"
    data-edit-recipe="${esc(recipe.id)}"
    style="display:inline-flex !important;
           visibility:visible !important;
           opacity:1 !important;
           cursor:pointer !important;">
    Edit recipe
  </button>

  <button
    class="mini-btn"
    type="button"
    data-delete-recipe="${esc(recipe.id)}"
    style="display:inline-flex !important;
           visibility:visible !important;
           opacity:1 !important;
           cursor:pointer !important;">
    Delete
  </button>

</div>

            <details>
                <summary
                style="cursor:pointer;font-size:13px;margin-top:8px"
                >
                View ingredients &amp; method
                </summary>

                <h4>Ingredients</h4>

                <p>
                ${ingredients.map(esc).join(' · ')}
                </p>

                <h4>Instructions</h4>

                <ol>
                ${instructions.map(step => `
                    <li style="margin:7px 0;color:#60665a">
                    ${esc(step)}
                    </li>
                `).join('')}
                </ol>
            </details>

            <small class="recipe-author">
                ${
                recipe.author
                    ? 'Shared by ' + esc(recipe.author)
                    : 'PantryChef collection'
                }
            </small>

            </div>
        </article>
        `;
    }

    
function bindRecipeCards(root) {
    if (!root) return;

    // FAVORITES
    root.querySelectorAll('[data-fav]').forEach(button => {
        button.addEventListener('click', () => {
            pageFavorites = load('pantrychef_favorites', []);

            const id = button.dataset.fav;

            pageFavorites = pageFavorites.includes(id)
                ? pageFavorites.filter(item => item !== id)
                : pageFavorites.concat(id);

            save('pantrychef_favorites', pageFavorites);

            toast(
                pageFavorites.includes(id)
                    ? 'Saved to favorites.'
                    : 'Removed from favorites.'
            );

            if ($('favoriteRecipes')) renderFavorites();
            if ($('allRecipes')) renderRecipes();
        });
    });

    // SHOPPING LIST
    root.querySelectorAll('[data-add-shopping]').forEach(button => {
        button.addEventListener('click', () => {
            const recipe = pageRecipes.find(
                item => String(item.id) === button.dataset.addShopping
            );

            if (!recipe) return;

            const list = load('pantrychef_shopping', []);

            (recipe.ingredients || []).forEach(name => {
                const text = String(name);

                const exists = list.some(
                    item => String(item.name).toLowerCase() === text.toLowerCase()
                );

                if (!exists) {
                    list.push({ name: text, checked: false });
                }
            });

            save('pantrychef_shopping', list);
            toast('Ingredients added to your shopping list.');
        });
    });

    // EDIT RECIPE
    root.querySelectorAll('[data-edit-recipe]').forEach(button => {
        button.addEventListener('click', async () => {
            const user = currentUser();
            const all = await loadRecipesForManagement();

const recipe = all.find(
    item =>
        String(item.id) === button.dataset.editRecipe
);

            if (!recipe) return;

            const isOwner =
                (user.uid && recipe.authorUid === user.uid) ||
                (user.email && recipe.author &&
                    recipe.author.toLowerCase() === user.email.toLowerCase()) ||
                (!recipe.authorUid && user.name && recipe.author === user.name);
            const isAdmin =
                typeof window.pantryIsAdmin === 'function' &&
                await window.pantryIsAdmin();

            if (!isOwner && !isAdmin) {
                toast('You can only edit recipes shared by your account.');
                return;
            }

            // Carry the selected recipe identity to the editing form.
            // Include its owner UID because different users may have the same recipe ID.
            save('pantrychef_editing_recipe_id', {
                id: recipe.id,
                ownerUid: recipe._pantryOwnerUid || recipe.authorUid || null
            });
            window.location.href = 'submit-recipe.html';
        });
    });

   
    // DELETE RECIPE
    root.querySelectorAll('[data-delete-recipe]').forEach(button => {
        button.addEventListener('click', async () => {
            try {
                const all = await loadRecipesForManagement();

                const recipe = all.find(
                    item => String(item.id) ===
                        button.dataset.deleteRecipe
                );

                if (!recipe) {
                    toast('Recipe not found.');
                    return;
                }

                const isAdmin =
                    await window.pantryIsAdmin();

                const user = currentUser();
const isOwner =
    (user?.uid && recipe.authorUid === user.uid) ||
    (user?.email && recipe.author &&
        recipe.author.toLowerCase() === user.email.toLowerCase()) ||
    (!recipe.authorUid && user?.name && recipe.author === user.name);

                if (!isOwner && !isAdmin) {
                    toast('You can only delete your own recipes.');
                    return;
                }

                if (!window.confirm(
                    `Delete "${recipe.title}"? This cannot be undone.`
                )) return;

                // Admins must update the original owner's server document,
                // including when deleting a recipe they originally submitted.
                if (isAdmin) {
                    const ownerUid = recipe._pantryOwnerUid;
                    if (!ownerUid) {
                        throw new Error('Recipe owner could not be identified on the server.');
                    }
                    if (typeof window.pantryLoadAllRecipes !== 'function' ||
                        typeof window.pantryUpdateOwnerRecipes !== 'function') {
                        throw new Error('Firebase admin recipe functions are unavailable.');
                    }

                    const serverRecipes = await window.pantryLoadAllRecipes();
                    const updatedOwnerRecipes = serverRecipes
                        .filter(item => item._pantryOwnerUid === ownerUid &&
                            String(item.id) !== String(recipe.id))
                        .map(({ _pantryOwnerUid, ...item }) => item);

                    await window.pantryUpdateOwnerRecipes(ownerUid, updatedOwnerRecipes);
                } else {
                    const updated = all.filter(
                        item => String(item.id) !== String(recipe.id)
                    );
                    save('pantrychef_recipes', updated);
                    await syncCloud();
                }

                toast('Recipe deleted successfully.');
                renderRecipes();

            } catch (error) {
                console.error('Recipe deletion failed:', error);
                toast('Could not delete the recipe. Please try again.');
            }
        });
    });
}



    // --------------------------------------------------
    // ALL RECIPES PAGE
    // --------------------------------------------------

    function renderRecipes() {
        const root = $('allRecipes');

        if (!root) return;

        pageRecipes = recipes().filter(
        recipe => recipe.status !== 'Draft'
        );

        const q = (
        ($('recipeSearch') || {}).value || ''
        ).toLowerCase().trim();

        const cat = ($('recipeCategory') || {}).value || 'all';
        const time = ($('recipeTime') || {}).value || 'all';
        const sort = ($('recipeSort') || {}).value || 'default';

        let list = pageRecipes.filter(recipe => {
        const searchable = [
            recipe.title,
            recipe.description,
            ...(recipe.ingredients || []),
            recipe.category
        ].join(' ').toLowerCase();

        return (
            searchable.includes(q) &&
            (cat === 'all' || recipe.category === cat) &&
            (
            time === 'all' ||
            Number(recipe.prep || 0) +
                Number(recipe.cook || 0) <= Number(time)
            )
        );
        });

        if (sort === 'cost') {
        list.sort(
            (a, b) =>
            Number(a.cost || 0) - Number(b.cost || 0)
        );
        }

        if (sort === 'time') {
        list.sort(
            (a, b) =>
            Number(a.prep || 0) +
            Number(a.cook || 0) -
            Number(b.prep || 0) -
            Number(b.cook || 0)
        );
        }

        if ($('recipeCount')) {
        $('recipeCount').textContent =
            `Showing ${list.length} of ${pageRecipes.length} recipes. Estimated costs are per serving.`;
        }

        root.innerHTML = list.length
        ? list.map(recipeCard).join('')
        : `
            <div class="empty-panel" style="grid-column:1/-1">
            <div class="emoji">🥣</div>
            <h3>No recipes found</h3>
            <p>Try a different search or category.</p>
            </div>
        `;

        bindRecipeCards(root);
    }

    // --------------------------------------------------
    // FAVORITES PAGE
    // --------------------------------------------------

    function renderFavorites() {
        const root = $('favoriteRecipes');

        if (!root) return;

        pageRecipes = recipes().filter(
        recipe => recipe.status !== 'Draft'
        );

        pageFavorites = load('pantrychef_favorites', []);

        const list = pageRecipes.filter(
        recipe => pageFavorites.includes(recipe.id)
        );

        root.innerHTML = list.length
        ? list.map(recipeCard).join('')
        : `
            <div class="empty-panel" style="grid-column:1/-1">
            <div class="emoji">♡</div>
            <h3>Your cookbook starts here</h3>
            <p>Save recipes you want to make later.</p>
            <a class="btn btn-green" href="recipes.html">
                Browse recipes ↗
            </a>
            </div>
        `;

        bindRecipeCards(root);
    }

    // --------------------------------------------------
    // SHOPPING LIST PAGE
    // --------------------------------------------------

    function renderShopping() {
        const root = $('shoppingItems');

        if (!root) return;

        const list = load('pantrychef_shopping', []);

        if ($('shoppingProgress')) {
        $('shoppingProgress').textContent =
            `${list.filter(item => item.checked).length} of ${list.length} items checked`;
        }

        root.innerHTML = list.length
        ? list.map((item, index) => `
            <label class="shopping-item ${item.checked ? 'checked' : ''}">

                <input
                type="checkbox"
                data-shop-check="${index}"
                ${item.checked ? 'checked' : ''}
                >

                <span>${esc(item.name)}</span>

                <button
                type="button"
                data-shop-remove="${index}"
                aria-label="Remove ${esc(item.name)}"
                >
                ×
                </button>

            </label>
            `).join('')
        : `
            <div class="empty-panel">
            <div class="emoji">🛒</div>
            <h3>Your shopping list is empty</h3>
            <p>Add items here or add ingredients from a recipe card.</p>
            <a class="btn btn-green" href="recipes.html">
                Browse recipes ↗
            </a>
            </div>
        `;

        root.querySelectorAll('[data-shop-check]').forEach(input => {
        input.addEventListener('change', () => {
            const items = load('pantrychef_shopping', []);
            const index = Number(input.dataset.shopCheck);

            if (!items[index]) return;

            items[index].checked = input.checked;

            save('pantrychef_shopping', items);

            renderShopping();
        });
        });

        root.querySelectorAll('[data-shop-remove]').forEach(button => {
        button.addEventListener('click', () => {
            const items = load('pantrychef_shopping', []);

            items.splice(
            Number(button.dataset.shopRemove),
            1
            );

            save('pantrychef_shopping', items);

            renderShopping();
        });
        });
    }

    // --------------------------------------------------
    // MEAL PLANNER PAGE
    // --------------------------------------------------

    function renderPlanner() {
        const root = $('plannerGrid');

        if (!root) return;

        pageRecipes = recipes().filter(
        recipe => recipe.status !== 'Draft'
        );

        const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
        ];

        const plan = load('pantrychef_mealplan', {});

        root.innerHTML = days.map(day => `
        <div class="day-column">

            <h3>${day}</h3>

            ${['Breakfast', 'Lunch', 'Dinner'].map(meal => `
            <label>${meal}</label>

            <select data-plan="${day}:${meal}">
                <option value="">Choose a meal</option>

                ${pageRecipes.map(recipe => `
                <option
                    value="${esc(recipe.id)}"
                    ${
                    plan[day + ':' + meal] === recipe.id
                        ? 'selected'
                        : ''
                    }
                >
                    ${esc(recipe.title)}
                </option>
                `).join('')}

            </select>
            `).join('')}

        </div>
        `).join('');

        root.querySelectorAll('[data-plan]').forEach(select => {
        select.addEventListener('change', () => {
            const current = load('pantrychef_mealplan', {});

            if (select.value) {
            current[select.dataset.plan] = select.value;
            } else {
            delete current[select.dataset.plan];
            }

            save('pantrychef_mealplan', current);

            toast('Meal plan saved.');
        });
        });
    }

    // --------------------------------------------------
    // SHARE, EDIT, AND DELETE RECIPES
    // --------------------------------------------------

    function initShareRecipe() {
        const form = $('shareRecipeForm');

        if (!form) return;

        
        
        
let editingId = null;
let editingOwnerUid = null;


function ownsRecipe(recipe) {
  const user = currentUser();

  if (!recipe) return false;

  if (user.uid && recipe.authorUid) {
    return recipe.authorUid === user.uid;
  }

  if (user.email && recipe.author) {
    return recipe.author.toLowerCase() ===
      user.email.toLowerCase();
  }

  if (!recipe.authorUid && user.name && recipe.author) {
    return recipe.author === user.name;
  }

  return false;
}

function resetEdit() {
    editingId = null;
    editingOwnerUid = null;
    form.reset();

    if ($('shareCost')) $('shareCost').value = 60;
    if ($('sharePrep')) $('sharePrep').value = 10;
    if ($('shareCook')) $('shareCook').value = 20;
    if ($('shareServings')) $('shareServings').value = 2;

    const submit = form.querySelector('[type="submit"]');
    if (submit) submit.textContent = 'Publish my recipe ↗';

    const cancel = $('cancelRecipeEdit');
    if (cancel) cancel.remove();

    if ($('shareMessage')) {
        $('shareMessage').textContent = '';
    }
}

async function startEditing(recipe) {
    if (
    !recipe ||
    (!(await ownsRecipe(recipe)) &&
     !(await window.pantryIsAdmin()))
) {
        if ($('shareMessage')) {
            $('shareMessage').textContent =
                'You can only edit your own recipes.';
        }
        return;
    }

    editingId = recipe.id;

    if ($('shareTitle')) $('shareTitle').value = recipe.title || '';
    if ($('shareDescription')) $('shareDescription').value = recipe.description || '';
    if ($('shareCategory')) $('shareCategory').value = recipe.category || '';
    if ($('shareCost')) $('shareCost').value = recipe.cost ?? 60;
    if ($('sharePrep')) $('sharePrep').value = recipe.prep ?? 10;
    if ($('shareCook')) $('shareCook').value = recipe.cook ?? 20;
    if ($('shareServings')) $('shareServings').value = recipe.servings ?? 2;
    if ($('shareIngredients')) {
        $('shareIngredients').value = Array.isArray(recipe.ingredients)
            ? recipe.ingredients.join('\n')
            : recipe.ingredients || '';
    }
    if ($('shareInstructions')) {
        $('shareInstructions').value = Array.isArray(recipe.instructions)
            ? recipe.instructions.join('\n')
            : recipe.instructions || '';
    }
    if ($('shareImage')) $('shareImage').value = recipe.image || '';

    const submit = form.querySelector('[type="submit"]');
    if (submit) submit.textContent = 'Save changes ↗';

    let cancel = $('cancelRecipeEdit');

    if (!cancel && submit) {
        cancel = document.createElement('button');
        cancel.type = 'button';
        cancel.id = 'cancelRecipeEdit';
        cancel.textContent = 'Cancel editing';
        submit.insertAdjacentElement('beforebegin', cancel);
        cancel.addEventListener('click', resetEdit);
    }

    if ($('shareMessage')) {
        $('shareMessage').textContent = 'Editing: ' + (recipe.title || 'your recipe');
    }

    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


 // Load a recipe selected from the Recipes page.
const pendingEdit = load('pantrychef_editing_recipe_id', null);

if (pendingEdit !== null) {
    const pendingEditId = (pendingEdit && typeof pendingEdit === 'object')
        ? pendingEdit.id
        : pendingEdit;
    const pendingOwnerUid = (pendingEdit && typeof pendingEdit === 'object')
        ? pendingEdit.ownerUid
        : null;

    loadRecipesForManagement()
        .then(all => {
            let matches = all.filter(
                item => String(item.id) === String(pendingEditId)
            );
            if (pendingOwnerUid) {
                const ownerMatches = matches.filter(item =>
                    String(item._pantryOwnerUid || item.authorUid || '') === String(pendingOwnerUid)
                );
                if (ownerMatches.length) matches = ownerMatches;
            }
            const pendingRecipe = matches[0];

            if (pendingRecipe) {
                return startEditing(pendingRecipe);
            } else {
                toast('Recipe not found. Please return to the recipes list and try again.');
            }
        })
        .catch(error => {
            console.error('Could not load recipe for editing:', error);
            toast('Could not load the recipe. Please try again.');
        })
        .finally(() => {
            save('pantrychef_editing_recipe_id', null);
        });
}


       async function saveAndSync(all, message) {
    // Save locally. firebase-sync.js monitors this storage key.
    save('pantrychef_recipes', all);

    renderMine();

    // Explicitly request a Firebase synchronization.
    try {
        await syncCloud();

        if ($('shareMessage')) {
            $('shareMessage').textContent = message;
        }
    } catch (error) {
        console.error('PantryChef recipe sync failed:', error);

        if ($('shareMessage')) {
            $('shareMessage').textContent =
                `${message} The local change is saved, but cloud sync failed. Please check your connection and sign in again.`;
        }
    }
}

        

        async function renderMine() {
        const root = $('mySharedRecipes');

        if (!root) return;

        const all = await loadRecipesForManagement();

        const isAdmin = await window.pantryIsAdmin();

const mine = isAdmin
    ? all
    : all.filter(recipe => ownsRecipe(recipe));
    
    

        const empty = $('myRecipesEmpty');

        if (empty) {
            empty.style.display = mine.length ? 'none' : 'block';
        }

        root.innerHTML = mine.map(recipe => `
            <article class="page-recipe">

            <img
                src="${esc(recipe.image || '')}"
                alt="${esc(recipe.title)}"
                loading="lazy"
                onerror="
                this.onerror=null;
                this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'
                "
            >

            <div class="page-recipe-body">

                <div class="eyebrow">YOUR RECIPE</div>

                <h3>${esc(recipe.title)}</h3>

                <p>${esc(recipe.description || '')}</p>

            
<div class="recipe-card-actions">
    <button
        class="mini-btn primary"
        type="button"
        data-edit-recipe="${esc(recipe.id)}"
        data-owner-uid="${esc(recipe._pantryOwnerUid || recipe.authorUid || '')}">
        Edit recipe
    </button>

    <button
        class="mini-btn"
        type="button"
        data-delete-recipe="${esc(recipe.id)}"
        data-owner-uid="${esc(recipe._pantryOwnerUid || recipe.authorUid || '')}">
        Delete
    </button>
</div>

                </div>

            </div>
            </article>
        `).join('');

        // EDIT RECIPE: use the same form loader as recipe cards.
        root.querySelectorAll('[data-edit-recipe]').forEach(button => {
            button.addEventListener('click', async () => {
                try {
                    const all = await loadRecipesForManagement();
                    const recipe = all.find(item =>
                        String(item.id) === button.dataset.editRecipe &&
                        (!button.dataset.ownerUid ||
                         String(item._pantryOwnerUid || item.authorUid || '') === button.dataset.ownerUid)
                    );
                    if (!recipe) {
                        toast('Recipe not found.');
                        return;
                    }
                    await startEditing(recipe);
                } catch (error) {
                    console.error('Could not open recipe editor:', error);
                    toast('Could not open this recipe for editing.');
                }
            });
        });

        // DELETE RECIPE
        
        
        // DELETE RECIPE
        root.querySelectorAll('[data-delete-recipe]').forEach(button => {
            button.addEventListener('click', async () => {
                try {
                    const all = await loadRecipesForManagement();

                    const recipe = all.find(item =>
                        String(item.id) === button.dataset.deleteRecipe &&
                        (!button.dataset.ownerUid ||
                         String(item._pantryOwnerUid || item.authorUid || '') === button.dataset.ownerUid)
                    );

                    if (!recipe) {
                        toast('Recipe not found.');
                        return;
                    }

                    const isAdmin =
                        typeof window.pantryIsAdmin === 'function' &&
                        await window.pantryIsAdmin();

                    const isOwner = ownsRecipe(recipe);

                    if (!isOwner && !isAdmin) {
                        toast('You can only delete your own recipes.');
                        return;
                    }

                    if (!window.confirm(
                        `Delete "${recipe.title}"? This cannot be undone.`
                    )) {
                        return;
                    }

                    // Admins always write to the original owner's Firestore document.
                    if (isAdmin) {
                        const ownerUid = recipe._pantryOwnerUid;
                        if (!ownerUid) {
                            throw new Error('Recipe owner could not be identified on the server.');
                        }
                        if (typeof window.pantryLoadAllRecipes !== 'function' ||
                            typeof window.pantryUpdateOwnerRecipes !== 'function') {
                            throw new Error('Firebase admin recipe functions are unavailable.');
                        }

                        const serverRecipes = await window.pantryLoadAllRecipes();
                        const updatedOwnerRecipes = serverRecipes
                            .filter(item => item._pantryOwnerUid === ownerUid &&
                                String(item.id) !== String(recipe.id))
                            .map(({ _pantryOwnerUid, ...item }) => item);

                        await window.pantryUpdateOwnerRecipes(ownerUid, updatedOwnerRecipes);
                    } else {
                        const updated = all.filter(
                            item => String(item.id) !== String(recipe.id)
                        );
                        await saveAndSync(updated, 'Recipe deleted successfully.');
                    }

                    if (String(editingId) === String(recipe.id)) {
                        resetEdit();
                    }

                    toast('Recipe deleted successfully.');
                    await renderMine();
                    renderRecipes();
                } catch (error) {
                    console.error('Recipe deletion failed:', error);
                    toast(
                        'Could not delete the recipe. Check the browser console for details.'
                    );
                }
            });
        });

        }

        // CREATE OR UPDATE RECIPE
        form.addEventListener('submit', async event => {
        event.preventDefault();

        const user = currentUser();

        if (!user.uid && window.pantryFirebaseReady) {
            if ($('shareMessage')) {
            $('shareMessage').textContent =
                'Please sign in before sharing or editing recipes.';
            }
            return;
        }

        const all = await loadRecipesForManagement();

        const ingredients = $('shareIngredients')
            .value
            .split(/[\n,]+/)
            .map(value => value.trim())
            .filter(Boolean);

        const instructions = $('shareInstructions')
            .value
            .split(/\n+/)
            .map(value => value.trim())
            .filter(Boolean);

        if (!ingredients.length || !instructions.length) {
            if ($('shareMessage')) {
            $('shareMessage').textContent =
                'Please enter ingredients and at least one cooking instruction.';
            }
            return;
        }

        const data = {
            title: $('shareTitle').value.trim(),

            description: $('shareDescription').value.trim(),

            category: $('shareCategory').value,

            prep: Number($('sharePrep').value) || 0,

            cook: Number($('shareCook').value) || 0,

            servings: Math.max(
            1,
            Number($('shareServings').value) || 1
            ),

            cost: Number($('shareCost').value) || 0,

            ingredients,

            instructions,

            image:
            $('shareImage').value.trim() ||
            (SEED[0] && SEED[0].image) ||
            '',

            status: 'Published'
        };

        const submit = form.querySelector('[type="submit"]');

        if (submit) submit.disabled = true;

        try {
            if (editingId !== null) {
    const index = all.findIndex(recipe =>
        String(recipe.id) === String(editingId) &&
        (!editingOwnerUid ||
         String(recipe._pantryOwnerUid || recipe.authorUid || '') === String(editingOwnerUid))
    );

    if (index < 0) {
        throw new Error('Recipe not found.');
    }

    const recipe = all[index];
    const isAdmin = await window.pantryIsAdmin();
    const isOwner = await ownsRecipe(recipe);

    if (!isOwner && !isAdmin) {
        throw new Error('You cannot edit this recipe.');
    }

    const updatedRecipe = {
        ...recipe,
        ...data
    };

    if (isAdmin) {
        const ownerUid = recipe._pantryOwnerUid;
        if (!ownerUid) {
            throw new Error('Original recipe owner could not be identified on the server.');
        }
        if (typeof window.pantryLoadAllRecipes !== 'function' ||
            typeof window.pantryUpdateOwnerRecipes !== 'function') {
            throw new Error('Firebase admin recipe functions are unavailable.');
        }

        const serverRecipes = await window.pantryLoadAllRecipes();
        const { _pantryOwnerUid: ignoredOwnerTag, ...updatedRecipeForStorage } = updatedRecipe;
        const updatedOwnerRecipes = serverRecipes
            .filter(item => item._pantryOwnerUid === ownerUid)
            .map(({ _pantryOwnerUid, ...item }) =>
                String(item.id) === String(recipe.id)
                    ? updatedRecipeForStorage
                    : item
            );

        await window.pantryUpdateOwnerRecipes(ownerUid, updatedOwnerRecipes);
    } else {
        all[index] = updatedRecipe;
        await saveAndSync(all, 'Recipe changes saved successfully.');
    }

    toast('Recipe updated successfully.');
    resetEdit();
            } else {
            const newRecipe = {
                id: `community-${user.uid || 'local'}-${Date.now()}`,

                ...data,

                rating: 4.5,

                authorUid: user.uid || null,

                author:
                user.email ||
                user.name ||
                'Local user'
            };

            all.unshift(newRecipe);

            await saveAndSync(
                all,
                'Your recipe has been published successfully.'
            );

            toast('Recipe shared successfully.');

            form.reset();
            }

            renderMine();
        } catch (error) {
            console.error(
            'PantryChef could not save the recipe:',
            error
            );

            if ($('shareMessage')) {
            $('shareMessage').textContent =
                'The recipe could not be synchronized. Check your internet connection and Firebase permissions, then try again.';
            }
        } finally {
            if (submit) submit.disabled = false;
        }
        });

        renderMine();

        // Refresh after Firebase authentication and cloud data loading.
        if (
        window.pantryCloudReady &&
        typeof window.pantryCloudReady.then === 'function'
        ) {
        window.pantryCloudReady
            .then(renderMine)
            .catch(error => {
            console.error(
                'PantryChef cloud initialization failed:',
                error
            );
            });
        }
    }

    // --------------------------------------------------
    // PAGE INITIALIZATION
    // --------------------------------------------------

    function initPage() {
        const menu = $('pageMobileMenu');

        if (menu) {
        menu.addEventListener('click', () => {
            const nav = $('pageNav');

            if (!nav) return;

            nav.classList.toggle('mobile-open');

            nav.style.display =
            nav.classList.contains('mobile-open')
                ? 'flex'
                : '';
        });
        }

        // Recipes page
        if ($('allRecipes')) {
        const categorySelect = $('recipeCategory');

        if (categorySelect) {
            const categories = [
            ...new Set(
                DEFAULT_CATEGORIES.concat(
                recipes()
                    .map(recipe => recipe.category)
                    .filter(Boolean)
                )
            )
            ];

            categorySelect.innerHTML =
            '<option value="all">All categories</option>' +
            categories.map(category => `
                <option value="${esc(category)}">
                ${esc(category)}
                </option>
            `).join('');
        }

        [
            'recipeSearch',
            'recipeCategory',
            'recipeTime',
            'recipeSort'
        ].forEach(id => {
            const el = $(id);

            if (el) {
            el.addEventListener(
                id === 'recipeSearch' ? 'input' : 'change',
                renderRecipes
            );
            }
        });

        renderRecipes();
        }

        // Favorites page
        if ($('favoriteRecipes')) {
        renderFavorites();
        }

        // Shopping list page
        if ($('shoppingItems')) {
        const form = $('shoppingAddForm');

        if (form) {
            form.addEventListener('submit', event => {
            event.preventDefault();

            const input = $('shoppingInput');

            const name = input
                ? input.value.trim()
                : '';

            if (!name) return;

            const list = load('pantrychef_shopping', []);

            const exists = list.some(
                item =>
                String(item.name).toLowerCase() ===
                name.toLowerCase()
            );

            if (!exists) {
                list.push({
                name,
                checked: false
                });
            }

            save('pantrychef_shopping', list);

            input.value = '';

            renderShopping();
            });
        }

        const clear = $('clearChecked');

        if (clear) {
            clear.addEventListener('click', () => {
            save(
                'pantrychef_shopping',
                load('pantrychef_shopping', [])
                .filter(item => !item.checked)
            );

            renderShopping();
            });
        }

        renderShopping();
        }

        // Meal planner page
        if ($('plannerGrid')) {
        const auto = $('autoPlan');

        if (auto) {
            auto.addEventListener('click', () => {
            const all = recipes().filter(
                recipe => recipe.status !== 'Draft'
            );

            if (!all.length) {
                toast(
                'Add recipes before creating a meal plan.'
                );
                return;
            }

            const plan = {};

            [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ].forEach((day, dayIndex) => {
                ['Breakfast', 'Lunch', 'Dinner'].forEach(
                (meal, mealIndex) => {
                    plan[`${day}:${meal}`] =
                    all[
                        (dayIndex * 3 + mealIndex) % all.length
                    ].id;
                }
                );
            });

            save('pantrychef_mealplan', plan);

            renderPlanner();

            toast('A week of meal ideas is ready.');
            });
        }

        const clear = $('clearPlan');

        if (clear) {
            clear.addEventListener('click', () => {
            save('pantrychef_mealplan', {});

            renderPlanner();

            toast('Meal plan cleared.');
            });
        }

        renderPlanner();
        }

        // Share Recipe page
        initShareRecipe();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPage);
    } else {
        initPage();
    }
    })();