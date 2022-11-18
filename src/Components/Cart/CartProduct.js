import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CartProduct = ({ data}) => {
console.log(data);
  const [user, loading] = useAuthState(auth);
  const { picture, name, quantity, price,_id } = data;
  const handleDelete=(id)=>{
     fetch(`http://localhost:5000/cartproduct/${id}`, {
       method: "DELETE",
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
       });

  }
  return (
    <div className="card card-side  shadow-xl h-28 lg:w-1/2 mx-auto my-5 bg-base-100 border border-primary ">
      <figure>
        <img
          className="h-24 w-32  rounded-2xl pl-2 py-1"
          src={picture}
          alt="Movie"
        />
      </figure>
      <div className="card-body pt-5 relative ">
        <div className="">
          <h2 className="font-bold text-xl">{name}</h2>
          <span className="  font-bold">Price:{price}</span>
        </div>

        <div className="flex justify-end items-center pt-2 pr-2 absolute top-0 right-0">
          <label htmlFor="my-modal" className="btn btn-outline ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Are You Sure?</h3>

          <div className="modal-action">
            <label
              onClick={() => handleDelete(_id)}
              htmlFor="my-modal"
              className="btn"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;