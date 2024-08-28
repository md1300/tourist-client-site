import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";
import Swal from "sweetalert2";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";

const LogIn = () => {
  const {handleLogIn,handleGoogleLogIn, }=useContext(AuthContext)
  const [showPassword,setShowPassword]=useState('')
  const navigate =useNavigate()
  const location=useLocation()
  const form=location?.state || '/'

// ---------------- normal log in ------------------------ 
  const handleLogInButton=e=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password) 
   

    handleLogIn(email,password)
    
    .then(result=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "you are successfully Log In",
        showConfirmButton: false,
        timer: 1500
      });
      console.log(result.user)
      navigate(form)
  })
  .catch(error=>{

    Swal.fire({
      title: 'Error!',
      text: `Do you want to continue to solve, ${error.message}`,
      icon: 'error',
      confirmButtonText: 'Okey'
    })
      
  })
    
   
  }
  


  // ---------------google log in ----------------
  const handleGoogleLogInButton=()=>{
      handleGoogleLogIn()
       
      navigate('/')
    // ------------------------------
  }
    return (
        <>
            <h1>this is log in page</h1>
          {/* ---------------------- */}

          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Log In Now</h1>     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl relative">
      <form onSubmit={handleLogInButton} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword? "text":"password"} placeholder="password" className="input input-bordered" name="password" required />
          {/* <button><IoEyeSharp /></button> */}
          
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="flex gap-3 p-5">
         <p onClick={handleGoogleLogInButton} className="btn btn-link border-2">Sign up with Google </p>
         <p className="btn btn-link border-2">Sign up with GitHub</p>
       </div> 
       
      <div>
        <p className="p-5">if you do not have an account <span className="btn btn-link"><Link to='/registration'> register </Link></span> here </p>
        </div> 
        <div className="absolute top-44 right-3">
          <button className="text-xl" onClick={()=>setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash />:<IoEyeSharp />}</button>
        </div>
       
    </div>
  </div>
  
</div>
         

          {/* ---------------------- */}
          

        </>
    );
};

export default LogIn;