import React from "react";
import './Services.css';

const Service = ({ service }) => {
  const { name, picture, about } = service;
  return (
    <div className="p-7  ">
      <div className=" border rounded-lg lg:flex items-center justify-center">
        <div className="p-7  bg-secondary  rounded-lg ">
          <img
            className=" lg:flex-none w-28 h-28 p-5 icon-color "
            src={picture}
            alt=""
          />
        </div>

        <div className="lg:flex-1 p-7 rounded-lg ">
          <h5 className="font-bold text-lg ">{name}</h5>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
