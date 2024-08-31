

const Banner = () => {
    return (
        <>  
             
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="/src/assets/beautiful-tropical-beach-sea.jpg"
      className="w-full h-96" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="/src/assets/classical-gardens-beautiful-lakes-tree-china.jpg"
      className="w-full h-96" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="/src/assets/water-fall.jpg"
      className="w-full h-96" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="/src/assets/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand.jpg"
      className="w-full h-96" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div> 
        </>
    );
};

export default Banner;