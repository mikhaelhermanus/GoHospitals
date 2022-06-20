import { UPDATE_CART_REQUEST, UPDATE_CART_FAILED, UPDATE_CART_SUCCESS, RESET_CART } from './actionType'

const INITIAL_STATE = {
    cart: [],
    loadingCart: false,
    errCart: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_CART_REQUEST:
            return { ...state, loadingCart: true }
        case UPDATE_CART_SUCCESS:
            return { ...state, cart: [action.payload, ...state.cart], loadingCart: false, errCart: null }
        case UPDATE_CART_FAILED:
            return { ...state, cart: [], errCart: action.payload, loadingCart: false }
        case RESET_CART:{
            return { ...state, cart: [], loadingCart: false, errCart: null }
        } 
        default:
            return state
    }
}