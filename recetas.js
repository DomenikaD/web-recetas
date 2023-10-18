function getRecipesFromLocalStorage() {
    const recipes = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("recipe_")) {
            const recipeData = JSON.parse(localStorage.getItem(key));
            recipes.push(recipeData);
        }
    }
    return recipes;
}

function displayRecipes() {
    const recipesContainer = document.getElementById("recipes-container");
    recipesContainer.innerHTML = ""; // Limpia el contenedor antes de agregar las recetas.

    const recipes = getRecipesFromLocalStorage();

    recipes.forEach((recipe, index) => {
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe-card");
        recipeElement.innerHTML = `
            <h2>${recipe.name}</h2>
            <p><strong>Ingredientes:</strong> ${recipe.ingredients}</p>
            <p><strong>Pasos:</strong> ${recipe.instructions}</p>
            <p><strong>Autor:</strong> ${recipe.author}</p>
            <img src="${recipe.image}" alt="${recipe.name}">
        `;

        recipesContainer.appendChild(recipeElement);
    });
    
}

// Función para mostrar recetas en pantalla
function displayRecipesSearch(recipes) {
    const recipesContainer = document.getElementById("recipes-container");
    recipesContainer.innerHTML = "";

    recipes.forEach((recipe, index) => {
        const recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe-card");
        recipeElement.innerHTML = `
            <h2>${recipe.name}</h2>
            <p><strong>Ingredientes:</strong> ${recipe.ingredients}</p>
            <p><strong>Pasos:</strong> ${recipe.instructions}</p>
            <p><strong>Autor:</strong> ${recipe.author}</p>
        `;

        recipesContainer.appendChild(recipeElement);
    });
}

// Llama a la función para mostrar las recetas al cargar la página.
displayRecipes();