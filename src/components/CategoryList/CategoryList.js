import './CategoryList.css';
//import axios from 'axios';
import React, {useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import { listCategories } from '../../actions/mealActions';
import {useDispatch, useSelector} from 'react-redux';



const CategoryList=()=>{
    const categoryList = useSelector((state) => state.categoryList);
    const {categories}=categoryList;
    console.log(categories);
    const dispatch=useDispatch();
   
    const navigate=useNavigate();

    useEffect(()=>{
        dispatch(listCategories());
    }, [dispatch]);

    const sendToCategoryPage=(e, category)=>{
        e.preventDefault();
        //navigate(`/product/${id}`);
        navigate(`/category/${category}`)
    }

    const retrievedCategories=categories.map(category=>{
        return(
            <div className="box" key={category.idCategory} onClick={(e)=>sendToCategoryPage(e, category.strCategory)}>
                <h2>{category.strCategory}</h2>
                <img src={category.strCategoryThumb} className="category-image" alt="category-pic" />                
            </div>
        )
    })
    return(
        
            <div className="category-container">
                {retrievedCategories}
            </div>
        
    )
}

export default CategoryList;