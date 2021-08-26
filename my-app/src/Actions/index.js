import * as Types from './../Contants/ActionTypes'

export const actUpdateQuantity = burger =>{
    return{
        type:Types.UPDATE_QUANTITY,
        burger,
    }
}