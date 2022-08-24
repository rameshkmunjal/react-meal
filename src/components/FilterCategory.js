//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
import axios from 'axios';
import React , {useState, useEffect} from 'react';
import {Navigate, useNavigate, useParams} from 'react-router-dom';


const FilterCategory=()=>{
    const [meals , setMeals]=useState([]);
    const {cat_name}=useParams();
    console.log("category in filterCategory", cat_name);
    const navigate=useNavigate();

    const fetchMealsByCategory=async()=>{
        const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat_name}`);
        setMeals(data.meals);
    }
    
    useEffect(()=>{
        fetchMealsByCategory();
    })

    const onSelectCategory=(e, id)=>{
        e.preventDefault();
        navigate(`/category/${id}`);
    }

    const retrievedList=()=>{
        return meals.map(meal=>{
            return (
                <div className="box" onClick={(e)=>onSelectCategory(e, meal.idCategory)}>
                    <h3>{meal.strMeal}</h3>
                    <img src={meal.strMealThumb} className="category-image" alt="meal_image" />
                </div>            
            )
        })
      }
    
    
    return(
        <>
            <div className="meal-container">
                {retrievedList()}
            </div> 
        </> 
    )
}

export default FilterCategory;
