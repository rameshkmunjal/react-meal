import './CategoryList/CategoryList.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useNavigate } from 'react-router-dom';


//'www.themealdb.com/api/json/v1/1'
//
const SelectedCategory=()=>{
    const [categories, setCategories]=useState([]);
    const url='https://www.themealdb.com/api/json/v1/1'
    const navigate=useNavigate();

    const fetchCategories=async()=>{
        const {data}=await axios.get(`${url}/categories.php`);
        console.log(data.categories);
        let selectedCategories=selectCategories(data.categories);
        console.log(selectCategories);
        setCategories(selectedCategories);
    }

    useEffect(()=>{
        fetchCategories();
    }, []);

    const selectCategories=(arr)=>{
        let newArr=get8RandomItems(arr);
        console.log(newArr);
        return newArr;
    }
    const get8RandomItems=(arr)=>{
        let newArr=[];
        let catArr=[];
        for(let i=0; i< 8; i++){
            let randomNumber=Math.floor(Math.random()*arr.length);
            if(newArr.indexOf(randomNumber) === -1){
                newArr.push(randomNumber);
            } else{
                i--;
            }
        }
console.log(newArr);
        for(let j=0; j<newArr.length; j++){
            catArr.push(arr[j]);
        }
        return catArr;
    }
    const sendToCategoryPage=(e, id)=>{
        e.preventDefault();
        //navigate(`/product/${id}`);
        navigate(`/category/${id}`)
    }
//<li><Link className="footer-link" to={`/product/category/${"men's clothing"}`}>Men's Clothing</Link></li>
    const retrievedCategories=categories.map(category=>{
        return(
            <div className="box"  key={category.idCategory} onClick={(e)=>sendToCategoryPage(e, category.strCategory)} >
                <h2>{category.strCategory}</h2>
                <img src={category.strCategoryThumb} className="category-image" alt="category-pic" />                
            </div>
        )
    })
    return(
        <section className="category-section">
            <h2>Select By Category</h2>
        <div className="category-container">
            {retrievedCategories}
        </div>
        </section>
    )
}

export default SelectedCategory;
//onClick={(e)=>sendToCategoryPage(e, category.strCategory)}