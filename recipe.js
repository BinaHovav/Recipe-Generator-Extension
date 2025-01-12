async function fetchData() {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '[insert API key]',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); 
        const recipe = result.recipes[0]; 

        const container = document.getElementById('recipe-container');

        const title = document.createElement('h2');
        title.textContent = recipe.title;
        container.appendChild(title);

        const image = document.createElement('img');
        image.src = recipe.image;
        image.alt = recipe.title;
        container.appendChild(image);

        const summary = document.createElement('p');
        summary.innerHTML = `<strong>Summary:</strong> ${recipe.summary}`;
        container.appendChild(summary);
    } catch (error) {
        console.error(error);
        const container = document.getElementById('recipe-container');
        container.innerHTML = `<p class="error">Failed to load recipe. Please try again later.</p>`;
    }
}

fetchData();
