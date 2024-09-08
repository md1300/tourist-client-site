import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {
    const loadingPlace=useLoaderData()
    const {_id,imageUrl,userName, spotsName,email,countryName,averageCost,description,location,seasonality,totalVisitorPerYear,travelTime,}=loadingPlace;

    const handleUpdateButton=e=>{
        e.preventDefault()
        const form=e.target;
        const imageUrl=form.image.value;
        const userName=form.userName.value;
        const spotsName=form.spotsName.value;
         const email=form.email.value;
         const countryName=form.countryName.value;
         const location=form.location.value;
         const description=form.description.value;
         const averageCost=form.averageCost.value;
         const seasonality=form.seasonality.value;
         const travelTime=form.travelTime.value;
         const totalVisitorPerYear=form.totalVisitorPerYear.value;
         const updateSubmission={imageUrl,userName,spotsName,email,countryName,location,description,averageCost,seasonality,travelTime,totalVisitorPerYear}
        //  ----------------
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tourist-server-site.vercel.app/countries/${_id}`,{
                    method:'PUT',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(updateSubmission)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.acknowledged){
                    Swal.fire({
                        title: "Updated",
                        text: "Your file has been Updated.",
                        icon: "success"
                      });
                    }
                })
             
            }
          });
        // ------------------
        
         

            form.reset()
        
    }

    return (
        <div>
           <form onSubmit={handleUpdateButton}  className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Image URL</label>
					<input name="image" type="url" placeholder={imageUrl} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">User Name</label>
    
					<input name="userName" type="text" placeholder={userName} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Tourists Spot Name</label>
					<input name="spotsName" type="text" placeholder={spotsName} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>

                  <input name="email" type="email" placeholder={email} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="address" className="text-sm">Country Name</label>
					<input name="countryName" type="text" placeholder={countryName} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="city" className="text-sm">Location</label>
					<input name="location" type="text" placeholder={location} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full">
					<label htmlFor="state" className="text-sm">Short Description</label>
					<input name="description" type="text" placeholder={description} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="zip" className="text-sm">Average Cost</label>
					<input name="averageCost" type="text" placeholder={averageCost} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="zip" className="text-sm">Seasonality- like Summer, Winter</label>
					<input name="seasonality" type="text" placeholder={seasonality} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="zip" className="text-sm">Travel Time = like- 7 days</label>
					<input name="travelTime" type="text" placeholder={travelTime} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="zip" className="text-sm">totaVisitorsPerYear = like- 10000</label>
					<input name="totalVisitorPerYear" type="text" placeholder={totalVisitorPerYear} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full border-2">
					
					<button className="btn btn-block  p-2 ">Add Information</button>
				</div>
				
			</div>
		</fieldset>
		
	</form>
        </div>
    );
};

export default UpdatePage;