import { combineReducers } from "redux";
import categoryReducer from '../screenAction/CategoryRedux/reducer'
import HotSalesReducer from '../screenAction/HotSalesRedux/reducer'
import NewFashionReducer from '../screenAction/NewFashionRedux/reducer' 



const allReducers = combineReducers({
    categoryAuth: categoryReducer,
    HotSalesReducerAuth : HotSalesReducer,
    NewFashionReducerAuth : NewFashionReducer
})

export default allReducers