import { createContext, useState } from "react";
import breakfastImage from '../photos/Breakfast-photo.png';
import lunchImage from '../photos/Lunch-photo.png';
import dinnerImage from '../photos/Dinner-photo.png'

import breakfast1 from '../photos/breakfast1.png';
import breakfast2 from '../photos/breakfast2.png';
import breakfast3 from '../photos/breakfast3.png';
import lunch1 from '../photos/lunch1.png';
import lunch2 from '../photos/lunch2.png';
import lunch3 from '../photos/lunch3.png';
import dinner1 from '../photos/dinner1.png';
import dinner2 from '../photos/dinner2.png';
import dinner3 from '../photos/dinner3.png';

import shawarmaImage from '../photos/shawarma.png';
import burgerImage from '../photos/burger.png';
import pizzaImage from '../photos/pizza.png';
import sandwichImage from '../photos/sandwich.png';
import iceCreamImage from '../photos/iceCream.png';
import drinksImage from '../photos/drinks.png'

import sh1 from '../photos/sh1.png';
import sh2 from '../photos/sh2.png';
import b1 from '../photos/b1.png';
import b2 from '../photos/b2.png';
import p1 from '../photos/p1.png';
import p2 from '../photos/p2.png';
import s1 from '../photos/s1.png';
import s2 from '../photos/s2.png';


const foodContext = createContext();

