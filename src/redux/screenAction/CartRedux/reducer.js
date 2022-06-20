import { UPDATE_CART_REQUEST, UPDATE_CART_FAILED, UPDATE_CART_SUCCESS } from './actionType'

const INITIAL_STATE = {
    cart: [],
    loadingCart: false,
    errCart: null
}

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload, 'line payload')
    switch (action.type) {
        case UPDATE_CART_REQUEST:
            return { ...state, loadingCart: true }
        case UPDATE_CART_SUCCESS:
            return { ...state, cart: [action.payload, ...state.cart], loadingCart: false, errCart: null }
        case UPDATE_CART_FAILED:
            return { ...state, cart: null, errCart: action.payload, loadingCart: false }
        default:
            return state
    }
}