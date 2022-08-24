import './IngredientList.css';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listIngredients } from '../../actions/mealActions';


const IngredientList=()=>{
    const dispatch=useDispatch();
    const ingredientList=useSelector((state)=>state.ingredientList);
    console.log(ingredientList);
    const {ingredients}=ingredientList;

    useEffect(()=>{
        dispatch(listIngredients());
    }, [dispatch]);

    const ingredientArr=ingredients.filter(item=>{
        if ((item.strDescription != null) && (item.strDescription !="")){
            return item;
        }
    })

    const retrievedList=ingredientArr.map(ingredient=>{
        return (
            <div className="ingredient-box">
                <h3>{ingredient.strIngredient}</h3>
                <p>{ingredient.strDescription}</p>                
            </div>
        )    
    })

    return(
        <div className="ingredient-container">{retrievedList}</div>
    )


    
}

export default IngredientList;