import React from 'react';
import img2 from '../../images/slide2.jpg';
import img3 from '../../images/slide3.jpg';
import img4 from '../../images/slide4.jpg';

const Banner = () => {
  return (<div>
   <div className="carousel w-full h-1/2">
 
  <div id="item2" className="carousel-item w-full ">
    <img src={img2} className="w-full h-1/2" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={img3} className="w-full h-1/2" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={img4} className="w-full h-1/2" />
  </div>
</div> 
<div className="flex justify-center w-full  gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
</div>
  );
};

export default Banner;