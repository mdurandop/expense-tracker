// src/components/BottomNav.jsx
import React from 'react';

const BottomNav = () => {
  return (
    <div className='flex max-w-full bottom-0 gap-4 absolute'>
      <div className='flex flex-col justify-center items-center cursor-pointer'>
        <img src="assets/home.svg" alt="Home Icon" className='w-9'/>
        <p className='text-xs'>Home</p>
      </div>
      <div className='flex flex-col justify-center items-center cursor-pointer'>
        <img src="assets/transaction.svg" alt="Transaction Icon" className='w-9'/>
        <p className='p-opacity text-xs'>Transaction</p>
      </div>
      <div className='flex flex-col justify-center items-center cursor-pointer'>
        <img src="assets/Add.svg" alt="Add Icon" className='w-12 mb-6'/>
      </div>
      <div className='flex flex-col justify-center items-center cursor-pointer'>
        <img src="assets/pie-chart.svg" alt="Pie Chart Icon" className='w-9'/>
        <p className='p-opacity text-xs'>Budget</p>
      </div>
      <div className='flex flex-col justify-center items-center cursor-pointer'>
        <img src="assets/user.svg" alt="User Icon" className='w-9'/>
        <p className='p-opacity text-xs'>Profile</p>
      </div>
    </div>
  );
};

export default BottomNav;
