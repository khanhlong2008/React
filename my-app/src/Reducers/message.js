import * as Types from "./../Constants/ActionTypes";
import * as Message from "./../Constants/Message";

var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
  switch (action.type) {
    case Types.CHANGE_MESSAGE:
      return action.message; // trong action se co message tra ve message khi co thay doi k co thay doi thi giu nguyen chuoi ban dau 
    default:
      return [...state];
  }
};

export default message;
