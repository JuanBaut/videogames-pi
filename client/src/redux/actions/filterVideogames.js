export const FILTER = "FILTER";

export const filterVideogames = (filter) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: FILTER,
        payload: filter,
      });
    } catch (error) {
      console.error("Error setting filter:", error);
    }
  };
};
