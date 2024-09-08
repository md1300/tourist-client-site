import { createBrowserRouter } from "react-router-dom";
import Header from "./Header/Header";
import Registration from "./registerPage/Registration";
import LogIn from "./registerPage/LogIn";
import Home from "./component/Home";
import AddTouristSpots from "./component/AddTouristSpots";
import TouristSports from "./component/TouristSports";
import MyList from "./component/MyList";
import NotFound from "./NotFound/NotFound";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Details from "./component/Details/Details";
import UpdatePage from "./component/UpdatePage/UpdatePage";
import CountryCard from "./component/CountryCard/CountryCard";
import EuroZone from "./component/EuroZone/EuroZone";
import SpecialPlace from "./component/SpecialPlace/SpecialPlace";




const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<NotFound/>,
        element:<Header></Header>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/registration',
                element:<Registration/>
            },
            {
                path:'/logIn',
                element:<LogIn/>
            },
            {
                path:'/addSpot' ,
                element:<PrivateRoute><AddTouristSpots/></PrivateRoute>             
            },
            {
                path:'/spots',
                element:<TouristSports/>,
                loader:()=>fetch('https://tourist-server-site.vercel.app/countries')  
            },
            {
                path:'/myList',
                element:<PrivateRoute><MyList/></PrivateRoute>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><Details/></PrivateRoute>,
                loader:({params})=>fetch(`https://tourist-server-site.vercel.app/countries/${params.id}`)
            },
            {
                path:'/updates/:id',
                element:<UpdatePage/>,
                loader:({params})=>fetch(`https://tourist-server-site.vercel.app/countries/${params.id}`)
            },
            {
                path:'/asia',
                element:<CountryCard/>
            },
            {
                path:'/euro',
                element:<EuroZone/>
            },
            {
                path:"/countries/:countryName",
                element:<SpecialPlace/>,               
            }


        ]
    }
])

export default router;