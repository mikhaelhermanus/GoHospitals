import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_FAILED } from './actionType'
import { Api } from '../../../Api';

export const getCategory = () => (dispatch) => {
    dispatch({ type: CATEGORY_REQUEST });
    Api.getCategoryApi()
        .then((response) => {
            console.log(response.data.data)
            dispatch({ type: CATEGORY_SUCCESS, payload: response.data.data });
        }).catch((error) => {
            if (error.message === 'Network Error') {
                dispatch({ type: CATEGORY_FAILED, payload: error.message });
            } else {
                dispatch({ type: CATEGORY_FAILED, payload: error.response.status });
            }
        });
};