import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

function useGenerateRecipeObject(recipeId, type) {
  const { pathname } = useLocation();
  const foodsOrDrinks = pathname.includes('foods') || pathname.includes('drinks')
    ? pathname
    : type;
  const { id } = useParams();
  const isMeal = foodsOrDrinks.includes('food');
  const date = new Date();

  if (!id) {
    const token = isMeal ? mealsToken : cocktailsToken;
    dispatch(actionGetRecipeById(id, foodsOrDrinks, token));
  }

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strArea,
    strTags,
  } = useSelector((state) => state.selectedRecipe);

  const recipeBasicInfo = {
    thumbnail: isMeal ? strMealThumb : strDrinkThumb,
    title: isMeal ? strMeal : strDrink,
    category: isMeal ? strCategory : strAlcoholic,
  };

  const recipeDoneObject = {
    id: recipeId || id,
    type: isMeal ? 'food' : 'drink',
    nationality: isMeal ? strArea : '',
    category: strCategory,
    alcoholicOrNot: isMeal ? '' : strAlcoholic,
    name: recipeBasicInfo.title,
    image: recipeBasicInfo.thumbnail,
    done: `${date.getMonth()}/${date.getDay()}${date.getFullYear()}`,
    tags: strTags ? strTags.split(',') : [],
  };

  const recipeFavoriteObject = { ...recipeDoneObject };
  delete recipeFavoriteObject.done;
  delete recipeFavoriteObject.tags;

  return { recipeBasicInfo, recipeDoneObject, recipeFavoriteObject };
}

export default useGenerateRecipeObject;
