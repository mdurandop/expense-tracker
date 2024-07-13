import React from "react";
import BottomNav from "./BottomNav";
import Transactions from "./Transactions";

const Container = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-80 border border-black border-solid h-screen relative flex justify-center items-center">
        <div className="flex flex-col w-full gap-4 absolute top-0 mt-4">
          <div className="flex justify-between mx-4">
            <h1 className="font-bold text-xl">Recent Transaction</h1>
            <p className="bg-blue-100 px-4 py-1 rounded-full text-blue-500 font-semibold">See All</p>
          </div>
          <Transactions />
          <Transactions />
          <Transactions />
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

export default Container;
