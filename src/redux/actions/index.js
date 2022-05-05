import {
  actionDefaultSearch,
  actionGetRecipeById,
  actionRequestCategories,
  actionSearchByCategory,
  actionSearchByFirstLetter,
  actionSearchByIngredients,
  actionSearchByName,
  actionStartLoading,
  RECEIVE_RECIPE_SUCCESS,
  RECIEVE_CATEGORIES,
  RECIEVE_RECIPES,
  START_LOADING,
} from './thunks';

/* Aqui criaremos as actions */
const GET_LOCAL_STORAGE = 'GET_LOCAL_STORAGE';
const SAVE_USER = 'SAVE_USER';
const UPDATE_USER = 'UPDATE_USER';
const TOGGLE_FILTER = 'TOGGLE_FILTER';
const FAVORITE_RECIPE = 'FAVORITE_RECIPE';
const UNFAVORITE_RECIPE = 'UNFAVORITE_RECIPE';
const TOGGLE_SEARCHBAR = 'TOGGLE_SEARCHBAR';
const UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS';

const actionGetLocalStorage = (state) => ({
  type: GET_LOCAL_STORAGE,
  ...state,
});

const actionSaveUser = (user) => ({
  type: SAVE_USER,
  user,
});

const actionUpdateUser = (name, value) => ({
  type: UPDATE_USER,
  name,
  value,
});

const actionToggleSearchBar = () => ({
  type: TOGGLE_SEARCHBAR,
});

const actionToggleFilter = (filter) => ({
  type: TOGGLE_FILTER,
  filter,
});

const actionFavoriteRecipe = (recipe) => ({
  type: FAVORITE_RECIPE,
  recipe,
});

const actionUnfavoriteRecipe = (recipeId) => ({
  type: UNFAVORITE_RECIPE,
  recipeId,
});

const actionUpdateInProgress = (recipeId, checkedIngredients) => ({
  type: UPDATE_IN_PROGRESS,
  inProgressRecipe: {
    [recipeId]: checkedIngredients,
  },
});

export {
  GET_LOCAL_STORAGE,
  actionGetLocalStorage,
  SAVE_USER,
  actionSaveUser,
  UPDATE_USER,
  actionUpdateUser,
  RECEIVE_RECIPE_SUCCESS,
  actionGetRecipeById,
  START_LOADING,
  actionStartLoading,
  RECIEVE_RECIPES,
  actionDefaultSearch,
  RECIEVE_CATEGORIES,
  actionRequestCategories,
  actionSearchByCategory,
  TOGGLE_FILTER,
  actionSearchByIngredients,
  actionSearchByFirstLetter,
  actionSearchByName,
  actionToggleFilter,
  FAVORITE_RECIPE,
  actionFavoriteRecipe,
  UNFAVORITE_RECIPE,
  actionUnfavoriteRecipe,
  actionToggleSearchBar,
  TOGGLE_SEARCHBAR,
  UPDATE_IN_PROGRESS,
  actionUpdateInProgress,
};
