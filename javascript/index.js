// LOAD JSON 
// const recipes = load recipes.json

//fetch("/JSON_files/recipes.json")
//  .then(function(resp) {
//    return resp.json();
//  })
//  .then(function(data){
//    console.log(length(data))
//    console.log(data[0])
//    return data
//  })

//const first_food = data[0]

const requestURL = "/JSON_files/recipes.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
  const recipes = request.response; 
  console.log(recipes)
}




  
const output_Hauptspeise_otd = document.getElementById("output_Hauptspeise_otd")
const output_Vorspeise_otd = document.getElementById("output_Vorspeise_otd")
const output_Dessert_otd = document.getElementById("output_Dessert_otd")
const output_Drink_otd = document.getElementById("output_Drink_otd")


output_Hauptspeise_otd.innerHTML = recipes.name
output_Vorspeise_otd.innerHTML = recipes.name
output_Dessert_otd.innerHTML = recipes.name
output_Drink_otd.innerHTML = recipes.name




