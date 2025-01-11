
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import foodContext from "./foodContext"

export default function FoodList(){

   const { active, foodList, searchTerm} = useContext(foodContext) 

    
    const Navigate = useNavigate() 
    
    const filteredList = foodList
        .filter(item => !active || active === 'Breakfast' ? item.itemType === 'Breakfast' : item.itemType === active)
        .filter(item => !searchTerm || item.itemTitle.toLowerCase().includes(searchTerm.toLowerCase()));

    return(
        <div className='foodListContainer'>
            {filteredList.map((item, index) => (
                <div
                onClick={()=>Navigate(`./food/${item.id}`)} 
                className='foodList'
                key={index}>
                    <img 
                    className='foodListPhoto'
                    src={item.itemPhoto} 
                    alt={item.itemTitle}
                    />
                    <div className='foodListTitle'>{item.itemTitle}</div>
                    <div className='foodListSupTitle'>{item.itemSupTitle}</div>
                    <div className='foodListPrice'>$ {item.itemPrice}</div>

                </div>

            ))}
        </div>
    )
}