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
                element:<PrivateRoute><TouristSports/></PrivateRoute>
                
            },
            {
                path:'/myList',
                element:<PrivateRoute><MyList/></PrivateRoute>
            }
        ]
    }
])

export default router;