import axios from "axios";

export const GET_DETAIL = "GET_DETAIL";

export function getDetail(id) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/videogames/id/${id}`);
    return dispatch({
      type: "GET_VIDEOGAMES_ID",
      payload: response.data,
    });
  };
}
