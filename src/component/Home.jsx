import Banner from "../Banner/Banner";
import CountryCard from "./CountryCard/CountryCard";
import EuroZone from "./EuroZone/EuroZone";




const Home = () => {
    
    return (
        <div> 
            <Banner/>
            <CountryCard/>
            <EuroZone/>
            <h1 className="text-center text-3xl">this is home page </h1>
        </div>
    );
};

export default Home;