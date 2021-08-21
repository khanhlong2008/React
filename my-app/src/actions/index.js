import * as types from './../constants/ActionTypes'


export  const listAll = ()=>{
    return {
        type: types.LIST_ALL
    }
};
export const addTask = (task =>{
    return {
        type : types.ADD_TASK,
        task,// task:tsak
    } 
})
export const toggleForm = (task =>{
    return {
        type : types.TOGGLE_FROM,
    } 
})
export const closeForm = (task =>{
    return {
        type : types.CLOSE_FROM,
    } 
})
export const openForm = (task =>{
    return {
        type : types.OPEN_FROM,
    } 
})