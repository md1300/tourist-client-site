import { useContext, useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const {user,handleLogOut}=useContext(AuthContext);
  const [theme,setTheme]=useState("synthwave")
  
const navbarLink=<>
<NavLink to='/' className={({isActive})=>isActive? "btn btn-ghost text-orange-500":"btn btn-ghost"}>Home</NavLink>
<NavLink to='/spots' className={({isActive})=>isActive? "btn btn-ghost text-orange-500":"btn btn-ghost"}>AllTourists Spot</NavLink>
<NavLink to='/addSpot' className={({isActive})=>isActive? "btn btn-ghost text-orange-500":"btn btn-ghost"}>AddTourists Spot</NavLink>
<NavLink to='/myList' className={({isActive})=>isActive? "btn btn-ghost text-orange-500":"btn btn-ghost"}>MyList</NavLink>
<NavLink to='/logIn' className={({isActive})=>isActive? "btn btn-ghost text-orange-500":"btn btn-ghost"}>Login</NavLink>
<NavLink to='/registration' className={({isActive})=>isActive? "btn btn-ghost text-orange-500":"btn btn-ghost"}>Register</NavLink>
{/* ---------------------------- */}
<li className="btn btn-ghost" >
  <details >
    <summary >AreaZone</summary>
       <ul className="p-2 flex-col gap-3">
     <li><NavLink to='/asia'>southest asia Zone</NavLink></li>
     <li><NavLink to='/euro'>Europe- zones </NavLink></li>
   </ul>
  </details>
   
</li>
{/* -------------------------------------- */}
</>
    
    const handleLogOutButton=()=>{
      handleLogOut()
      .then(result=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "successfully Log Out",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error=>{
            console.log(error.message)
      })
    }
  
    useEffect(()=>{
      localStorage.setItem('theme',theme);
      const localTheme=localStorage.getItem('theme')
      document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])
   
    const handleToggleButton=(e)=>{
      if(e.target.checked){
        setTheme("synthwave")
      }
      else{
        setTheme("light")
      }
          
    }


    return (
        <div >
           <div className="navbar bg-base-100 fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      { 
        navbarLink
      }
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {
        navbarLink
       }
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex gap-5 items-center">
      

      <div>
          <input  onChange={handleToggleButton}  type="checkbox"   className="toggle theme-controller"  defaultChecked />
      </div>
     
  
      <div>
        {
        user?<div className="tooltip tooltip-bottom" data-tip={user.email} >
           <div className="avatar">
              <div className="w-14 rounded-full" >
           <img src={user.photoURL}/>
              </div>
           </div>
       </div>:<div>
         </div>
        }
      </div>
            
       <div>
         {
           user?<div>
           <div><button onClick={handleLogOutButton} className="btn">Log Out</button></div>
           </div>:<div><Link to='/logIn' className="btn">Log In</Link></div>
         }
      </div>
    </div>
  </div>
</div> 


        </div>
    );
};

export default Navbar;

//  https://tourist-project-24e16.web.app