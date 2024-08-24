import { Link } from "react-router-dom";


const Navbar = () => {
    const home=<Link to='/'> <button> home </button></Link>
    const spots=<Link to='/spots'> <button> All Tourists Spot </button></Link>
    const addSpot=<Link to='/addSpot'><button> Add Tourists Spot </button></Link>
    const myList=<Link to='/myList'><button> My List </button></Link>
    return (
        <>
           <div className="navbar bg-base-100">
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
        <li>{home}</li>
        <li>{spots}</li>
        <li>{addSpot}</li>
        <li>{myList}</li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li>{home}</li>
       <li>{spots}</li>
       <li>{addSpot}</li>
       <li>{myList}</li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/registration' className="btn">Log in</Link>
  </div>
</div> 
        </>
    );
};

export default Navbar;