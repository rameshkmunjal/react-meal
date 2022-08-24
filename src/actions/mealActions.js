import axios from 'axios';
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

    SINGLE_CAT_REQUEST,
    SINGLE_CAT_SUCCESS,
    SINGLE_CAT_FAIL,

    MEAL_DETAILS_REQUEST,
    MEAL_DETAILS_SUCCESS,
    MEAL_DETAILS_FAIL,

    SINGLE_AREA_REQUEST,
    SINGLE_AREA_SUCCESS,
    SINGLE_AREA_FAIL,

} from '../constants/mealConstants';

const url='https://www.themealdb.com/api/json/v1/1';


export const listCategories=()=>async(dispatch)=>{
    console.log("listCategories called in actions");
    try{
        dispatch({type:CAT_LIST_REQUEST});
        const {data}=await axios.get(`${url}/categories.php`);
        console.log(data.categories);
        dispatch({
            type:CAT_LIST_SUCCESS,
            payload:data.categories,
        })
    } catch(error){
        dispatch({
            type:CAT_LIST_FAIL,
            payload:error.message,
        })
    }
}
//'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
export const listAreas=()=>async(dispatch)=>{
    try{
        dispatch({type:AREA_LIST_REQUEST});
        const {data}=await axios.get(`${url}/list.php?a=list`);
        console.log(data);
        dispatch({
            type:AREA_LIST_SUCCESS,
            payload:data.meals
        })
    } catch(error){
        dispatch({
            type:AREA_LIST_FAIL,
            payload:error.message
        })
    }
}

export const listIngredients=()=>async(dispatch)=>{
    try{
        dispatch({type:ING_LIST_REQUEST});

        const {data}=await axios.get(`${url}/list.php?i=list`);
        dispatch({
            type:ING_LIST_SUCCESS,
            payload:data.meals
        })
    } catch(error){
        dispatch({
            type:ING_LIST_FAIL,
            payload:error.message
        })
    }
}
//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

export const fetchSingleCategory=(category)=>async(dispatch)=>{
    try{
        dispatch({type:SINGLE_CAT_REQUEST});
        const {data}=await axios.get(`${url}/filter.php?c=${category}`);
        console.log(data);
        dispatch({
            type:SINGLE_CAT_SUCCESS,
            payload:data.meals
        })
    } catch(error){
        dispatch({
            type:SINGLE_CAT_FAIL,
            payload:error.message
        })
    }
}
//https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
export const fetchMealDetails=(id)=>async(dispatch)=>{
    try{
        dispatch({type:MEAL_DETAILS_REQUEST});
        const {data}=await axios.get(`${url}/lookup.php?i=${id}`);
        console.log(data);
        dispatch({
            type:MEAL_DETAILS_SUCCESS,
            payload:data.meals
        })
    } catch(error){
        dispatch({
            type:MEAL_DETAILS_FAIL,
            payload:error.message
        })
    }
}
/*
const fetchMealsByArea=async()=>{
    const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    setMeals(data.meals);
}
*/
export const fetchMealsByArea=(areaName)=>async(dispatch)=>{
    console.log(areaName);
    try{
        dispatch({type:SINGLE_AREA_REQUEST});
        const {data}=await axios.get(`${url}/filter.php?a=${areaName}`);
        dispatch({
            type:SINGLE_AREA_SUCCESS,
            payload:data.meals
        })
    } catch(error){
        dispatch({
            type:SINGLE_AREA_FAIL,
            payload:error.message
        })
    }
}