function FoodProvider({children}){

    const [active, setActive] = useState('Breakfast');
    const [activee, setActivee] = useState('Shawarma')
    const [searchTerm, setSearchTerm] = useState('')
    const [foodItems, setFoodItems] = useState([])
    const [count, setCount] = useState(1)
    const [cartItems, setCartItems] = useState([])

    const menuList = [
        {
            menuPhoto: breakfastImage,
            menuTitle: 'Breakfast'
        },
        {
            menuPhoto: lunchImage,
            menuTitle: "Lunch"
        },
        {
            menuPhoto: dinnerImage,
            menuTitle: "Dinner" 
        }
    ];

    const foodList = [
        {
           itemPhoto: breakfast1,
           itemTitle: 'Begal and Cream',
           itemSupTitle: 'how we dream about our future',
           itemPrice: 13.99,
           itemType: 'Breakfast',
           itemDec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s.",
           id: 1
        },
        {
           itemPhoto: breakfast2,
           itemTitle: 'Breackfast Sandwich',
           itemSupTitle: 'how we dream about our future',
           itemPrice: 10.99,
           itemType: 'Breakfast',
           itemDec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s.",
           id: 2
        },
        {
           itemPhoto: breakfast3,
           itemTitle: 'Backed Chicken fry',
           itemSupTitle: 'how we dream about our future',
           itemPrice: 6.99,
           itemType: 'Breakfast',
           itemDec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s.",
           id: 3
        },
        {
           itemPhoto: lunch1,
           itemTitle: 'Healthy Meal Plan',
           itemSupTitle: 'how we dream about our future',
           itemPrice: 12.99,
           itemType: 'Lunch',
           itemDec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s.",
           id: 4
        },
        {
           itemPhoto: lunch2,
           itemTitle: 'Fried Chicken Beneta',
           itemSupTitle: 'how we dream about our future',
           itemPrice: 10.99,
           itemType: 'Lunch',
           itemDec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s.",
           id: 5
        },
        {
           itemPhoto: lunch3,
           itemTitle: 'Tarragol Rubble Salmon',
           itemSupTitle: 'how we dream about our future',
           itemPrice: 6.99,
           itemType: 'Lunch',
           itemDec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s.",
           id: 6
        },
        {
           itemPhoto: dinner1,
           itemTitle: 'Baked Chicken Fry',
           itemSupTitle: 'how we dream about our future',
           itemPrice: 9.99,
           itemType: 'Dinner',
           itemDec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s.",
           id: 7
        },
        {
           itemPhoto: dinner2,
           itemTitle: 'Lemoni Selmon Piccata',
           itemSupTitle: 'how we dream about our future',
           itemPrice: 10.99,
           itemType: 'Dinner',
           itemDec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s.",
           id: 8
        },
        {
           itemPhoto: dinner3,
           itemTitle: 'Garlic Butter',
           itemSupTitle: 'how we dream about our future',
           itemPrice: 6.99,
           itemType: 'Dinner',
           itemDec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s.",
           id: 9
        }
       ];

       const menuSecondList = [
        {
            menuPhoto: shawarmaImage,
            menuName: 'Shawarma'
        },
        {
            menuPhoto: burgerImage,
            menuName: 'Burger'
        },
        {
            menuPhoto: pizzaImage,
            menuName: 'Pizza'
        },
        {
            menuPhoto: sandwichImage,
            menuName: 'Sandwich'
        },
        {
            menuPhoto: iceCreamImage,
            menuName: 'Ice Cream'
        },
        {
            menuPhoto: drinksImage,
            menuName: 'Drinks'
        }
    ]

    const secondFoodList = [
        {
            itemPhoto: sh1,
            itemTitle: 'Suppli BBQ Chicken',
            itemSupTitle: 'how we dream about our future',
            itemDec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s',
            itemType: 'Shawarma',
            itemPrice: 3.99,
            id: 10

        },
        {
            itemPhoto: sh2,
            itemTitle: 'Fried Chicken',
            itemSupTitle: 'how we dream about our future',
            itemDec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s',
            itemType: 'Shawarma',
            itemPrice: 4.99,
            id: 11

        },
        {
            itemPhoto: b1,
            itemTitle: 'Bob Burger Barn',
            itemSupTitle: 'how we dream about our future',
            itemDec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s',
            itemType: 'Burger',
            itemPrice:4.99,
            id: 12
        },
        {
            itemPhoto: b2,
            itemTitle: 'Burger Bros Ahoy',
            itemSupTitle: 'how we dream about our future',
            itemDec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s',
            itemType: 'Burger',
            itemPrice: 5.99,
            id: 13
        },
        {
            itemPhoto: p1,
            itemTitle: 'Quataro Formaggi',
            itemSupTitle: 'how we dream about our future',
            itemDec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s',
            itemType: 'Pizza',
            itemPrice: 6.99,
            id: 14
        },
        {
            itemPhoto: p2,
            itemTitle: 'Napoltana',
            itemSupTitle: 'how we dream about our future',
            itemDec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s',
            itemType: 'Pizza',
            itemPrice: 7.99,
            id: 15
        },
        {
            itemPhoto: s1,
            itemTitle: 'Carrozza Cemita',
            itemSupTitle: 'how we dream about our future',
            itemDec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s',
            itemType: 'Sandwich',
            itemPrice: 1.99,
            id: 16
        },
        {
            itemPhoto: s2,
            itemTitle: 'Beef Kroket',
            itemSupTitle: 'how we dream about our future',
            itemDec: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s',
            itemType: 'Sandwich',
            itemPrice: 4.99,
            id: 17
        }
        
    ]
    const data = [...foodList, ...secondFoodList]

    const onSearch = () =>{
       const filteredData =  data.filter((item) => 
    item.itemTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFoodItems(filteredData)
    }

    const addToCart = (item) => {
        setCartItems(prevItems => [...prevItems, { ...item, quantity: count }]);
        setCount(1)
    }

    const valueToShare =
    { 
    menuList,
      foodList, 
      active, 
      setActive,  
      activee, 
      setActivee,
      menuSecondList, 
      secondFoodList,
      searchTerm,
      setSearchTerm,
      onSearch,
      foodItems,
      count,
      setCount,
      addToCart,
      cartItems
 }

    return(
        <foodContext.Provider value={valueToShare}>
            {children}
        </foodContext.Provider>
    )
};
export{FoodProvider};
export default foodContext