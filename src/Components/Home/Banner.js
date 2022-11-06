import React from 'react';
import img1 from '../../images/slide1.png';
import img2 from '../../images/slide2.png';
import img3 from '../../images/slide3.png';
import img4 from '../../images/slide4.png';

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full  mix-blend-multiply bg-primary">
        <div id="item1" className="carousel-item w-full ">
          <img src={img1} className="w-full " />
        </div>
        <div id="item2" className="carousel-item w-full ">
          <img src={img2} className="w-full " />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={img3} className="w-full " />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={img4} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-6 gap-2">
        <a
          href="#item1"
          className="btn btn-sm btn-primary text-white hover:bg-base-300 hover:text-primary"
        >
          1
        </a>
        <a
          href="#item2"
          className="btn btn-sm btn-primary text-white hover:bg-base-300 hover:text-primary"
        >
          2
        </a>
        <a
          href="#item3"
          className="btn btn-sm btn-primary text-white hover:bg-base-300 hover:text-primary"
        >
          3
        </a>
        <a
          href="#item4"
          className="btn btn-sm btn-primary text-white hover:bg-base-300 hover:text-primary"
        >
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;