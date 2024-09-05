import { Link, useLoaderData } from "react-router-dom";


const TouristSports = () => {
    const allTouristSports=useLoaderData()
    
   
    return (
        <>          
              <h1>total tourist spots are included  : {allTouristSports.length} </h1>
           <div className="grid grid-cols-4 gap-4">
             {
               allTouristSports.map(allTouristSport=><div className="card bg-slate-500 p-4" key={allTouristSport._id} >
                <figure className="py-5 ">
                     <img      src={allTouristSport.imageUrl} alt=""  /> 
                     </figure>
                   <div className="card-body items-center text-center pb-5">                             
                  <h1 className="card-title" >{allTouristSport.spotsName}</h1>
                  <p>average_cost {allTouristSport.averageCost} </p>
                  <p>totaVisitorsPerYear{allTouristSport.totalVisitorPerYear} </p>
                  <p>travel_time{allTouristSport.travelTime} </p>
                  <p>seasonality{allTouristSport.seasonality} </p>
                    <div className="card-actions ">
                        <Link to={`/details/${allTouristSport._id}`}> <button className="btn btn-ghost">View Details
                        </button></Link>                      
                    </div>
                  </div> 
               </div>)
             }
             </div>
        </>
    );
};

export default TouristSports;