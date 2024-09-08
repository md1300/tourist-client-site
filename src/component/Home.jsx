import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import CountryCard from "./CountryCard/CountryCard";
import EuroZone from "./EuroZone/EuroZone";




const Home = () => {
    
    return (
        <div> 
            <Banner/>
            <CountryCard/>
            <EuroZone/>
            <Footer/>
            </div>
    );
};

export default Home;