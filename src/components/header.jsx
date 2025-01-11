import React from "react";
import '../style.css'
import { useNavigate } from "react-router-dom";
import shoppingCard from '../photos/shoppingCard.webp'
//import SignUp from "../pages/signUp";

export default function Header(){

  const navigate = useNavigate();

    return(
    <div className="header">
        <img 
        src="https://red-onion-online-food-946d6.web.app/static/media/logo2.2ce2face.png" 
        alt="Website Logo" 
        className="headerPhoto" 
        onClick={()=>navigate('/')}/>


      <div className="cardContainer">

      
          <img src={shoppingCard} className='card' alt='card' onClick={()=>navigate('/cart')}/>
          <input className="cardinbut"/>

        <button 
        onClick={()=>navigate('/signup')}
        className="loginButton">Login
        </button>

        <button 
        onClick={()=>navigate('/signup')}
        className="signupButton">Sign Up
        </button>

      </div>
    </div>
    );
};