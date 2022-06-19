import { NEW_FASHION_REQUEST, NEW_FASHION_SUCCESS, NEW_FASHION_FAILED } from './actionType'
import { Api } from '../../../Api';

export const getNewFashion = () => (dispatch) => {
    dispatch({ type: NEW_FASHION_REQUEST });
    Api.getNewFashionApi()
        .then((response) => {
            console.log(response.data.data)
            dispatch({ type: NEW_FASHION_SUCCESS, payload: response.data.data });
        }).catch((error) => {
            if (error.message === 'Network Error') {
                dispatch({ type: NEW_FASHION_FAILED, payload: error.message });
            } else {
                dispatch({ type: NEW_FASHION_FAILED, payload: error.response.status });
            }
        });
};