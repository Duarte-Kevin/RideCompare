import axios from "axios";

/**
 * ACTION TYPES
 */
const GET_GEO = "GET_GEO";
const RESET = "RESET";

/**
 * INITIAL STATE
 */
const deafultstate = {};

/**
 * ACTION CREATORS
 */
const gotgeo = geo => ({ type: GET_GEO, geo });
const resetgeo = () => ({ type: RESET });
/**
 * THUNK CREATORS
 */
export const getgeo = address => async dispatch => {
  try {
    const { data } = await axios.post("/api/geolocation", address);
    dispatch(gotgeo(data));
  } catch (error) {
    console.error(error);
  }
};

export const reset = () => dispatch => {
  dispatch(resetgeo());
};

/**
 * REDUCER
 */
export default function(state = deafultstate, action) {
  switch (action.type) {
    case GET_GEO:
      return action.geo;
    case RESET:
      return state;
    default:
      return state;
  }
}
