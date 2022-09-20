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


