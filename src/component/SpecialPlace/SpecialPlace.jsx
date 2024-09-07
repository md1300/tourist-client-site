import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaceName from "./PlaceName";


const SpecialPlace = () => {
    const [placeData,setPlaceData]=useState([])
    const {countryName}=useParams()
   

    useEffect(()=>{
        fetch(`http://localhost:4000/country/${countryName}`)
        .then(res=>res.json())
        .then(data=>{
        setPlaceData(data)})
    },[])
    console.log(placeData)
    
    
    return (
        <div>
            <h1>the total number of country place : {placeData.length}</h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    placeData.map(placeDatum=><PlaceName 
                        key={placeDatum._id}
                        placeDatum={placeDatum}
                    ></PlaceName>)
                }
            </div>
        </div>
    );
};

export default SpecialPlace;