import React , {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchMealDetails} from '../actions/mealActions';

const MealDetails=()=>{
    const dispatch=useDispatch();
    const {id}=useParams();
    const meal=useSelector(state=>state.meal);
    const {mealsArr}=meal;

    useEffect(()=>{
        dispatch(fetchMealDetails(id));
    }, [dispatch, id]);

    const retrievedMeals=mealsArr.map(meal=>{
        return(
        <div className="meal-details-box">           
           <img src={meal.strMealThumb} alt="meal-image" />
           <div className="meal-details">
                <h2><span>{meal.strMeal}</span> : <span>{meal.strCategory}</span> : <span>{meal.strArea}</span> </h2>                
                <p>{meal.strInstructions}</p>
           </div>

           
        </div>)
    })

    return (
        <div className="meal-details-container">
            {retrievedMeals}
        </div>
    )
}

export default MealDetails ;