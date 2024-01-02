import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

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
