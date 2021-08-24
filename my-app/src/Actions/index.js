import * as Types from './../Constants/ActionTypes'

export const actAddToCart = (product,quantity)=>{
    return{
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}
// export action thay doi message 
export const actchangeMessage = (message)=>{
    return{
        type : Types.CHANGE_MESSAGE,
        message,
    }
}
export const actDeleteProductInCart= (product)=>{
    return{
        type : Types.DELETE_PRODUCT_IN_CART,
        product,
    }
}
export const actUpdateQuantityInCart= (product,quantity)=>{
    return{
        type : Types.UPADTE_QUANTITY_IN_CART,
        product,
        quantity,
    }
}