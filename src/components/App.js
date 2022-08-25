import React from 'react';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import AreaScreen from '../screens/AreaScreen';
import IngredientScreen from '../screens/IngredientScreen';
import SingleCategoryScreen from '../screens/SingleCategoryScreen';

import MealDetails from './mealDetails';
import SingleArea from './SingleArea';



const App=()=>{
    return(
        <div className="wrapper">
            
            <BrowserRouter>             
                <Nav />
                <Header />         
                <Routes>
                    <Route path="/react-meal" element={<HomeScreen />} />
                    <Route path="/showCategory" element={<CategoryScreen />} />
                    <Route path="/showArea" element={<AreaScreen />} /> 
                    <Route path="/ingredients" element={<IngredientScreen />} />
                    <Route path="/category/:cat" element={<SingleCategoryScreen />} /> 
                    <Route path="/meal/:id" element={<MealDetails />} /> 
                    <Route path="/area/:areaName" element={<SingleArea />} />
                </Routes>
                <Footer />
            </BrowserRouter>
            
        </div>
    )
}

export default App;

/*
<Route path="/" element={<Home />} />
                    <Route path="/showCategory" element={<CategoryList />} />
                    <Route path="/showArea" element={<AreasList />} /> 
                    <Route path="/showIngredients" element={<AreasList />} />                   
                    <Route path="/category/:cat_name" element={<FilterCategory />} /> 
                    <Route path="/area/:area_name" element={<SingleArea />} />                   
                    */