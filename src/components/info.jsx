import info1Image from '../photos/info1.png';
import info2Image from '../photos/info2.png';
import info3Image from '../photos/info3.png'

export default function Info() {
    const cards = [
        {
            infoPhoto: info1Image,
            infoTitle: 'Quick Delivery',
            infoEx: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            infoPhoto: info2Image,
            infoTitle: 'A Good Auto Responder',
            infoEx: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            infoPhoto: info3Image,
            infoTitle: 'Home Delivery',
            infoEx: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        }
    ]

    return(
        <div className='infoContainer'>
            <h1 className='infoTitle'>Why You Choose Us!</h1>
            <p className='infoDec'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci. Nostrum quia soluta vel distinctio delectus!</p>
            <div className='cardContainer'>
                {cards.map((item, index) => (
                    <div 
                    className='infoCard'
                    key={index}>
                        <img 
                        src={item.infoPhoto} 
                        alt={item.infoTitle}
                        className='cardPhoto'
                        />
                        <h1 className='cardTitle'>{item.infoTitle}</h1>
                        <p className='cardDec'>{item.infoEx}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}