import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
 
  return (
    <div className=" my-9 mx-9 p-10" id="services">
      <div >
        <h1 className="text-4xl font-bold text-center text-primary ">
          <span className="text-secondary text-4xl font-bold px-7 ">\\</span>Our
          Services
          <span className="text-secondary text-4xl font-bold px-7 ">\\</span>
        </h1>

        <div className="divider mx-auto w-1/2 lg:w-1/3"></div>
        <div className="card lg:card-side bg-base-100 shadow-xl grid  lg:grid-cols-2 grid-cols-1 gap-4  ">
          {services.map((service) => (
            <Service service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;