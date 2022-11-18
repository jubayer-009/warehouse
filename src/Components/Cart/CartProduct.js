import React from 'react';

const CartProduct = ({data}) => {
  const {picture,name,quantity}=data
  return (
    <div className="card card-side bg-base-100 shadow-xl h-28 lg:w-1/2 mx-auto ">
      <figure>
        <img className='h-24 w-24' src={picture} alt="Movie" />
      </figure>
      <div className="card-body pt-5">
        <div>
          <h2 className="font-bold text-3xl">{name}</h2>
        </div>
        <div className="flex justify-start">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span className="px-10 text-xl font-bold">5</span>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;