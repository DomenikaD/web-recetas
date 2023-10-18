document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById("open-modal");
    const loginModal = document.getElementById("login-modal");
    const closeButton = document.getElementById("close-button");
    const addButton = document.getElementById("add-button");
    const recipeForm = document.getElementById("recipe-form");
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");

    openModalButton.addEventListener("click", function () {
        loginModal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        loginModal.style.display = "none";
    });

    addButton.addEventListener("click", function () {
        const recipeName = document.getElementById("recipe-name").value;
        const ingredients = document.getElementById("ingredients").value;
        const instructions = document.getElementById("instructions").value;
        const author = document.getElementById("author").value;


        if (recipeName === '' || ingredients === '' || instructions === '' || author === '') {
            // Muestra un mensaje de error
            alert('Por favor, complete todos los campos.');
    
            // Detén el envío del formulario
        }else{
            // Guarda los datos en el localStorage con una clave única
            const recipeKey = `recipe_${Date.now()}`;
            const recipeData = {
                name: recipeName,
                ingredients: ingredients,
                instructions: instructions,
                author: author,
            };

            localStorage.setItem(recipeKey, JSON.stringify(recipeData));

            // Limpia los campos después de guardar
            //recipeForm.reset();

            // Puedes realizar alguna acción adicional aquí, como mostrar un mensaje de éxito.
            // También puedes actualizar una lista de recetas guardadas en la página.
            displayRecipes();
            alert("Receta guardada exitosamente.");

            loginModal.style.display = "none";
        }

        
    });

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.toLowerCase(); // Convertir el término de búsqueda a minúsculas

        // Obtener las recetas del Local Storage
        const recipes = getRecipesFromLocalStorage();

        // Filtrar las recetas que coinciden con el término de búsqueda
        const matchingRecipes = recipes.filter((recipe) => {
            return recipe.name.toLowerCase().includes(searchTerm);
        });

        // Mostrar las recetas encontradas en pantalla
        displayRecipesSearch(matchingRecipes);
    });
});
