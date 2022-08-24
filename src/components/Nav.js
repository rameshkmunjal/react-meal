import React from 'react';
import {Link} from 'react-router-dom';
import SearchBox from './Search';

const Nav=()=>{
    return(
        <div className="nav">
            <ul>
                    <li><Link className="nav-link" to={`/`}>Home</Link></li>
                    <li><Link className="nav-link" to={`/showCategory`}>Categories</Link></li>
                    <li><Link className="nav-link" to={`/showArea`}>Areas</Link></li>
                    <li><Link className="nav-link" to={`/ingredients`}>Ingredients</Link></li>                                      
            </ul>
            <SearchBox />
        </div>    
    )
}

export default Nav;