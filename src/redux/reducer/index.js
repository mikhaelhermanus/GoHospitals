import { combineReducers } from "redux";
import categoryReducer from '../screenAction/CategoryRedux/reducer'
import HotSalesReducer from '../screenAction/HotSalesRedux/reducer'
import NewFashionReducer from '../screenAction/NewFashionRedux/reducer' 
import CartReducer from '../screenAction/CartRedux/reducer'



const allReducers = combineReducers({
    categoryAuth: categoryReducer,
    HotSalesReducerAuth : HotSalesReducer,
    NewFashionReducerAuth : NewFashionReducer,
    CartReducerAuth : CartReducer
})

export default allReducers