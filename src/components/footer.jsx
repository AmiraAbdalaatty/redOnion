import React from "react";
import '../style.css' 

export default function Footer(){
    return(
        <div className="footer">

        <div className="footerUp">
            <div className="footerPhoto"> 
            <img 
            src="https://red-onion-online-food-946d6.web.app/static/media/logo.888f17aa.png"
            alt="footer logo"
            className="footerPhoto"
            />
             </div>
            <div className="footerList">
                <ul>
                    <li>About Online Food</li>
                    <li>Read Our Blog</li>
                    <li>Sign Up to Deliver</li>
                    <li>Add Your</li>
                    <li>Restaurant</li>
                </ul>
            </div>
            <div className="footerList"> 
                <ul>
                    <li>Get Help</li>
                    <li>Read FAQ</li>
                    <li>View All Cities</li>
                    <li>Restaurant Near</li>
                    <li>Me</li>
                </ul>

            </div>
        </div>

         <div className="footerDown"> 
         <div className="footerDownText">Copyright @ 2024 Red Onion online food. proudly created By Amira Atty </div>
         <div className="footerDownList">
            <ul>
                <li>Privacy Policy</li>
                <li>Pricing</li>
            </ul>
            </div>
         <div className="footerDownList"> 
            <ul>
                <li>Terms Of Use</li>
            </ul>
         </div>
         </div>
        </div>
    )
}