import axios from "axios";

export const SEARCH = "SEARCH";

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
