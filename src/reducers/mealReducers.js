import {
    CAT_LIST_REQUEST,
    CAT_LIST_SUCCESS,
    CAT_LIST_FAIL,
    AREA_LIST_REQUEST,
    AREA_LIST_SUCCESS,
    AREA_LIST_FAIL,

    ING_LIST_REQUEST,
    ING_LIST_SUCCESS,
    ING_LIST_FAIL,

    SINGLE_CAT_FAIL,
    SINGLE_CAT_REQUEST,
    SINGLE_CAT_SUCCESS,

    MEAL_DETAILS_REQUEST,
    MEAL_DETAILS_SUCCESS,
    MEAL_DETAILS_FAIL,

    SINGLE_AREA_FAIL,
    SINGLE_AREA_REQUEST,
    SINGLE_AREA_SUCCESS,
} from '../constants/mealConstants';

export const categoryListReducer=(state={categories:[]}, action)=>{
    switch(action.type){
        case CAT_LIST_REQUEST:
            return {loading:true, categories:[]}
        case CAT_LIST_SUCCESS:
            return {
                loading:false, 
                categories:action.payload
            }
        case CAT_LIST_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }    
}

export const areaListReducer=(state={areas:[]}, action)=>{
    switch(action.type){
        case AREA_LIST_REQUEST:
            return {loading:true, areas:[]}
        case AREA_LIST_SUCCESS:
            return {loading:false, areas:action.payload}
        case AREA_LIST_FAIL:
            return {loading:false , error:action.payload}
        default :
            return state
    }
}

export const ingredientListReducer=(state={ingredients:[]}, action)=>{
    switch(action.type){
        case ING_LIST_REQUEST:
            return {loading : true, ingredients:[]}
        case ING_LIST_SUCCESS:
            return {loading:false, ingredients:action.payload}
        case ING_LIST_FAIL:
            return {loading:false, error:action.payload}
        default : 
            return state
    }
}

export const singleCategoryReducer=(state={categoryArr:[]}, action)=>{
    switch(action.type){
        case SINGLE_CAT_REQUEST:
            return {loading:true, categoryArr:[]}
        case SINGLE_CAT_SUCCESS:
            return {loading:false, categoryArr:action.payload}
        case SINGLE_CAT_FAIL:
            return {loading:false, error:action.payload}
        default :
            return state
    }
}

export const singleMealReducer=(state={mealsArr:[]}, action)=>{
    switch(action.type){
        case MEAL_DETAILS_REQUEST:
            return {loading:true, mealsArr:[]}
        case MEAL_DETAILS_SUCCESS:
            return {loading:false, mealsArr:action.payload}
        case MEAL_DETAILS_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state;
    }
}

export const singleAreaReducer=(state={meals:[]}, action)=>{
    switch(action.type){
        case SINGLE_AREA_REQUEST:
            return {loading:true, meals:[]}
        case SINGLE_AREA_SUCCESS:
            return {loading:false, meals:action.payload}
        case SINGLE_AREA_FAIL:
            return {loading:false, error:action.payload}
        default :
            return state
    }
}