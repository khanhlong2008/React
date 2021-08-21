import { combineReducers } from "redux";
import tasks from './tasks'
import isDisplayForm from './tasks'

const  myReducer = combineReducers ({
    tasks, // task: tasks
    isDisplayForm,
})
export default myReducer