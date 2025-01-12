import { useParams } from "react-router-dom";
import { useContext } from "react";
import foodContext from "../components/foodContext";
import Header from "../components/header";
import '../pageDetailsStyle.css';
import Footer from "../components/footer";

export default function Food(){

    const {id} = useParams()

    const { foodList, count, setCount, addToCart} = useContext(foodContext)


    const item = foodList.find((item) => item.id === parseInt(id));


    return(
        <div>
            <Header />
        <div className="containerofcontainer">
        
        <div className='pageContainer'>
            <button className='closeButton'>Close</button>
            <div className='upperBage'> 
            <div>
                <div className='pageTitle'>{item.itemTitle}</div>
                <div className='pageDec'>{item.itemDec}</div>
            </div>
            <div> <img
             className='pagePhoto'
             src={item.itemPhoto} 
             alt={item.itemTitle}/> </div>
            </div>

            <div className="priceContainer">
            <div className='pagePrice'>$ {item.itemPrice}</div>
            <div className="buttonContainer">
                <button 
                className="buttons"
                onClick={()=>setCount(prev=>(prev > 1 ? prev - 1 : prev))}>-</button>
                <span className="count">{count}</span>
                <button 
                className="buttons"
                onClick={()=>setCount(prev=>prev+1)}>+</button>
            </div>

            </div>
            <button 
            onClick={()=>addToCart(item)}
            className='addButton'>Add</button>
        </div>
        </div>
        <div><Footer /> </div>

        </div>
    )

}