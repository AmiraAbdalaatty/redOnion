import React, { useContext } from 'react';
import foodContext from "../components/foodContext";
import Header from '../components/header';
import Footer from '../components/footer';
import '../cart.css';

export default function Cart() {
    const { cartItems } = useContext(foodContext);
    console.log('cartItems:', cartItems);
    

    return (
        <div>
            <Header />
            <div className='firstContainer'>
            <div className='container'>
                <div className='leftDiv'>
                    <h3 className='title1'>Edit Delivery Details</h3>
                    <input 
                    className='allInbuts'
                    placeholder='Delivery To Door'/>
                    <input
                     className='allInbuts'
                    placeholder='Road No'/>
                    <input 
                    className='allInbuts'
                    placeholder='Flat, Suite or Floor'/>
                    <input 
                    className='allInbuts'
                    placeholder='Business name'/>
                    <input 
                    className='allInbuts'
                    placeholder='Address'/>
                    <button className='cardButton1'>Save & Continue</button>
                </div>
                <div className='rightDivCon'>
                <div className='rightDiv'>
                    <div className='res'>
                        <h4>Form</h4>
                         <strong>Star Kabab And restaurant</strong>
                        <h5>Arriving in 20-30 min</h5>
                        <h5>107 Rd No 9</h5>

                    </div>
                    
                    {cartItems.map((item, index) => (<div className='middleDiv' key={index}>
                        <div className='middleDivleft'><img src={item.itemPhoto} alt={item.iitemTitle}/></div>
                        <div className='middleDivright' >
                            <div>{item.iitemTitle}</div>
                            <div>price</div>
                            <div>deliver free</div>
                        </div>
                    </div> ))}
                    
                    <div className= 'lists'>
                        <div><ul>
                            <li>Sub Total</li>
                            <li>Tax</li>
                            <li>Delivery Fee</li>
                            <li>Total</li>
                            </ul></div>
                        <div><ul>
                            <li>$8.99</li>
                            <li>$0.45</li>
                            <li>$2</li>
                            <li>$11.44</li>
                            </ul></div>
                    </div>
                    <div><button className='lastone'>Check Out Your Food</button></div>
                </div>
                </div>
            </div>
            </div> 
            
            <Footer />
           
        </div>
    );
}
