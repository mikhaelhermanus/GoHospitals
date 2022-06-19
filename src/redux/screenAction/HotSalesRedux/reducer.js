import { NEW_FASHION_REQUEST, NEW_FASHION_FAILED, NEW_FASHION_SUCCESS } from './actionType'

const INITIAL_STATE = {
    listFashion: [],
    loadingFash: false,
    errFash: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEW_FASHION_REQUEST:
            return { ...state, loadingFash: true }
        case NEW_FASHION_SUCCESS:
            return { ...state, listFashion: action.payload, loadingFash: false, errFash: null }
        case NEW_FASHION_FAILED:
            return { ...state, listFashion: null, errFash: action.payload, loadingFash: false }
        default:
            return state
    }
}