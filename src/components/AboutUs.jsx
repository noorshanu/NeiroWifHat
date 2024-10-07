

function AboutUs() {
  return (
    <section
      className="-mt-0 sm:pt-0 pt-3 sm:-mt-2 relative overflow-hidden"
      id="about"
    >
      <img
        src="images/coin.png"
        alt=""
        className=" absolute  bottom-28   right-64 mx-auto h-[190px] "
      />

      <div className=" container-wrapper  pb-5">
        <div className="relative  my-2  ">
          <div className=" flex justify-between flex-col-reverse sm:flex-row items-center ">
            <div className=" w-full sm:w-1/2">
              <img src="images/tax.png" alt="" className=" floating" />
            </div>

            <div className=" w-full sm:w-1/2 ">
              <div className="bg-[#7e419c] border-4 box-s2 rounded-2xl border-black py-2 max-w-sm mx-auto px-2 ">
                <h1 className="text-center font-bold text-xl text-white">
                  NeiroWifHat – the OG hat-wearing Doge, the real bro of NEIRO!
                  <br />
                </h1>
              </div>

              <div className=" bg-white border-4 box-s2 rounded-2xl border-black py-8 max-w-sm mx-auto px-2">
                <h1 className="txt-s text-[28px] font-bold text-[#7e419c] font-little stroke-black text-center">
                  WHO IS NEIROH YOU ASK
                </h1>
                <p className=" mx-auto text-center px-2 text-base font-medium  text-black">
                NEIROH is  Leading the Neiro Army like an absolute boss: Bulls? Bears?
                  HA! It’s all about memes and fueled by Lambo dreams, bro! The
                  grind? Simple—laugh our way straight to the moon, in pure
                  alpha style. VROOOOOM! 🏎️💨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
