// referência: https://www.themealdb.com/api.php

async function getMealsDefault(token) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/${token}/search.php?s=`,
  );
  const meals = await response.json();
  return meals;
  // retorna 12 refeições padrão que devem aparecer ao usuário entrar na página de refeições
}

async function getMealsByName(token, name) {
  const response = await fetch(
    `www.themealdb.com/api/json/v1/${token}/search.php?s=${name}`,
  );
  const meals = await response.json();
  return meals;
  // retorna lista com refeições de acordo com o nome fornecido. Obs: retorna objetos detalhados
}

async function getMealsByFirstLetter(token, letter) {
  const response = await fetch(
    `www.thecocktaildb.com/api/json/v1/${token}/search.php?f=${letter}`,
  );
  const meals = await response.json();
  return meals;
  // retorna lista com refeições cujo nome começam com a letra fornecida. Obs: retorna objetos detalhados
}

async function getMealDetailsById(token, id) {
  const response = await fetch(
    `www.themealdb.com/api/json/v1/${token}/lookup.php?i=${id}`,
  );
  const meal = await response.json();
  return meal;
  // retorna objeto com todos os detalhes de uma única refeição correspondente ao id fornecido
}

async function getSingleRandomMealDetails(token) {
  const response = await fetch(
    `www.themealdb.com/api/json/v1/${token}/random.php`,
  );
  const meal = await response.json();
  return meal;
  // retorna objeto com todos os detalhes de uma única refeição aleatória
}

async function getMealsCategoriesList(token) {
  const response = await fetch(
    `www.themealdb.com/api/json/v1/${token}/categories.php`,
  );
  const categories = await response.json();
  return categories;
  // retorna lista de categorias disponíveis para refeições.
}

async function getMealsAreasList(token) {
  const response = await fetch(
    `www.themealdb.com/api/json/v1/${token}/list.php?a=list`,
  );
  const areas = await response.json();
  return areas;
  // retorna lista de areas (países) disponíveis para refeições
}

async function getMealsIngredientList(token) {
  const response = await fetch(
    `www.themealdb.com/api/json/v1/${token}/list.php?i=list`,
  );
  const ingredients = await response.json();
  return ingredients;
  // retorna lista de ingredientes disponíveis para refeições
}

async function getMealsByMainIngredient(token, ingredient) {
  const response = await fetch(
    `www.themealdb.com/api/json/v1/${token}/filter.php?i=${ingredient}`,
  );
  const meals = await response.json();
  return meals;
  // retorna lista de refeições de acordo com o ingrediente fornecido. Obs: não retorna o objeto detalhado
}

async function getMealsByCategory(token, category) {
  const response = await fetch(
    `www.themealdb.com/api/json/v1/${token}/filter.php?c=${category}`,
  );
  const meals = await response.json();
  return meals;
  // retorna lista de refeições de acordo com a categoria fornecida. Obs: não retorna o objeto detalhado
}

async function getMealsByArea(token, area) {
  const response = await fetch(
    `www.themealdb.com/api/json/v1/${token}/filter.php?a=${area}`,
  );
  const meals = await response.json();
  return meals;
  // retorna lista de refeições de acordo com o país fornecido. Obs: não retorna o objeto detalhado
}

function getMealsIngredientThumbnail(ingredient) {
  return `www.themealdb.com/images/ingredients/${ingredient}.png`;
  // retorna imagem de um ingrediente. Obs: não é uma função assíncrona
}

export {
  getMealsDefault,
  getMealsByName,
  getMealsByFirstLetter,
  getMealDetailsById,
  getSingleRandomMealDetails,
  getMealsCategoriesList,
  getMealsAreasList,
  getMealsIngredientList,
  getMealsByMainIngredient,
  getMealsByCategory,
  getMealsByArea,
  getMealsIngredientThumbnail,
};
