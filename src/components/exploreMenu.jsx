import { useContext } from "react"
import foodContext from "./foodContext"

export default function ExploreMenu(){

    const {menuList, active, setActive} = useContext(foodContext)
    
    return(
        <div className='menuContainer'>
            {menuList.map((item, index) => (
                <div
                onClick={()=>setActive(par =>(par===item.menuTitle?active:item.menuTitle))}
                className={`menuItem ${active===item.menuTitle?'active':''}`}
                key={index}>
                  <img src={item.menuPhoto} alt={item.menuTitle} className='menuPhoto'/>
                   <p className='menuText'>{item.menuTitle}</p>
                </div>
    

            ))}
        </div>

    )
}