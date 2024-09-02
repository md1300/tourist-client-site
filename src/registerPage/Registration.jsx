import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";
import Swal from "sweetalert2";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";


const Registration = () => {

  const {handleRegistration,UpdateUserprofile}=useContext(AuthContext)
  const [showPassword,setShowPassword]=useState('')

  const navigate=useNavigate()
  

  console.log(location)

  const handleRegisterButton=e=>{
    e.preventDefault()
    const form=e.target;
    const name=form.name.value;
    const photoUrl=form.photoUrl.value;
    const email=form.email.value;
    const password=form.password.value;
    const register={name,photoUrl,email,password};
    console.log(register)   
    
    if(password.length<6){
        alert ('please, insert minimum six character')
        return
    }
    else if(!/[A-Z]/.test(password)){
      alert('please , insert minimum one Capital letter')
      
      return 
    }
    else if(!/[a-z]/.test(password)){
      alert ('please , insert minimum one small letter')
      return
    }
    
    handleRegistration(email,password)
    .then(result=>{
        UpdateUserprofile(name,photoUrl)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "you are successfully registered",
          showConfirmButton: false,
          timer: 1500
      });

      console.log(result.user)
      navigate('/')
  })
  .catch(error=>{
    Swal.fire({
      title: 'Error!',
      text: `Do you want to continue ${error.message}`,
      icon: 'error',
      confirmButtonText: 'Okey'
    })
  })

    
  }
    return (
        <div>
            <h1>this is registration page</h1>
            {/* ------------------------------- */}
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">registration here</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegisterButton} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your name</span>
          </label>
          <input type="text" placeholder="Your name" className="input input-bordered" name="name" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="url" placeholder="PhotoUrl" className="input input-bordered" name="photoUrl" required />
        </div>
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
          <input type={showPassword?"text":"password"} placeholder="password" className="input input-bordered" name="password" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">register</button>
        </div>
      </form>
       {/* -------------------- */}
       <div className="absolute bottom-60 right-3">
          <button className="text-xl" onClick={()=>setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash />:<IoEyeSharp />}</button>
        </div>
       {/* ---------------------- */}
      <p className="p-5">if you have already an account <span className="btn btn-link"> <Link to='/logIn'>log in </Link></span></p>
    </div>
    
  </div>
</div>
            {/* ------------------------------------ */}
            
        </div>
    );
};

export default Registration;