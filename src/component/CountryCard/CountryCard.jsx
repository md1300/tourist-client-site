

const CountryCard = () => {
    return (
    <div className="grid md:grid-cols-2 gap-9">
        <div className="card bg-base-100 w-96 shadow-xl border-2">
            <figure>
                <img  src="../../../src/assets/bangladesh.jpg" alt="" />
            </figure>
            <div className="card-body items-center text-center">
            <h1 className="card-title ">name : Bangladesh</h1>
            </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl border-2">
            <figure>
                <img className="h-96" src="../../../src/assets/indonesia.jpg" alt="" />
            </figure>
            <div className="card-body items-center text-center">
            <h1 className="card-title">name : indonesia</h1>
            </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl border-2">
            <figure>
                <img className="h-96" src="../../../src/assets/malaysia.jpg" alt="" />
            </figure>
            <div className="card-body items-center text-center">
            <h1 className="card-title">name : malaysia</h1>
            </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl border-2">
            <figure>
                <img className="h-96" src="../../../src/assets/thailand.jpg" alt="" />
            </figure>
            <div className="card-body items-center text-center">
            <h1 className="card-title">name : thailand</h1>
            </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl border-2">
            <figure>
                <img className="h-96" src="../../../src/assets/vietnam.jpg" alt="" />
            </figure>
            <div className="card-body items-center text-center">
            <h1 className="card-title">name : vietnam</h1>
            </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl border-2">
            <figure>
                <img className="h-96" src="../../../src/assets/combodia.jpg" alt="" />
            </figure>
            <div className="card-body items-center text-center">
            <h1 className="card-title">name : combodia</h1>  
            </div>         
        </div>
        </div>
    );
};

export default CountryCard;