import { HOT_SALES_REQUEST, HOT_SALES_SUCCESS, HOT_SALES_FAILED } from './actionType'

const INITIAL_STATE = {
    listHotSales: [],
    loadingHotSales: false,
    errHotSales: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HOT_SALES_REQUEST:
            return { ...state, loadingHotSales: true }
        case HOT_SALES_SUCCESS:
            return { ...state, listHotSales: action.payload, loadingHotSales: false, errHotSales: null }
        case HOT_SALES_FAILED:
            return { ...state, listHotSales: null, errHotSales: action.payload, loadingHotSales: false }
        default:
            return state
    }
}