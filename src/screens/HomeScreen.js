import './Home.css';
import React from 'react';
import {Link } from 'react-router-dom';
import dining_1 from '../components/images/dining-1.jpg';
import dining_2 from '../components/images/dining-2.jpg';
import dining_3 from '../components/images/dining-3.jpg';

const HomeScreen=()=>{
    return(
        <div className="home-container">
          <div className="categories-div display-box">
              <div className="img-box">
                    <img src={dining_2} alt="banner_pic" />
              </div>
              <div className="contents-box">
                  <div className="contents">
                      <h2>Categories</h2>
                      <p>
                        We have tens of categories and each category has scores of meals for 
                        every ethinicity, taste and liking. You will surely relish our 
                        delicacies when you surf and  explore the content of the pages of 
                        this site.<br/><br/>
                        Then why to delay, make a choice and order.
                  </p>
                  <button><Link className="button-link" to={`/showCategory`}>Explore</Link></button>
                  </div>
                  
              </div>
            </div>
          <div className="areas-div display-box">
          <div className="img-box">
                    <img src={dining_1} alt="banner_pic" />
              </div>
              <div className="contents-box">
              <div className="contents">
                      <h2>Areas</h2>
                      <p>
                      You may be living in any part of the Globe. We have food of your liking .
                      If you don't believe you can surf our relevant page and order to get
                      the taste of your favourite area.
                  </p>
                  <button><Link className="button-link" to={`/showArea`}>Explore</Link></button>
                  </div>
              </div>
           </div>
          <div className="ingredients-div display-box">
            <div className="img-box">
                        <img src={dining_3} alt="banner_pic" />
                </div>
                <div className="contents-box">
                <div className="contents">
                      <h2>Ingredients</h2>
                      <p>
                      tjsdlmlfjm sdflkjfsljfsl sfdfjfsldjfsl fdssfdjlsf fasfljsflfj
                      sdljfslj fsljfslsjfl fsaljfslfsj sfljfslfjl
                      tjsdlmlfjm sdflkjfsljfsl sfdfjfsldjfsl fdssfdjlsf fasfljsflfj
                      sdljfslj fsljfslsjfl fsaljfslfsj sfljfslfjl
                      tjsdlmlfjm sdflkjfsljfsl sfdfjfsldjfsl fdssfdjlsf fasfljsflfj
                      sdljfslj fsljfslsjfl fsaljfslfsj sfljfslfjl
                  </p>
                  <button><Link className="button-link" to={`/ingredients`}>Explore</Link></button>
                  </div>
                </div>  
            </div>  
        </div>
        
    )
}

export default HomeScreen;