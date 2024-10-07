import React from 'react';

const Tokenomics = () => {
  return (
    <div className="bg-peach min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full border-2 rounded-lg shadow-md p-6 text-center">
        {/* <h1 className="text-3xl font-bold mb-4 text-amber-600 tracking-widest">TOKENOMICS</h1> */}
        
        <div className="bg-orange-400 text-white font-semibold py-2 px-4 rounded-md mb-2">
          <p className=' txt-s text-3xl'>Token Name: $NEIROH</p>
        </div>

        <div className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-md mb-2">
          <p className=' txt-s text-3xl font-dream'>Chain: Solana</p>
        </div>

        <div className="bg-[#cda979] text-white font-semibold py-2 px-4 rounded-md mb-2">
          <p className=' txt-s text-2xl font-dream'>Total Supply: 100,000,000,000 </p>
        </div>

        <div className="bg-red-400 text-white font-semibold py-2 px-4 rounded-md mb-2">
          <p className=' txt-s text-3xl font-dream'>LP Burned Forever</p>
        </div>

        <div className="bg-green-400 text-white font-semibold py-2 px-4 rounded-md mb-2">
          <p className=' txt-s text-3xl font-dream'>Contract Renounced</p>
        </div>

        <div className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mb-6">
          <p className=' txt-s text-3xl font-dream'>100% LP</p>
        </div>

        <div className="bg-gray-100 p-2 rounded-md">
          <p className="text-sm text-gray-500">Token Contract</p>
          <p className="text-base font-mono bg-gray-200 p-2 rounded-md mt-1 font-dream">
            Coming soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
