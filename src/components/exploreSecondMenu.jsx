import { useContext } from "react";
import foodContext from "./foodContext";

export default function ExploreSecondMenu(){
  
    const {activee, setActivee, menuSecondList} = useContext(foodContext)
    
    return(
        <div className='exploreSeondMenuContainer'>
            {menuSecondList.map((item, index) => (
                <div 
                onClick={()=> setActivee(par=>par===item.menuName?activee:item.menuName)}
                className={`exploreSecondMenu ${activee===item.menuName?"active":""}`}
                key={index}>
                    <img 
                    src={item.menuPhoto} 
                    alt={item.menuName}
                    className='exploreSecondMenuPhoto'
                    />
                    <p className='expoloreSecondMenuText'>{item.menuName}</p>
                </div>
            ))}
        </div>
    )
}