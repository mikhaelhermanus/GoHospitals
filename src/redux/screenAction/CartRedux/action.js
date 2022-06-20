import { UPDATE_CART_SUCCESS, RESET_CART } from './actionType'


export const updateCart = (item) => (dispatch) => {
    dispatch({ type: UPDATE_CART_SUCCESS, payload: item })
}

export const resetCart = () => (dispatch) => {
    dispatch({ type: RESET_CART })
}