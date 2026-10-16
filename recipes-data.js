const seedRecipes = [
  {
    "id": "r1",
    "title": "Garlic Egg Fried Rice",
    "description": "A quick, comforting pan of garlicky rice with fluffy eggs and scallions.",
    "category": "Quick & easy",
    "prep": 5,
    "cook": 10,
    "servings": 2,
    "cost": 45,
    "ingredients": [
      "rice",
      "eggs",
      "garlic",
      "spring onions",
      "soy sauce",
      "oil"
    ],
    "instructions": [
      "Break up the cold rice and mince the garlic. Beat the eggs in a small bowl.",
      "Heat oil in a pan and sauté garlic until fragrant.",
      "Add the eggs and scramble until just set. Add the rice and toss well.",
      "Season with soy sauce, top with spring onions, and serve hot."
    ],
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.8
  },
  {
    "id": "r2",
    "title": "Filipino Chicken Adobo",
    "description": "Savory, tangy chicken simmered in soy sauce, vinegar, garlic, and pepper.",
    "category": "Filipino",
    "prep": 10,
    "cook": 35,
    "servings": 4,
    "cost": 88,
    "ingredients": [
      "chicken",
      "garlic",
      "soy sauce",
      "vinegar",
      "bay leaves",
      "black pepper",
      "rice"
    ],
    "instructions": [
      "Combine chicken, soy sauce, garlic, and pepper in a bowl for 10 minutes.",
      "Place chicken and marinade in a pot. Add vinegar, bay leaves, and a little water.",
      "Bring to a simmer without stirring for the first few minutes.",
      "Cover and cook until tender, then uncover to reduce the sauce. Serve with rice."
    ],
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.9
  },
  {
    "id": "r3",
    "title": "Tomato & Egg Skillet",
    "description": "Juicy tomatoes and soft scrambled eggs make a simple, satisfying meal.",
    "category": "Budget meals",
    "prep": 5,
    "cook": 12,
    "servings": 2,
    "cost": 48,
    "ingredients": [
      "tomatoes",
      "eggs",
      "garlic",
      "onion",
      "oil",
      "salt"
    ],
    "instructions": [
      "Cut tomatoes into wedges and mince the garlic.",
      "Sauté garlic and onion in a lightly oiled pan.",
      "Add tomatoes and cook until softened and juicy.",
      "Pour in beaten eggs and gently stir until just set. Season and serve."
    ],
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.6
  },
  {
    "id": "r4",
    "title": "Crispy Tofu Rice Bowl",
    "description": "Golden tofu, steamed rice, and crunchy vegetables with a quick soy dressing.",
    "category": "Vegetarian",
    "prep": 10,
    "cook": 15,
    "servings": 2,
    "cost": 62,
    "ingredients": [
      "tofu",
      "rice",
      "cabbage",
      "carrots",
      "garlic",
      "soy sauce"
    ],
    "instructions": [
      "Press tofu dry and cut into cubes. Slice the cabbage and carrots.",
      "Pan-fry tofu with a little oil until golden on most sides.",
      "Add garlic and a splash of soy sauce to make a quick glaze.",
      "Serve over rice with fresh crunchy vegetables."
    ],
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.7
  },
  {
    "id": "r5",
    "title": "Creamy Garlic Mushroom Pasta",
    "description": "A cozy pasta dish with mushrooms, garlic, and a silky creamy sauce.",
    "category": "Quick & easy",
    "prep": 8,
    "cook": 18,
    "servings": 2,
    "cost": 95,
    "ingredients": [
      "pasta",
      "mushrooms",
      "garlic",
      "milk",
      "butter",
      "cheese"
    ],
    "instructions": [
      "Cook pasta in salted water according to package directions. Reserve a little pasta water.",
      "Sauté sliced mushrooms in butter until browned. Add garlic.",
      "Add milk and cheese and stir until creamy. Loosen with pasta water if needed.",
      "Toss pasta through the sauce and season with pepper."
    ],
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.8
  },
  {
    "id": "r6",
    "title": "Cabbage & Carrot Pancakes",
    "description": "Crispy-edged savory vegetable pancakes made from everyday staples.",
    "category": "Vegetarian",
    "prep": 10,
    "cook": 12,
    "servings": 2,
    "cost": 42,
    "ingredients": [
      "cabbage",
      "carrots",
      "eggs",
      "flour",
      "garlic",
      "salt"
    ],
    "instructions": [
      "Shred cabbage and carrot into thin strips.",
      "Mix vegetables with eggs, flour, minced garlic, and a pinch of salt.",
      "Spoon small portions into a lightly oiled hot pan and flatten.",
      "Cook until golden on both sides and serve with a dipping sauce."
    ],
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.5
  },
  {
    "id": "r7",
    "title": "Loaded Breakfast Omelet",
    "description": "A fluffy omelet filled with tomatoes, cheese, and whatever vegetables you have.",
    "category": "Breakfast",
    "prep": 5,
    "cook": 8,
    "servings": 1,
    "cost": 52,
    "ingredients": [
      "eggs",
      "tomatoes",
      "cheese",
      "onion",
      "oil",
      "salt"
    ],
    "instructions": [
      "Beat eggs with a pinch of salt. Chop tomatoes and onion.",
      "Sauté the onion and tomatoes in a nonstick pan until softened.",
      "Pour in eggs and cook over medium-low heat.",
      "Add cheese, fold the omelet, and cook until set."
    ],
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.6
  },
  {
    "id": "r8",
    "title": "One-Pot Chicken & Potato Stew",
    "description": "Tender chicken and potatoes in a warming, savory home-style broth.",
    "category": "Filipino",
    "prep": 12,
    "cook": 30,
    "servings": 4,
    "cost": 92,
    "ingredients": [
      "chicken",
      "potatoes",
      "carrots",
      "garlic",
      "onion",
      "broth"
    ],
    "instructions": [
      "Season chicken and brown lightly in a pot.",
      "Add garlic and onion and cook until fragrant.",
      "Add potatoes, carrots, and broth. Bring to a gentle simmer.",
      "Cover and cook until chicken is cooked through and vegetables are tender."
    ],
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.7
  },
  {
    "id": "r9",
    "title": "Sardines & Tomato Rice",
    "description": "A pantry-friendly Filipino favorite with tomato, garlic, and warm rice.",
    "category": "Budget meals",
    "prep": 5,
    "cook": 10,
    "servings": 2,
    "cost": 38,
    "ingredients": [
      "sardines",
      "tomatoes",
      "rice",
      "garlic",
      "onion",
      "chili"
    ],
    "instructions": [
      "Sauté garlic and onion in a little oil.",
      "Add chopped tomatoes and cook until soft.",
      "Add canned sardines and gently warm through. Add chili if you like.",
      "Serve over freshly cooked rice."
    ],
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.5
  },
  {
    "id": "r10",
    "title": "Banana Oat Pancakes",
    "description": "Naturally sweet pancakes for a simple breakfast or afternoon snack.",
    "category": "Breakfast",
    "prep": 5,
    "cook": 10,
    "servings": 2,
    "cost": 50,
    "ingredients": [
      "banana",
      "eggs",
      "oats",
      "milk",
      "cinnamon"
    ],
    "instructions": [
      "Mash ripe banana in a bowl.",
      "Mix in eggs, oats, milk, and cinnamon until combined.",
      "Spoon small pancakes into a lightly greased pan.",
      "Cook until bubbles appear, flip, and finish cooking."
    ],
    "image": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.8
  },
  {
    "id": "r11",
    "title": "Fresh Cucumber Tomato Salad",
    "description": "A bright, crunchy side dish with a quick tangy dressing.",
    "category": "Vegetarian",
    "prep": 10,
    "cook": 0,
    "servings": 2,
    "cost": 40,
    "ingredients": [
      "cucumber",
      "tomatoes",
      "onion",
      "vinegar",
      "salt",
      "pepper"
    ],
    "instructions": [
      "Slice cucumber, tomatoes, and onion.",
      "Whisk vinegar with a little oil, salt, and pepper.",
      "Toss vegetables with the dressing.",
      "Chill briefly before serving if desired."
    ],
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.4
  },
  {
    "id": "r12",
    "title": "Quick Chicken & Cabbage Stir-Fry",
    "description": "A colorful one-pan meal with tender chicken and crisp cabbage.",
    "category": "Quick & easy",
    "prep": 10,
    "cook": 12,
    "servings": 2,
    "cost": 79,
    "ingredients": [
      "chicken",
      "cabbage",
      "carrots",
      "garlic",
      "soy sauce",
      "rice"
    ],
    "instructions": [
      "Slice chicken thinly and shred cabbage and carrots.",
      "Stir-fry chicken in a hot pan until cooked through.",
      "Add garlic and vegetables and cook until crisp-tender.",
      "Season with soy sauce and serve with rice."
    ],
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.7
  },
  {
    "id": "r13",
    "title": "Chicken Tinola",
    "description": "Ginger chicken soup with green papaya and leafy greens.",
    "category": "Filipino",
    "prep": 12,
    "cook": 35,
    "servings": 4,
    "cost": 95,
    "ingredients": [
      "chicken",
      "ginger",
      "garlic",
      "onion",
      "green papaya",
      "spinach"
    ],
    "instructions": [
      "Sauté garlic, onion, and ginger.",
      "Add chicken and brown lightly.",
      "Pour in water and simmer until chicken is tender.",
      "Add papaya and greens; cook until tender."
    ],
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.9
  },
  {
    "id": "r14",
    "title": "Pork Sinigang",
    "description": "A tangy tamarind broth with pork and vegetables.",
    "category": "Filipino",
    "prep": 15,
    "cook": 55,
    "servings": 4,
    "cost": 105,
    "ingredients": [
      "pork",
      "tamarind",
      "tomatoes",
      "radish",
      "kangkong",
      "onion"
    ],
    "instructions": [
      "Simmer pork with onion and tomatoes until tender.",
      "Add tamarind seasoning and radish.",
      "Add remaining vegetables and cook until just tender.",
      "Serve hot with rice."
    ],
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.3
  },
  {
    "id": "r15",
    "title": "Pancit Canton",
    "description": "Stir-fried noodles with vegetables and savory sauce.",
    "category": "Filipino",
    "prep": 15,
    "cook": 20,
    "servings": 4,
    "cost": 78,
    "ingredients": [
      "noodles",
      "cabbage",
      "carrots",
      "chicken",
      "soy sauce",
      "garlic"
    ],
    "instructions": [
      "Cook noodles according to package directions.",
      "Stir-fry garlic and chicken until cooked.",
      "Add vegetables and soy sauce.",
      "Toss in noodles and stir-fry until coated."
    ],
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.4
  },
  {
    "id": "r16",
    "title": "Tuna Sisig Rice Bowl",
    "description": "A quick tuna version of sizzling sisig with calamansi and onion.",
    "category": "Filipino",
    "prep": 8,
    "cook": 10,
    "servings": 2,
    "cost": 55,
    "ingredients": [
      "canned tuna",
      "onion",
      "chili",
      "calamansi",
      "mayonnaise",
      "rice"
    ],
    "instructions": [
      "Drain tuna and flake it.",
      "Sauté onion and chili until fragrant.",
      "Add tuna and cook until lightly crisp.",
      "Finish with calamansi and a little mayonnaise; serve with rice."
    ],
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.5
  },
  {
    "id": "r17",
    "title": "Ginisang Monggo",
    "description": "Mung beans simmered with garlic, tomato, and leafy greens.",
    "category": "Filipino",
    "prep": 10,
    "cook": 40,
    "servings": 4,
    "cost": 55,
    "ingredients": [
      "mung beans",
      "garlic",
      "tomatoes",
      "onion",
      "spinach",
      "fish sauce"
    ],
    "instructions": [
      "Boil mung beans until soft.",
      "Sauté garlic, onion, and tomatoes.",
      "Stir in cooked beans and some cooking liquid.",
      "Add greens and season to taste."
    ],
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.6
  },
  {
    "id": "r18",
    "title": "Beef Tapa Garlic Rice",
    "description": "Sweet-savory beef strips with garlic rice and a fried egg.",
    "category": "Filipino",
    "prep": 15,
    "cook": 20,
    "servings": 2,
    "cost": 125,
    "ingredients": [
      "beef",
      "soy sauce",
      "garlic",
      "sugar",
      "rice",
      "eggs"
    ],
    "instructions": [
      "Marinate thin beef strips with soy sauce, garlic, and sugar.",
      "Pan-fry beef until browned and cooked through.",
      "Sauté leftover rice with garlic.",
      "Serve beef over garlic rice with a fried egg."
    ],
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.7
  },
  {
    "id": "r19",
    "title": "Chicken Inasal-Inspired Skewers",
    "description": "Grilled-style chicken skewers with calamansi, garlic, and annatto.",
    "category": "Filipino",
    "prep": 25,
    "cook": 18,
    "servings": 3,
    "cost": 95,
    "ingredients": [
      "chicken",
      "calamansi",
      "garlic",
      "vinegar",
      "oil",
      "rice"
    ],
    "instructions": [
      "Mix calamansi, vinegar, garlic, oil, and seasoning.",
      "Marinate chicken pieces for at least 20 minutes.",
      "Thread onto skewers and grill or pan-sear until cooked through.",
      "Serve with rice."
    ],
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.8
  },
  {
    "id": "r20",
    "title": "Tortang Talong",
    "description": "Smoky eggplant omelet with a simple tomato side.",
    "category": "Filipino",
    "prep": 10,
    "cook": 20,
    "servings": 2,
    "cost": 42,
    "ingredients": [
      "eggplant",
      "eggs",
      "tomatoes",
      "onion",
      "salt",
      "oil"
    ],
    "instructions": [
      "Roast eggplant until soft, then peel and flatten.",
      "Beat eggs with chopped onion and salt.",
      "Dip eggplant in egg and pan-fry until golden on both sides.",
      "Serve with chopped tomatoes."
    ],
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.9
  },
  {
    "id": "r21",
    "title": "Lumpiang Gulay",
    "description": "Crispy vegetable spring rolls for a snack or side dish.",
    "category": "Filipino",
    "prep": 25,
    "cook": 15,
    "servings": 4,
    "cost": 60,
    "ingredients": [
      "cabbage",
      "carrots",
      "green beans",
      "garlic",
      "spring roll wrappers",
      "oil"
    ],
    "instructions": [
      "Finely slice the vegetables.",
      "Stir-fry garlic and vegetables until just tender; cool.",
      "Wrap small portions in spring roll wrappers.",
      "Pan-fry or deep-fry until crisp and golden."
    ],
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.3
  },
  {
    "id": "r22",
    "title": "Arroz Caldo",
    "description": "Ginger chicken rice porridge topped with scallions.",
    "category": "Filipino",
    "prep": 10,
    "cook": 40,
    "servings": 4,
    "cost": 70,
    "ingredients": [
      "rice",
      "chicken",
      "ginger",
      "garlic",
      "onion",
      "spring onions"
    ],
    "instructions": [
      "Sauté garlic, onion, and ginger.",
      "Add chicken and cook until lightly browned.",
      "Add rice and water or broth.",
      "Simmer, stirring often, until rice breaks down; garnish with scallions."
    ],
    "image": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.4
  },
  {
    "id": "r23",
    "title": "Creamy Tuna Pasta",
    "description": "A budget-friendly pasta with tuna, garlic, and a creamy sauce.",
    "category": "Quick & easy",
    "prep": 8,
    "cook": 15,
    "servings": 2,
    "cost": 68,
    "ingredients": [
      "pasta",
      "canned tuna",
      "milk",
      "garlic",
      "cheese",
      "onion"
    ],
    "instructions": [
      "Boil pasta until al dente.",
      "Sauté onion and garlic, then add drained tuna.",
      "Pour in milk and stir in cheese until creamy.",
      "Toss with pasta and serve."
    ],
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.5
  },
  {
    "id": "r24",
    "title": "Lemon Garlic Chicken",
    "description": "Bright lemon and garlic make a fast, flavorful chicken dinner.",
    "category": "Quick & easy",
    "prep": 8,
    "cook": 18,
    "servings": 2,
    "cost": 88,
    "ingredients": [
      "chicken",
      "lemon",
      "garlic",
      "butter",
      "black pepper",
      "rice"
    ],
    "instructions": [
      "Season chicken with pepper and lemon.",
      "Sear in a pan until browned and cooked through.",
      "Add butter and garlic; spoon the sauce over chicken.",
      "Serve with rice or vegetables."
    ],
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.6
  },
  {
    "id": "r25",
    "title": "Peanut Butter Banana Toast",
    "description": "A quick breakfast with creamy peanut butter and sliced banana.",
    "category": "Breakfast",
    "prep": 3,
    "cook": 3,
    "servings": 1,
    "cost": 28,
    "ingredients": [
      "bread",
      "peanut butter",
      "banana",
      "cinnamon"
    ],
    "instructions": [
      "Toast the bread until crisp.",
      "Spread peanut butter over the toast.",
      "Top with banana slices and a pinch of cinnamon.",
      "Serve immediately."
    ],
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.7
  },
  {
    "id": "r26",
    "title": "Cheese & Tomato Quesadilla",
    "description": "Crisp tortillas filled with melted cheese and fresh tomato.",
    "category": "Quick & easy",
    "prep": 5,
    "cook": 8,
    "servings": 2,
    "cost": 48,
    "ingredients": [
      "tortillas",
      "cheese",
      "tomatoes",
      "onion",
      "oil"
    ],
    "instructions": [
      "Chop tomatoes and onion and pat dry.",
      "Layer cheese and vegetables over half a tortilla.",
      "Fold and toast in a lightly oiled pan.",
      "Flip and cook until crisp and cheese melts."
    ],
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.8
  },
  {
    "id": "r27",
    "title": "Roasted Vegetable Couscous",
    "description": "Fluffy couscous with caramelized seasonal vegetables.",
    "category": "Vegetarian",
    "prep": 10,
    "cook": 20,
    "servings": 3,
    "cost": 72,
    "ingredients": [
      "couscous",
      "zucchini",
      "bell pepper",
      "onion",
      "olive oil",
      "lemon"
    ],
    "instructions": [
      "Chop vegetables and toss with oil.",
      "Roast until tender and browned.",
      "Prepare couscous with hot water or broth.",
      "Fold vegetables through couscous and finish with lemon."
    ],
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.9
  },
  {
    "id": "r28",
    "title": "Chickpea Curry",
    "description": "Chickpeas simmered in a fragrant tomato and coconut sauce.",
    "category": "Vegetarian",
    "prep": 8,
    "cook": 20,
    "servings": 3,
    "cost": 65,
    "ingredients": [
      "chickpeas",
      "tomatoes",
      "coconut milk",
      "onion",
      "garlic",
      "curry powder"
    ],
    "instructions": [
      "Sauté onion and garlic until soft.",
      "Stir in curry powder and tomatoes.",
      "Add chickpeas and coconut milk.",
      "Simmer for 15 minutes and serve with rice."
    ],
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.3
  },
  {
    "id": "r29",
    "title": "Spinach Cheese Omelet",
    "description": "A soft omelet packed with spinach and melted cheese.",
    "category": "Breakfast",
    "prep": 4,
    "cook": 7,
    "servings": 1,
    "cost": 45,
    "ingredients": [
      "eggs",
      "spinach",
      "cheese",
      "milk",
      "butter"
    ],
    "instructions": [
      "Whisk eggs with a splash of milk.",
      "Wilt spinach in butter.",
      "Pour eggs into the pan and cook gently.",
      "Add cheese, fold, and cook until set."
    ],
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.4
  },
  {
    "id": "r30",
    "title": "Overnight Mango Oats",
    "description": "Creamy make-ahead oats with mango and yogurt.",
    "category": "Breakfast",
    "prep": 5,
    "cook": 0,
    "servings": 1,
    "cost": 48,
    "ingredients": [
      "oats",
      "milk",
      "mango",
      "yogurt",
      "honey"
    ],
    "instructions": [
      "Mix oats, milk, yogurt, and honey in a jar.",
      "Cover and refrigerate overnight.",
      "Top with diced mango before eating.",
      "Add a splash of milk if you prefer a looser texture."
    ],
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.5
  },
  {
    "id": "r31",
    "title": "French Toast with Cinnamon",
    "description": "Golden egg-soaked bread with a little cinnamon.",
    "category": "Breakfast",
    "prep": 5,
    "cook": 8,
    "servings": 2,
    "cost": 40,
    "ingredients": [
      "bread",
      "eggs",
      "milk",
      "cinnamon",
      "butter"
    ],
    "instructions": [
      "Whisk eggs, milk, and cinnamon.",
      "Dip bread slices into the mixture.",
      "Cook in butter until golden on both sides.",
      "Serve warm."
    ],
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.6
  },
  {
    "id": "r32",
    "title": "Garlic Butter Shrimp",
    "description": "Juicy shrimp tossed in garlic butter and a squeeze of lemon.",
    "category": "Quick & easy",
    "prep": 7,
    "cook": 8,
    "servings": 2,
    "cost": 120,
    "ingredients": [
      "shrimp",
      "garlic",
      "butter",
      "lemon",
      "black pepper",
      "rice"
    ],
    "instructions": [
      "Pat shrimp dry and season with pepper.",
      "Melt butter and sauté garlic briefly.",
      "Add shrimp and cook until pink and opaque.",
      "Finish with lemon and serve with rice."
    ],
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.7
  },
  {
    "id": "r33",
    "title": "Sweet Corn Fritters",
    "description": "Crispy golden fritters made with sweet corn and pantry staples.",
    "category": "Budget meals",
    "prep": 8,
    "cook": 12,
    "servings": 3,
    "cost": 38,
    "ingredients": [
      "corn",
      "flour",
      "eggs",
      "milk",
      "spring onions",
      "oil"
    ],
    "instructions": [
      "Mix corn, flour, eggs, milk, and sliced spring onions.",
      "Heat a thin layer of oil in a pan.",
      "Spoon in batter and flatten gently.",
      "Cook until golden on both sides."
    ],
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.8
  },
  {
    "id": "r34",
    "title": "Potato Egg Salad",
    "description": "Tender potatoes and eggs in a light creamy dressing.",
    "category": "Budget meals",
    "prep": 10,
    "cook": 18,
    "servings": 3,
    "cost": 50,
    "ingredients": [
      "potatoes",
      "eggs",
      "mayonnaise",
      "mustard",
      "onion",
      "pepper"
    ],
    "instructions": [
      "Boil potatoes until tender and eggs until hard-boiled.",
      "Cool, peel, and chop both.",
      "Mix mayonnaise, mustard, and finely chopped onion.",
      "Fold together and season with pepper."
    ],
    "image": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.9
  },
  {
    "id": "r35",
    "title": "Miso Tofu Soup",
    "description": "A warming soup with tofu, greens, and savory miso.",
    "category": "Vegetarian",
    "prep": 5,
    "cook": 10,
    "servings": 2,
    "cost": 58,
    "ingredients": [
      "tofu",
      "miso paste",
      "spring onions",
      "spinach",
      "water"
    ],
    "instructions": [
      "Heat water gently without boiling hard.",
      "Whisk miso paste with a little warm broth.",
      "Add tofu cubes and spinach.",
      "Stir in miso and garnish with spring onions."
    ],
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.3
  },
  {
    "id": "r36",
    "title": "Roasted Tomato Soup",
    "description": "Sweet roasted tomatoes blended into a comforting soup.",
    "category": "Vegetarian",
    "prep": 10,
    "cook": 25,
    "servings": 3,
    "cost": 50,
    "ingredients": [
      "tomatoes",
      "garlic",
      "onion",
      "broth",
      "milk",
      "olive oil"
    ],
    "instructions": [
      "Roast tomatoes, onion, and garlic with olive oil until soft.",
      "Transfer to a pot with broth.",
      "Blend until smooth.",
      "Stir in milk and warm gently before serving."
    ],
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.4
  },
  {
    "id": "r37",
    "title": "Crispy Baked Potato Wedges",
    "description": "Seasoned potato wedges with crisp edges and fluffy centers.",
    "category": "Vegetarian",
    "prep": 10,
    "cook": 30,
    "servings": 3,
    "cost": 35,
    "ingredients": [
      "potatoes",
      "olive oil",
      "paprika",
      "garlic powder",
      "salt"
    ],
    "instructions": [
      "Cut potatoes into wedges and pat dry.",
      "Toss with oil and seasonings.",
      "Bake at 220°C until browned, turning halfway.",
      "Serve with your favorite dip."
    ],
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.5
  },
  {
    "id": "r38",
    "title": "Sesame Cucumber Noodles",
    "description": "Cool cucumber ribbons with sesame-soy dressing.",
    "category": "Vegetarian",
    "prep": 12,
    "cook": 8,
    "servings": 2,
    "cost": 58,
    "ingredients": [
      "cucumber",
      "noodles",
      "soy sauce",
      "sesame oil",
      "garlic",
      "sesame seeds"
    ],
    "instructions": [
      "Cook noodles and rinse under cool water.",
      "Slice cucumber into thin ribbons.",
      "Whisk soy sauce, sesame oil, and garlic.",
      "Toss noodles and cucumber with dressing and sesame seeds."
    ],
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.6
  },
  {
    "id": "r39",
    "title": "Apple Cinnamon Porridge",
    "description": "Warm oats with apple, cinnamon, and a touch of honey.",
    "category": "Breakfast",
    "prep": 5,
    "cook": 8,
    "servings": 1,
    "cost": 35,
    "ingredients": [
      "oats",
      "milk",
      "apple",
      "cinnamon",
      "honey"
    ],
    "instructions": [
      "Dice the apple.",
      "Simmer oats and milk until creamy.",
      "Stir in apple and cinnamon.",
      "Finish with honey and serve warm."
    ],
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.7
  },
  {
    "id": "r40",
    "title": "Chocolate Banana Smoothie",
    "description": "A quick smoothie with banana, cocoa, and milk.",
    "category": "Breakfast",
    "prep": 5,
    "cook": 0,
    "servings": 1,
    "cost": 40,
    "ingredients": [
      "banana",
      "milk",
      "cocoa powder",
      "yogurt",
      "honey"
    ],
    "instructions": [
      "Add all ingredients to a blender.",
      "Blend until smooth and creamy.",
      "Taste and add honey if needed.",
      "Serve chilled."
    ],
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.8
  },
  {
    "id": "r41",
    "title": "Baked Garlic Salmon",
    "description": "Salmon baked with garlic, lemon, and herbs.",
    "category": "Quick & easy",
    "prep": 8,
    "cook": 15,
    "servings": 2,
    "cost": 180,
    "ingredients": [
      "salmon",
      "garlic",
      "lemon",
      "olive oil",
      "black pepper",
      "broccoli"
    ],
    "instructions": [
      "Heat oven to 200°C.",
      "Place salmon on a lined tray and season with garlic, lemon, oil, and pepper.",
      "Bake until opaque and flaky.",
      "Serve with steamed broccoli."
    ],
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.9
  },
  {
    "id": "r42",
    "title": "Black Bean Rice Bowl",
    "description": "A filling bowl with black beans, rice, tomato, and avocado.",
    "category": "Vegetarian",
    "prep": 10,
    "cook": 10,
    "servings": 2,
    "cost": 65,
    "ingredients": [
      "black beans",
      "rice",
      "tomatoes",
      "avocado",
      "lime",
      "onion"
    ],
    "instructions": [
      "Warm black beans with onion and seasoning.",
      "Prepare rice and dice tomatoes and avocado.",
      "Build a bowl with rice and beans.",
      "Top with vegetables and a squeeze of lime."
    ],
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.3
  },
  {
    "id": "r43",
    "title": "Simple Beef Burger",
    "description": "A juicy homemade burger with lettuce and tomato.",
    "category": "Quick & easy",
    "prep": 10,
    "cook": 12,
    "servings": 2,
    "cost": 110,
    "ingredients": [
      "ground beef",
      "burger buns",
      "lettuce",
      "tomatoes",
      "onion",
      "cheese"
    ],
    "instructions": [
      "Shape ground beef into patties and season.",
      "Cook in a hot pan until done to your preference.",
      "Toast buns and prepare the vegetables.",
      "Assemble with cheese, lettuce, tomato, and onion."
    ],
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.4
  },
  {
    "id": "r44",
    "title": "Vegetable Fried Noodles",
    "description": "Fast noodles tossed with crunchy vegetables and soy sauce.",
    "category": "Quick & easy",
    "prep": 10,
    "cook": 10,
    "servings": 2,
    "cost": 55,
    "ingredients": [
      "noodles",
      "cabbage",
      "carrots",
      "bell pepper",
      "soy sauce",
      "garlic"
    ],
    "instructions": [
      "Cook noodles and drain.",
      "Stir-fry garlic and sliced vegetables over high heat.",
      "Add noodles and soy sauce.",
      "Toss until hot and evenly coated."
    ],
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.5
  },
  {
    "id": "r45",
    "title": "Creamy Pumpkin Soup",
    "description": "A smooth, gently spiced pumpkin soup.",
    "category": "Vegetarian",
    "prep": 10,
    "cook": 25,
    "servings": 3,
    "cost": 55,
    "ingredients": [
      "pumpkin",
      "onion",
      "garlic",
      "broth",
      "milk",
      "black pepper"
    ],
    "instructions": [
      "Sauté onion and garlic until soft.",
      "Add cubed pumpkin and broth.",
      "Simmer until pumpkin is tender, then blend.",
      "Stir in milk and season before serving."
    ],
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.6
  },
  {
    "id": "r46",
    "title": "Pesto Tomato Pasta",
    "description": "Pasta with basil pesto, juicy tomatoes, and cheese.",
    "category": "Quick & easy",
    "prep": 5,
    "cook": 15,
    "servings": 2,
    "cost": 78,
    "ingredients": [
      "pasta",
      "pesto",
      "tomatoes",
      "cheese",
      "garlic",
      "olive oil"
    ],
    "instructions": [
      "Cook pasta according to the package.",
      "Halve tomatoes and sauté briefly with garlic.",
      "Toss pasta with pesto and a splash of cooking water.",
      "Top with tomatoes and cheese."
    ],
    "image": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.7
  },
  {
    "id": "r47",
    "title": "Honey Soy Tofu",
    "description": "Crispy tofu cubes coated in a sweet-salty glaze.",
    "category": "Vegetarian",
    "prep": 10,
    "cook": 15,
    "servings": 2,
    "cost": 58,
    "ingredients": [
      "tofu",
      "soy sauce",
      "honey",
      "garlic",
      "cornstarch",
      "rice"
    ],
    "instructions": [
      "Press tofu dry and cut into cubes.",
      "Toss lightly with cornstarch and pan-fry until crisp.",
      "Simmer soy sauce, honey, and garlic briefly.",
      "Toss tofu in the glaze and serve over rice."
    ],
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.8
  },
  {
    "id": "r48",
    "title": "Mango Yogurt Parfait",
    "description": "Layers of mango, yogurt, and crunchy oats.",
    "category": "Breakfast",
    "prep": 5,
    "cook": 0,
    "servings": 1,
    "cost": 45,
    "ingredients": [
      "mango",
      "yogurt",
      "oats",
      "honey",
      "banana"
    ],
    "instructions": [
      "Dice mango and slice banana.",
      "Layer yogurt with fruit in a glass.",
      "Add oats for crunch.",
      "Drizzle with honey and serve."
    ],
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.9
  },
  {
    "id": "r49",
    "title": "Tomato Chickpea Salad",
    "description": "A fresh salad with chickpeas, tomato, cucumber, and lemon.",
    "category": "Vegetarian",
    "prep": 10,
    "cook": 0,
    "servings": 2,
    "cost": 52,
    "ingredients": [
      "chickpeas",
      "tomatoes",
      "cucumber",
      "onion",
      "lemon",
      "olive oil"
    ],
    "instructions": [
      "Rinse and drain chickpeas.",
      "Chop tomatoes, cucumber, and onion.",
      "Whisk lemon juice with olive oil and seasoning.",
      "Toss everything together and chill briefly."
    ],
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.3
  },
  {
    "id": "r50",
    "title": "Coconut Chicken Curry",
    "description": "Tender chicken simmered in coconut milk with warm spices.",
    "category": "Filipino",
    "prep": 12,
    "cook": 30,
    "servings": 4,
    "cost": 100,
    "ingredients": [
      "chicken",
      "coconut milk",
      "potatoes",
      "garlic",
      "onion",
      "curry powder"
    ],
    "instructions": [
      "Sauté garlic and onion until fragrant.",
      "Add chicken and brown lightly.",
      "Stir in curry powder, potatoes, and coconut milk.",
      "Cover and simmer until chicken and potatoes are tender."
    ],
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.4
  },
  {
    "id": "r51",
    "title": "Pork Giniling",
    "description": "Ground pork simmered with tomato, potatoes, and carrots.",
    "category": "Filipino",
    "prep": 10,
    "cook": 25,
    "servings": 4,
    "cost": 90,
    "ingredients": [
      "ground pork",
      "tomatoes",
      "potatoes",
      "carrots",
      "onion",
      "garlic"
    ],
    "instructions": [
      "Sauté garlic and onion.",
      "Add ground pork and cook until browned.",
      "Stir in tomatoes, potatoes, carrots, and a little water.",
      "Simmer until vegetables are tender and sauce thickens."
    ],
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.5
  },
  {
    "id": "r52",
    "title": "Tortilla Breakfast Wrap",
    "description": "Eggs, cheese, and vegetables wrapped for an easy breakfast.",
    "category": "Breakfast",
    "prep": 5,
    "cook": 8,
    "servings": 1,
    "cost": 50,
    "ingredients": [
      "tortillas",
      "eggs",
      "cheese",
      "spinach",
      "tomatoes"
    ],
    "instructions": [
      "Scramble eggs in a lightly oiled pan.",
      "Warm the tortilla.",
      "Add eggs, cheese, spinach, and chopped tomato.",
      "Fold into a wrap and toast seam-side down."
    ],
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85",
    "status": "Published",
    "rating": 4.6
  }
];
const seedIngredients=[['Eggs',12],['Rice',10],['Tomatoes',18],['Chicken',85],['Garlic',5],['Potatoes',15],['Tofu',25],['Cabbage',20],['Carrots',15],['Onion',8],['Soy sauce',4],['Pasta',20],['Mushrooms',35],['Milk',15],['Cheese',25],['Flour',8],['Sardines',25],['Banana',10],['Oats',18],['Cucumber',15],['Vinegar',3],['Butter',12],['Broth',10],['Chili',3],['Spring onions',8],['Bay leaves',2],['Black pepper',2],['Oil',5]].map((x,i)=>({id:'i'+i,name:x[0],price:x[1]}));
const defaultCategories=['Filipino','Quick & easy','Vegetarian','Budget meals','Breakfast','Seafood','Desserts'];
