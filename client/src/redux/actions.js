import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_CODE = 'GET_COUNTRIES_CODE';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';

export function getCountries() {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/country/`);
    return dispatch({
      type: 'GET_COUNTRIES',
      payload: response.data,
    });
  };
}

export function getCountriesCode(code) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/country/code/${code}`);
    return dispatch({
      type: 'GET_COUNTRIES_CODE',
      payload: response.data,
    });
  };
}

export function getActivities() {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/activity`);
    return dispatch({
      type: 'GET_ACTIVITIES',
      payload: response.data,
    });
  };
}
