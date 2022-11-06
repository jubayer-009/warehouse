import React from "react";

const Service = ({ service }) => {
  const { name, picture, about } = service;
  return (
    <div className="p-7">
      <div className="flex border">
        <div>
          <img 
          className="bg-base-200 mr-7 h-20 w-20git"
          src={picture} alt="" />
        </div>
        <div>
          <h5 className="font-bold text-lg ">{name}</h5>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
