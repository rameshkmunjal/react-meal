//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
import './AreaList/AreaList.css';
import React , {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMealsByArea} from '../actions/mealActions';


const SingleArea=()=>{
    const area=useSelector(state=>state.area);
    console.log(area);
    const {meals}=area;
    console.log(meals);
    const {areaName}=useParams();
    console.log(areaName);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    useEffect(()=>{
        dispatch(fetchMealsByArea(areaName));
    }, [dispatch, areaName])

    const sendToMealPage=(e, id)=>{
        e.preventDefault();
        navigate(`/meal/${id}`);
    }

    const retrievedList=()=>{
        return meals.map(meal=>{
            return (
                <div className="box" key={meal.idMeal} onClick={(e)=>sendToMealPage(e, meal.idMeal)}>                    
                    <img src={meal.strMealThumb} className="category-image" alt="meal_image" />
                    <p>{meal.strMeal}</p>
                </div>            
            )
        })
      }
    
    
    return(
        <>
            <div className="single-area-container">
                {retrievedList()}
            </div> 
        </> 
    )
}

export default SingleArea;
