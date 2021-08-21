var initalState = false;

var myReducer = (state = initalState, action) => {
  if (action.type === "TOGGLE_STATUS") {
    state = !state;
    return state;
  }
};
export default myReducer;
