import { GET_COUNTRIES, GET_COUNTRIES_CODE, GET_ACTIVITIES } from './actions';

let initialState = { countries: [], activities: [], country: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_COUNTRIES_CODE:
      return {
        ...state,
        country: action.payload,
      };

    case GET_ACTIVITIES:
      return {
        ...state.activities,
        activities: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
