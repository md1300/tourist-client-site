import { Link } from "react-router-dom";


const EuroZone = () => {
    return (
        <div className="my-5">
            <div className="grid md:grid-cols-3 gap-9">
        

        <Link to='/countries/spain'>
        <div className="card bg-base-100 w-96 shadow-xl border-2">
            <figure>
                <img  src="../../../src/assets/spain.jpg" alt="" />
            </figure>
            <div className="card-body items-center text-center">
            <h1 className="card-title ">name : Spain</h1>
             
            </div>
            </div>
            </Link>
        
        <Link to='/countries/italy'>
        <div className="card bg-base-100 w-96 shadow-xl border-2">
            <figure>
                <img className="h-96" src="../../../src/assets/italy.jpg" alt="" />
            </figure>
            <div className="card-body items-center text-center">
            <h1 className="card-title">name : Italy</h1>
            </div>
        </div></Link>
        <Link to='/countries/france'>
        <div className="card bg-base-100 w-96 shadow-xl border-2">
            <figure>
                <img className="h-96" src="../../../src/assets/france.jpg" alt="" />
            </figure>
            <div className="card-body items-center text-center">
            <h1 className="card-title">name : France</h1>
            </div>
        </div></Link>
        <Link to='/countries/england'>
        <div className="card bg-base-100 w-96 shadow-xl border-2">
            <figure>
                <img className="h-96" src="../../../src/assets/england.jpg" alt="" />
            </figure>
            <div className="card-body items-center text-center">
            <h1 className="card-title">name : England</h1>
            </div>
        </div></Link>
        <Link to='/countries/swizerland'>
        <div className="card bg-base-100 w-96 shadow-xl border-2">
            <figure>
                <img className="h-96" src="../../../src/assets/swizerland.jpg" alt="" />
            </figure>
            <div className="card-body items-center text-center">
            <h1 className="card-title">name : Swizerland</h1>
            </div>
        </div></Link>
        <Link to='/countries/netherland'>
        <div className="card bg-base-100 w-96 shadow-xl border-2">
            <figure>
                <img className="h-96" src="../../../src/assets/Netherlands.jpg" alt="" />
            </figure>
            <div className="card-body items-center text-center">
            <h1 className="card-title">name :Netherland</h1>  
            </div>         
        </div></Link>
        </div>
        </div>
    );
};

export default EuroZone;