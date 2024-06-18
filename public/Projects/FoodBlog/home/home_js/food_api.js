// fetch("https://api.spoonacular.com/recipes/random?apiKey=9654613890584fc499cb6c499651a004")
//     .then(response => response.json())
//     .then(data => {
//         loadRandomRecipe(data)
//     })
//     .catch(error => console.error("There was an error.",error));

function loadRandomRecipe(data) {
    const randomRecipe = data.recipes[0];

    const recipeAsideEl = document.getElementById("recipe-aside");
    recipeAsideEl.classList.add("aside","column-format");

    const recipeTitle = randomRecipe.title;
    const recipePicture = randomRecipe.image;
    const recipeSourceUrl = randomRecipe.sourceUrl;

    // getting the container for the recipe
    const recipeContainerEl = document.getElementById("recipe-container");
    recipeContainerEl.classList.add("column-format");

    // creating elements for the recipe info
    const recipeTitleEl = document.createElement("h4");
    recipeTitleEl.textContent = recipeTitle;

    const recipeImgEl = document.createElement("img");
    recipeImgEl.setAttribute("src",recipePicture);
    recipeImgEl.classList.add("recipe-picture");
    recipeImgEl.setAttribute("alt","recipe picture");

    const recipeButtonEl = document.createElement("button");
    recipeButtonEl.setAttribute("id","get-recipe-button");
    recipeButtonEl.classList.add("get-recipe-button");
    recipeButtonEl.textContent = "Click here for the recipe!";

    // adding event listener to button to link to the recipe website
    recipeButtonEl.addEventListener("click",function() {
        window.open(recipeSourceUrl,"_blank");
    })

    //appending elements to the container
    recipeContainerEl.appendChild(recipeTitleEl);
    recipeContainerEl.appendChild(recipeImgEl);
    recipeContainerEl.appendChild(recipeButtonEl);

}


loadRandomRecipe(mockData);