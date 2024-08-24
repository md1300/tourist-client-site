import { Link } from "react-router-dom";


const Registration = () => {

  const handleRegisterButton=e=>{
    e.preventDefault()
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
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
       <div className="flex gap-3 p-5">
       <p className=" border-2">Sign up with Google </p>
       <p className=" border-2">Sign up with GitHub</p>
       </div>
      <p className="p-5">if you have already an account <span className="btn btn-link"> <Link to='/logIn'>log in </Link></span></p>
    </div>
  </div>
</div>
            {/* ------------------------------------ */}
        </div>
    );
};

export default Registration;