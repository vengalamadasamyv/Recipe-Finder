function searchRecipes() {
    const searchTerm = document.getElementById('searchInput').value;
    const edamamAppId = 'ef12b3d5';
    const edamamAppKey = '8a6fb0feb7e934c95dadcfa1e4bf64f3';
    const apiUrl = `https://api.edamam.com/search?q=${searchTerm}&app_id=${edamamAppId}&app_key=${edamamAppKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayRecipes(data.hits))
      .catch(error => console.log('Error fetching recipes:', error));
  }
  
  function displayRecipes(recipes) {
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = '';
  
    recipes.forEach(recipe => {
      const { label, image, url } = recipe.recipe;
      const recipeElement = `
        <div class="recipe">
          <h2>${label}</h2>
          <img src="${image}" alt="${label}"><br><br>
          <a href="${url}" target="_blank">More</a>
        </div>
      `;
      recipesDiv.innerHTML += recipeElement;
    });
  }
  