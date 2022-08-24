import './CategoryList/CategoryList.css';
import React , {useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {fetchSingleCategory} from '../actions/mealActions';


const SingleCategory=()=>{
    const {cat}=useParams();
    console.log(cat);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const category=useSelector((state)=>state.category);
    console.log(category);
    const {categoryArr}=category;
    console.log(categoryArr);
    


//www.themealdb.com/api/json/v1/1/lookup.php?i=52772
    useEffect(()=>{
        dispatch(fetchSingleCategory(cat));
    }, [dispatch]);

const sendToMealPage=(e, id)=>{
    e.preventDefault();
    navigate(`/meal/${id}`);
}

const retrievedArr=categoryArr.map(cat=>{
    return(
        <div className="box" key={cat.idMeal} onClick={(e)=>sendToMealPage(e, cat.idMeal)}>
            
            <img src={cat.strMealThumb} className="category-image" alt="category-pic" />
            <p>{cat.strMeal}</p>
        </div>
    )
})
    return (
        <div className="single-category-container">
            {retrievedArr}
        </div>
    )


}

export default SingleCategory;