import { createBrowserRouter } from "react-router-dom";
import Header from "./Header/Header";
import Registration from "./registerPage/Registration";
import LogIn from "./registerPage/LogIn";
import Home from "./component/Home";




const router = createBrowserRouter([
    {
        path:'/',
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
            }
        ]
    }
])

export default router;