import * as Message from './../Contants/Message';
import * as Types from './../Contants/ActionTypes'
var initialState = Message.MSG_CUSTOM_BURGER

const message = (state = initialState,action)=>{
    switch(action.type){
        case Types.CHANGE_MSG:
            return action.message
        default: return state
    }
}
export default message