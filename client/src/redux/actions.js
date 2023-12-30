import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMES_ID = "GET_VIDEOGAMES_ID";
export const GET_GENRES = "GET_GENRES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export function getVideogames() {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/videogames/`);
    return dispatch({
      type: "GET_VIDEOGAMES",
      payload: response.data,
    });
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
