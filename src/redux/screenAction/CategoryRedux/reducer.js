import { CATEGORY_REQUEST, CATEGORY_FAILED, CATEGORY_SUCCESS } from './actionType'

const INITIAL_STATE = {
    listCategory: [],
    loading: false,
    err: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CATEGORY_REQUEST:
            return { ...state, loading: true }
        case CATEGORY_SUCCESS:
            return { ...state, listCategory: action.payload, loading: false, err: null }
        case CATEGORY_FAILED:
            return { ...state, listCategory: null, err: action.payload, loading: false }
        default:
            return state
    }
}