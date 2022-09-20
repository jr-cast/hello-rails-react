import axios from 'axios';

// Defining actiontype
const FETCH_MSG = 'greetings/FETCH_MSG';

// Setting initial state of msg
const initialState = [];

// action creator
export function fetchMessageSuccess(data) {
  return {
    type: FETCH_MSG,
    payload: data,
  };
}

// reducer
export default function greetingReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MSG:
      return action.payload;
    default:
      return state;
  }
}
