import * as types from "./../constants/ActionTypes";

var initalState = false;

var myReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.TOGGLE_FROM:
      return !state
    case types.CLOSE_FROM:
      state = false
      return state
    case types.OPEN_FROM:
      state = true
      return state
    default:
      return state;
  }
};
export default myReducer;
