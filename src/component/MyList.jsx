import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextApi/AuthProvider";
import MyListedCard from "./MyListedCard/MyListedCard";

const MyList = () => {
   
    const {user}=useContext(AuthContext) || {}
    const [myDataLists,setMyDataList]=useState([])
   
    useEffect(()=>{
        fetch(`https://tourist-server-site.vercel.app/myList/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setMyDataList(data)
        })
    },[user])

 
    return (
        <div>
            <h1>the length of my data lists {myDataLists.length}</h1>
            <div className="grid grid-cols-3 gap-4">
           {
            myDataLists.map(myDataList=><MyListedCard key={myDataList._id}
                 myDataList={myDataList}
                 myDataLists={myDataLists}
                 setMyDataList={setMyDataList}
                 ></MyListedCard>)
           }
            </div>
        </div>
    );
};

export default MyList;