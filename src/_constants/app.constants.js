/* eslint-disable prefer-destructuring */
const env = process.env;
/* eslint-enable prefer-destructuring */

export const SERVER_URL = env.REACT_APP_SERVER_URL || 'https://api.themoviedb.org/3';
export const PUBLIC_URL = env.PUBLIC_URL || '';
export const FETCH_TIMEOUT = env.REACT_APP_FETCH_TIMEOUT || 30000;

export const API_TOKEN = '677522a533aae20a5fa0d80d392c1496';
export const API_KEY = `api_key=${API_TOKEN}`;



export default {
  SERVER_URL,
  PUBLIC_URL,
  FETCH_TIMEOUT,
  API_KEY,
  API_TOKEN,
};
