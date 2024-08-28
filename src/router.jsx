import { createBrowserRouter } from "react-router-dom";
import Header from "./Header/Header";
import Registration from "./registerPage/Registration";
import LogIn from "./registerPage/LogIn";
import Home from "./component/Home";
import AddTouristSpots from "./component/AddTouristSpots";
import TouristSports from "./component/TouristSports";
import MyList from "./component/MyList";
import NotFound from "./NotFound/NotFound";




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
                element:<AddTouristSpots/>
            },
            {
                path:'/spots',
                element:<TouristSports/>
            },
            {
                path:'/myList',
                element:<MyList/>
            }
        ]
    }
])

export default router;