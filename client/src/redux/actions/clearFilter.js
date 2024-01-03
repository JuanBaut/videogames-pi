export const CLEAR_FILTER = "CLEAR_FILTER";

export function clearFilter() {
  return async function (dispatch) {
    dispatch({
      type: "CLEAR_FILTER",
    });
  };
}
