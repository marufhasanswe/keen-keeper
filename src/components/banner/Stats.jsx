import React from "react";

const Stats = () => {
  return (
    <div className="container mx-auto grid md:grid-cols-4 gap-6 my-10 p-4 md:p-0">
      <div className="text-center p-8 bg-white shadow">
        <h2 className="text-3xl font-semibold text-[#244D3F]">10</h2>
        <p className="text-lg text-[#64748B] mt-2">Total Friends</p>
      </div>
      <div className="text-center p-8 bg-white shadow">
        <h2 className="text-3xl font-semibold text-[#244D3F]">3</h2>
        <p className="text-lg text-[#64748B] mt-2">On Track</p>
      </div>
      <div className="text-center p-8 bg-white shadow">
        <h2 className="text-3xl font-semibold text-[#244D3F]">6</h2>
        <p className="text-lg text-[#64748B] mt-2">Need Attention</p>
      </div>
      <div className="text-center p-8 bg-white shadow">
        <h2 className="text-3xl font-semibold text-[#244D3F]">12</h2>
        <p className="text-lg text-[#64748B] mt-2">Interactions This Month</p>
      </div>
    </div>
  );
};

export default Stats;
