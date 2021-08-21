import * as types from './../constants/ActionTypes'

var data = JSON.parse(localStorage.getItem('tasks'));
var initalState = data ? data : [
  
];

 var myReducer = ( state = initalState , action)=>{
     switch(action.type){
         case types.LIST_ALL: 
            return state
         default: return state
     }
  
 };
  export default myReducer