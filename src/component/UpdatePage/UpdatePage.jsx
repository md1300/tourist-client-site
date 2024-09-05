import { useLoaderData } from "react-router-dom";


const UpdatePage = () => {
    const loadingPlace=useLoaderData()
    const {imageUrl,userName, spotsName,email,countryName,averageCost,description,location,seasonality,totalVisitorPerYear,travelTime,}=loadingPlace;
    return (
        <div>
           <form  className="container flex flex-col mx-auto space-y-12">
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