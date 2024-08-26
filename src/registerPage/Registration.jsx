import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";


const Registration = () => {

  const {handleRegistration}=useContext(AuthContext)


  const handleRegisterButton=e=>{
    e.preventDefault()
    const form=e.target;
    const name=form.name.value;
    const photoUrl=form.photoUrl.value;
    const email=form.email.value;
    const password=form.password.value;
    const register={name,photoUrl,email,password};
    handleRegistration(email,password)

    console.log(register)
   
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
          <input type="password" placeholder="password" className="input input-bordered" name="password" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">register</button>
        </div>
      </form>
       
      <p className="p-5">if you have already an account <span className="btn btn-link"> <Link to='/logIn'>log in </Link></span></p>
    </div>
  </div>
</div>
            {/* ------------------------------------ */}
            
        </div>
    );
};

export default Registration;