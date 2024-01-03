import { FILTER } from "./actions/filterVideogames";
import { ORDER } from "./actions/orderVideogames";
import { GET_DETAIL } from "./actions/getDetail";
import { GET_GENRES } from "./actions/getGenres";
import { GET_VIDEOGAMES } from "./actions/getVideogames";
import { SEARCH } from "./actions/onSearch";
import { SET_CURRENT_PAGE } from "./actions/setCurrentPage";
import { CLEAR_DETAIL } from "./actions/clearDetail";
import { CLEAR_FILTER } from "./actions/clearFilter";

let initialState = {
  videogames: [],
  videogamesCopy: [],
  detail: [],
  genres: [],
  filter: [],
  currentPage: 1,
  itemsPerPage: 12,
  totalVideogames: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTER: {
      let filteredVideogames = [...state.videogames];
      filteredVideogames = filteredVideogames.filter((videogame) =>
        videogame.genres.some((genre) => genre.id === action.payload),
      );
      return {
        ...state,
        filter: action.payload,
        videogames: filteredVideogames,
      };
    }
    case CLEAR_FILTER: {
      return {
        ...state,
        videogames: state.videogamesCopy,
      };
    }

    case ORDER: {
      const sortedVideogames = [...state.videogames];
      return {
        ...state,
        videogames:
          action.payload === "A"
            ? sortedVideogames.sort((a, b) => a.rating - b.rating)
            : sortedVideogames.sort((a, b) => b.rating - a.rating),
      };
    }

    case SEARCH: {
      return {
        ...state,
        videogames: action.payload.mergedGames,
        videogamesCopy: action.payload.mergedGames,
        totalVideogames: action.payload.count.total,
      };
    }

    case GET_VIDEOGAMES: {
      return {
        ...state,
        videogames: action.payload.mergedGames,
        videogamesCopy: action.payload.mergedGames,
        totalVideogames: action.payload.count.total,
      };
    }

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        detail: action.payload,
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
