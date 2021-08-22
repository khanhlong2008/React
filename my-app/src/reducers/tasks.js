import * as types from "./../constants/ActionTypes";

var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
var randomId = () => {
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

var data = JSON.parse(localStorage.getItem("tasks"));
var initalState = data ? data : [];

var myReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      var newtask = {
        id: randomId(),
        name: action.task.name,
        status: action.task.status === "true" ? true : false,
      };
      state.push(newtask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS_TASK:
      var id = action.id;
      var index = state.findIndex(state => state.id === id);
      state[index] =  {
        ...state[index],status : !state[index].status 
      };
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};
export default myReducer;
