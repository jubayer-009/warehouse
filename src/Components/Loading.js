import React from 'react';
import loader from '../images/loadergif.gif';

const Loading = () => {
  return (
    <div className='flex justify-center'>
      <img src={loader} alt="" />
    </div>
  );
};

export default Loading;