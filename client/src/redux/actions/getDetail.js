import axios from "axios";

export const GET_DETAIL = "GET_DETAIL";

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/videogames/id/${id}`);
      dispatch({
        type: "GET_DETAIL",
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching videogames by id:", error);
    }
  };
}
