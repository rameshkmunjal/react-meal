import React from 'react';
import {Link} from 'react-router-dom';

const Footer=()=>{
    return(
        <>
        <div className="footer">
            <div className="address-div">
                <h3>Food Planet</h3>
                <p>156, Sector-55</p>
                <strong>Gururam - 122023</strong>
                <p>Phone: 23232323</p>
                <p>E-mail:rkmxxxx@gmail.com</p>
            </div>
            <div className="footer-links">
                <ul>
                    <li><Link className="footer-link" to={`/`}>Home</Link></li>
                    <li><Link className="footer-link" to={`/showCategory`}>Categories</Link></li>
                    <li><Link className="footer-link" to={`/showArea`}>Areas</Link></li>
                    <li><Link className="footer-link" to={`/ingredients`}>Ingredients</Link></li>                                      
                </ul>
            </div>
            <div className="sm-links">
                <ul>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>                    
                </ul>
            </div>
            <div className="contact-div">
                <h5>For Monthly Newletter, Subscribe</h5>
                <input type="text" placeholder="Your Email here" />
                <button>Send</button>
            </div>
        </div>
        <div className="footnote">
            <p>Developed By : Ramesh Kumar Munjal  </p>
            <p> Credits : images : Pexels.com</p>
        </div>

        </>
    )
}

export default Footer;