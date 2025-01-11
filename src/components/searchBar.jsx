import React from "react";
import '../style.css'
import { useContext, useState } from "react";
import foodContext from "./foodContext";

export default function SearchBar(){

    const {searchTerm, setSearchTerm, onSearch, foodItems} = useContext(foodContext)

    const handleChange = (e) =>{
        setSearchTerm(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch()
    }
    

    return(
        <div className="searchBar" style={{
            backgroundImage: "url(https://red-onion-online-food-946d6.web.app/static/media/bannerbackground.e0679251.png)",
        }}>

        <div className="searchText"> 
        Best Food Waiting For Your Belly 
        </div>

        <form 
        onSubmit={handleSubmit}
        className="searchParant">
            <input 
            type="text"
            className="searchInput"
            placeholder="Search Food Item"
            value={searchTerm}
            onChange={handleChange} />
            <button 
            className="searchButton"
            > Search </button>
        </form>
        </div>
    )
}