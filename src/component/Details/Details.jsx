import { useLoaderData } from "react-router-dom";


const Details = () => {
    const detailsData=useLoaderData()
   const {imageUrl, spotsName,email,countryName,averageCost,description,location,seasonality,totalVisitorPerYear,travelTime,}=detailsData
    return (
        <div className="flex flex-col items-center">
            <img className="w-2/3" src={imageUrl} alt="" />
            <h1>placeName: {spotsName} </h1>
            <h1>location :{location} </h1>
            <h1>country name :{countryName} </h1>
            <p>averageCost :{averageCost} </p>
            <p>seasonality : {seasonality}</p>
            <p>travelTime : {travelTime} </p>
            <p>totalVisitorPerYear :{totalVisitorPerYear} </p>
            <p>users email : {email} </p>
            <p>details : {description} </p>
        </div>
    );
};

export default Details;