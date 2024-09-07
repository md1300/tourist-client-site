import { Link } from "react-router-dom";


const PlaceName = ({placeDatum}) => {
    const{countryName,spotsName,location,
        imageUrl,averageCost,seasonality,_id}=placeDatum;
    return (
        <div className="flex">
               <div className="card bg-base-100 w-96 shadow-xl border-2">
  <div className="card-body">
    <div className="flex justify-between">
       <h2 className="card-title">place : {spotsName}</h2>
      <h2 className="card-title">country:{countryName}</h2>
    </div>
    
    <div className="card-body">
        <p>location :{location} </p>
       <div className="flex justify-between">
        <p>average cost :{averageCost} </p>
        <p>seasonality :{seasonality} </p>
       </div>
       </div>
       <div className="card-actions ">
                        <Link to={`/details/${_id}`}> <button className="btn btn-ghost">View Details
                        </button></Link>                      
                    </div>
    
    
  </div>
  <figure>
    <img
      src={imageUrl} />
  </figure>
</div>         
        </div>
    );
};

export default PlaceName;