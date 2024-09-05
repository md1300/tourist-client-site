import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextApi/AuthProvider";



const MyList = () => {
   
    const {user}=useContext(AuthContext) || {}
    const [myDataLists,setMyDataList]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:4000/myList/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setMyDataList(data)
        })
    },[user])
    return (
        <div>
            <h1>the length of my data lists {myDataLists.length}</h1>
            <h1>this is my add list</h1>
        </div>
    );
};

export default MyList;