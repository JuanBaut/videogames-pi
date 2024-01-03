import axios from "axios";

export const GET_GENRES = "GET_GENRES";

export function getGenres() {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/genres/database`);
      dispatch({
        type: "GET_GENRES",
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };
}
