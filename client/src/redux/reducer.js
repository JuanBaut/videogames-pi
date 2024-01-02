import {
  SEARCH,
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_ID,
  GET_GENRES,
  SET_CURRENT_PAGE,
} from "./actions";

let initialState = {
  videogames: [],
  search: [],
  detail: [],
  genres: [],
  currentPage: 1,
  itemsPerPage: 12,
  totalVideogames: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        videogames: action.payload.mergedGames,
        totalVideogames: action.payload.count.total,
      };

    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload.mergedGames,
        totalVideogames: action.payload.count.total,
      };

    case GET_VIDEOGAMES_ID:
      return {
        ...state,
        videogame: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
