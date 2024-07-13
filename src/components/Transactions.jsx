import React from "react";

const Transactions = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex justify-between mx-4 items-center">
        <div className="flex gap-3 items-center">
          <img src="icons/food.png" alt="" />
          <div className="flex flex-col">
            <p className="font-bold">Food</p>
            <p className="text-gray-700">Buy ramen</p>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full items-center">
          <p className="text-red-600 font-bold">- $32</p>
          <p className="text-gray-800">07:30</p>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
