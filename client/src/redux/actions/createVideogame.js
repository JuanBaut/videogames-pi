import axios from "axios";

export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";

export function createVideogame(videogame) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/videogames/create/`,
        videogame,
      );
      dispatch({
        type: "CREATE_VIDEOGAME",
        payload: response.data,
      });
    } catch (error) {
      console.error("Error creating videogame:", error);
    }
  };
}
