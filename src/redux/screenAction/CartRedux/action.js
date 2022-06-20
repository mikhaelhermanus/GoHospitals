import { UPDATE_CART_SUCCESS } from './actionType'


export const updateCart = (item) => (dispatch) =>{
    dispatch({type : UPDATE_CART_SUCCESS, payload : item})
}