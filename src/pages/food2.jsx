import { useParams } from "react-router-dom";
import { useContext } from "react";
import foodContext from "../components/foodContext";
import Header from "../components/header";
import Footer from "../components/footer";
import '../secondPageDetails.css';

export default function Food2(){
    const {id} = useParams()

    const { secondFoodList, addToCart } = useContext(foodContext)


    const item = secondFoodList.find((item) => item.id === parseInt(id));

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
            <div className='pagePrice'>$ {item.itemPrice}</div>
            <button 
            onClick={()=>addToCart(item)}
            className='addButton'>Add</button>
        </div>
        
        </div>
            <Footer />

        </div>
    )
    
}