import { useContext } from 'react';
import foodContext from './foodContext';
import { useNavigate } from 'react-router-dom';

export default function SecondFoodlist (){

    const { activee, secondFoodList} = useContext(foodContext)
    
    const Navigate = useNavigate();

    const filteredList = !activee || activee === 'Shawarma' ? secondFoodList.filter(item => item.itemType === 'Shawarma') : secondFoodList.filter(item => item.itemType === activee);

    return(
        <div className='secondFoodListContainer'>{filteredList.map((item, index) => (
            <div 
            onClick={() => Navigate(`./food2/${item.id}`)}
            className='secondFoodList'
            key={index}>
                <img 
                className='secondFoodListPhoto'
                src={item.itemPhoto} 
                alt={item.itemTitle}/>
                <div className='secontFoodMenuTitle'>{item.itemTitle}</div>
                <div className='secondFoodMenuTitle'>{item.itemSupTitle}</div>
                <div className='secondFoodMenuPrice'>$ {item.itemPrice}</div>
            </div>
        ))}</div>
    )
}