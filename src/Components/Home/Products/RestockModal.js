import React, { useState } from 'react';

const RestockModal = ({id,quantity}) => {
  const [inputQuantity,setInputQuantity]=useState(0);
  const getInput=(event)=>{
    
    console.log(event.target.value);
  }
 
  const handleRestock=(i,q,event)=>{
   
    setInputQuantity(event.target.value);
    console.log(i, q, inputQuantity);


  }
  return (
    <div>
      <label htmlFor="my-modal" className="btn btn-sm btn-primary  text-white ">
        Restock
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box ">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl font-bold text-primary">
                Enter Quantity
              </span>
            </label>
            <input
              type="number"
              placeholder="Quantity"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="modal-action">
            <label
              htmlFor="my-modal"
              onClick={getInput}
              className="btn btn-primary text-white"
            >
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestockModal;