import { GET_LOCAL_STORAGE } from '../actions';

const INITIAL_STATE = [];

const favoriteRecipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOCAL_STORAGE:
    return action.favoriteRecipes;
  default:
    return state;
  }
};

export default favoriteRecipes;