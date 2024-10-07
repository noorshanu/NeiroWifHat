import React from 'react'
import Tokenomics from './Tokenomics'

function TokenInfo() {
  return (
    <>
    
    <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-center lg:space-x-10 font-little">
          <div className="" data-aos="fade-right" data-aos-duration="1500">
            {/* <p className="text-[52px] leading-[50px] mb-5">
              Token <br/>
              Information
            </p>
            <ul className="flex flex-col space-y-4">
              <li className="bg-[#f4dc75] justify-between space-x-10 items-center p-2 rounded-[20px] border-2 px-5 border-black flex">
                <p className="font-bold text-[36px]">Token Name</p>
                <p className="text-[24px]">$BNEIRO</p>
              </li>
              <li className="bg-[#f4dc75] justify-between items-center p-2 rounded-[20px] border-2 px-5 border-black flex">
                <p className="font-bold text-[36px]">NETWORK</p>
                <p className="text-[24px]">SOLANA</p>
              </li>
              <li className="bg-[#f4dc75] justify-between items-center p-2 rounded-[20px] border-2 px-5 border-black flex">
                <p className="font-bold text-[36px]">NO TAX</p>
                <p className="text-[24px]">0/0</p>
              </li>
            </ul> */}
            <Tokenomics/>
          </div>
          <div className="" data-aos="fade-left" data-aos-duration="1500">
            <img src="images/lambo.jpeg" alt="" className=' rounded-2xl h-[450px]' />
            
          </div>
        </div>
    
    </>
  )
}

export default TokenInfo