import axios from "axios";

export const SEARCH = "SEARCH";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMES_ID = "GET_VIDEOGAMES_ID";
export const GET_GENRES = "GET_GENRES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export function onSearch(query) {
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/videogames/search/${query}`,
      );
      dispatch({
        type: "SEARCH",
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching videogames:", error);
    }
  };
}

export function getVideogames() {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/videogames/`);
      dispatch({
        type: "GET_VIDEOGAMES",
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching videogames:", error);
    }
  };
}

export function getVideogamesId(id) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/videogames/id/${id}`);
    return dispatch({
      type: "GET_VIDEOGAMES_ID",
      payload: response.data,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/genres`);
    return dispatch({
      type: "GET_GENRES",
      payload: response.data,
    });
  };
}

export const setCurrentPage = (page) => ({
  type: "SET_CURRENT_PAGE",
  payload: page,
});
