import *as Types from './../Contants/ActionTypes'
var initialState = 
  {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  }

const burger = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_QUANTITY:
      
    default:
      return state;
  }
};
export default burger;
