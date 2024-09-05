
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyListedCard = ({myDataList,setMyDataList,myDataLists}) => {
    

    const {_id,spotsName,email,countryName}=myDataList;

    const handleDeleteButton=_id=>{
    //   console.log(_id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
             fetch(`http://localhost:4000/countries/${_id}`,{
        method:'DELETE'
      }) 
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount>0){
              Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"           
          });
         const remainingListedCard=myDataLists.filter(card=>console.log(card._id!==_id))
         setMyDataList(remainingListedCard)
        }
    })
        
        }
      });
    
    }
    return (
        <div>
            <div className="border-2 p-5 bg-zinc-500" >
                    
                    <h1>{_id}</h1>
                    <h1>place name {spotsName} </h1>
                    <h1>place name {countryName} </h1>
                    <h1>place name {email} </h1>
                   <div className="mt-6 flex justify-between">
                    <Link to={`/updates/${_id}`}><button className="btn btn-ghost">update</button></Link> 
                      <button onClick={()=>handleDeleteButton(_id)}  className="btn btn-ghost">delete</button>
                   </div>
                </div>
        </div>
    );
};

export default MyListedCard;