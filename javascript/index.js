// LOAD JSON 
// const recipes = load recipes.json

//fetch("/JSON_files/recipes.json")
//  .then(function(resp) {
//    console.log(resp);
//    return resp.body;
//      })
//  .then(function(body){
    //console.log(length(body))
    //console.log(data[0])
////    console.log(body.getReader());
//  })


  async function loadRecipe () {
    // http://localhost:8080
    const recipes = await fetch("/JSON_files/recipes.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        //console.log(response)
        return response.json();
    })
    .catch(function () {
        this.dataError = true;
    });

    return recipes;
}

const recipes = loadRecipe();

console.log(recipes.then(recipeData => recipeData));

////console.log(data);

//const first_food = data[0]

//async function loadRecipe (){
//  const requestURL = "/JSON_files/recipes.json";
//  const request = new XMLHttpRequest();
//  request.open("GET", requestURL);
//  request.responseType = "json";
//  request.send();

//  request.onload = async function() {
//    return await request.response; 
    //console.log(recipes)
//  }

  //const recipes = await loadRecipe();
//}
//recipes.then(function(data){
//  console.log(data);
//})



  
const output_Hauptspeise_otd = document.getElementById("output_Hauptspeise_otd")
const output_Vorspeise_otd = document.getElementById("output_Vorspeise_otd")
const output_Dessert_otd = document.getElementById("output_Dessert_otd")
const output_Drink_otd = document.getElementById("output_Drink_otd")


//output_Hauptspeise_otd.innerHTML = recipes.name
//output_Vorspeise_otd.innerHTML = recipes.name
//output_Dessert_otd.innerHTML = recipes.name
//output_Drink_otd.innerHTML = recipes.name


window.onload

