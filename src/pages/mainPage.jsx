import Header from "../components/header"
import SearchBar from "../components/searchBar"
import Footer from "../components/footer"
import FirstFoodMenu from "../components/firstFoodMenu"
import SecondFoodMenu from "../components/secondFoodMenu"
import Info from "../components/info"

export default function MainPage(){
    return(
        <div>
        <Header />
        <SearchBar />
        <FirstFoodMenu />
        <SecondFoodMenu />
        <Info />
        <Footer /> 
        </div>

    )
};