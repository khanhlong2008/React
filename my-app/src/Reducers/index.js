import { combineReducers } from "redux";
import message from './Message'
import custom from "./Custom";
import burger from "./Burger";
const MyReducers = combineReducers ({
    message,
    custom,
    burger,
});
 export default MyReducers