

const AddTouristSpots = () => {
    return (
        <>
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
	<form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Image URL</label>
					<input id="firstname" type="url" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">User Name</label>
					<input id="lastname" type="text" placeholder="User Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Tourists Spot Name</label>
					<input id="lastname" type="text" placeholder="Tourists Spot Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="address" className="text-sm">Country Name</label>
					<input id="address" type="text" placeholder="Country Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="city" className="text-sm">Location</label>
					<input id="city" type="text" placeholder="location" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full">
					<label htmlFor="state" className="text-sm">Short Description</label>
					<input id="state" type="text" placeholder="short description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="zip" className="text-sm">Average Cost</label>
					<input id="zip" type="text" placeholder="average_cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="zip" className="text-sm">Seasonality- like Summer, Winter</label>
					<input id="zip" type="text" placeholder="seasonality- like summer, winter" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="zip" className="text-sm">Travel Time = like- 7 days</label>
					<input id="zip" type="text" placeholder="travel_time => like- 7 days" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="zip" className="text-sm">totaVisitorsPerYear = like- 10000</label>
					<input id="zip" type="text" placeholder="totaVisitorsPerYear => like- 10000" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border-2 p-2" />
				</div>
				<div className="col-span-full border-2">
					
					<button className="btn btn-block  p-2 ">Add Information</button>
				</div>
				
			</div>
		</fieldset>
		
	</form>
</section>
            
        </>
    );
};

export default AddTouristSpots;