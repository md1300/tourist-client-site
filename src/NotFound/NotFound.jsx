import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="text-center">
         <h1 className="text-2xl m-5">ooooooppppppppppsssssssssss !!!!!!!!!!!!!!!!</h1>
         <h3 className="text-xl mb-5">this site cannot be reached </h3>
         <p>if you want to go back <Link to='/'><span className="btn btn-link">click here</span></Link> </p>
            
        </div>
    );
};

export default NotFound;