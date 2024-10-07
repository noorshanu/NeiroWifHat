import React from "react";

function Hero() {
  return (
    <section className=" relative   py-20  ">
      <div className=" container-wrapper  ">
        <div className=" flex flex-col sm:flex-row justify-between  ">
          <div
            className=" w-full sm:w-1/2  ml-8 relative"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className=" text-[#ffffff] txt-s text-4xl font-bold font-dream">
              Welcome To
            </h2>

            <h1 className=" txt-s text-[50px] sm:text-[100px] font-bold text-[#b52bf3] font-little stroke-black  ">
              {" "}
              NeiroWifHat
            </h1>

            <p className=" text-white txt-s font-dream text-4xl  pr-5">
            the OG hat-wearing Doge, the real bro of NEIRO!
            </p>

            <p className=" text-xl font-bold mb-8">Memecoin with the most rizz on Solana</p>
            <div  className="bg-[#ffffff] text-[14px] z-30 w-[200px]  rounded-full border-4 px-5 py-[5px] border-black font-semibold sm:w-full">
        BJ2ENyjuBGUQJr6CCDBcGAQNQDbayoNbDziDGrWSQQ4
            </div>
            <div className=" mt-4 flex gap-2 items-start justify-start">
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/HMkxDWjEBUmoojoTrLdEvmwKn9sFe7QRHauyxoYKBBYi?t=1728311916197"
                className="  font-dream box-s2   text-xl text-black bg-[#ffffff] hover:bg-[#f4dc75] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff] w-[150px] sm:w-[200px] text-center font-bold uppercase"
              >
                {" "}
                DexTools
              </a>

              <a
                href="https://t.me/NeiroWifHat_sol"
                className="hidden sm:block  font-dream box-s2   text-xl text-black bg-[#ffffff] hover:bg-[#f4dc75] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff] w-[150px] sm:w-[200px] text-center font-bold uppercase"
              >
                {" "}
              Telegram
              </a>
              <a href="https://www.dextools.io/app/en/solana/pair-explorer/HMkxDWjEBUmoojoTrLdEvmwKn9sFe7QRHauyxoYKBBYi?t=1728311916197" className=" font-dream box-s2   text-xl text-white bg-[#b52bf3] hover:bg-[#f4dc75] rounded-full p-2 border-2 border-[#000]  hover:text-[#000] txt-s w-[150px] sm:w-[200px] text-center font-bold uppercase">
              Buy NEIROH
              </a>
            </div>
          </div>

          <div
            className=" w-full sm:w-1/2"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src="images/hero.png" alt="" className=" mx-auto h-auto " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
