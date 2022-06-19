import { HOT_SALES_REQUEST, HOT_SALES_FAILED, HOT_SALES_SUCCESS } from './actionType'
import { Api } from '../../../Api';

export const getHotSales = () => (dispatch) => {
    dispatch({ type: HOT_SALES_REQUEST });
    Api.getHotSalesApi()
        .then((response) => {
            console.log(response.data.data)
            dispatch({ type: HOT_SALES_SUCCESS, payload: response.data.data });
        }).catch((error) => {
            if (error.message === 'Network Error') {
                dispatch({ type: HOT_SALES_FAILED, payload: error.message });
            } else {
                dispatch({ type: HOT_SALES_FAILED, payload: error.response.status });
            }
        });
};