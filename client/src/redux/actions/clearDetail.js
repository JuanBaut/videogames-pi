export const CLEAR_DETAIL = "CLEAR_DETAIL";

export function clearDetail() {
  return async function (dispatch) {
    dispatch({
      type: "CLEAR_DETAIL",
      payload: [],
    });
  };
}
