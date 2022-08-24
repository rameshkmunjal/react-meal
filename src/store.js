import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    categoryListReducer,
    areaListReducer,
    ingredientListReducer,
    singleCategoryReducer,
    singleMealReducer, 
    singleAreaReducer
} from './reducers/mealReducers';
const reducer=combineReducers({
    categoryList:categoryListReducer,
    areaList:areaListReducer,
    ingredientList:ingredientListReducer,
    category:singleCategoryReducer,
    meal:singleMealReducer,
    area:singleAreaReducer
});

const store=createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;
