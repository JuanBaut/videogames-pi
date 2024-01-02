import axios from "axios";

export const GET_GENRES = "GET_GENRES";

export function getGenres() {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/genres`);
    return dispatch({
      type: "GET_GENRES",
      payload: response.data,
    });
  };
}
