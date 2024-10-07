import AboutUs from "./components/AboutUs";
import BorderSec from "./components/BorderSec";
import ChooseHero from "./components/ChooseHero";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToBuy from "./components/HowToBuy";
import Navbar from "./components/Navbar";
import Taxs from "./components/Taxs";

function App() {
  return (
    <>
      <div className=" relative overflow-x-hidden">
        <div className=" main-bg">
          <Navbar />
          <Hero />
        </div>
        {/* <BorderSec /> */}
        <AboutUs />

        <div className=" relative flex flex-col sm:flex-row justify-evenly items-center gap-8 py-[2%]  ">
          <div className="bg-[#7e419c] font-little text-center text-[40px] lg:text-[100px] flex justify-center items-center z-30 -bottom-[100px]  h-[140px] border-y-4 border-black absolute w-[calc(100vw+100px)]  lg:w-[1600px]">
            <p className=" text-white txt-s">Tokenomics</p>
          </div>
        </div>
        <Taxs />
        {/* <ChooseHero /> */}

        <div className=" relative flex flex-col sm:flex-row justify-evenly items-center gap-8 py-[2%]  ">
          <div className="bg-[#7e419c] font-little w-[calc(100vw+100px)]  text-center text-[40px] lg:text-[100px]  flex justify-center items-center z-30 top-0  h-[140px] border-y-4 border-black absolute ">
            <p className="text-white txt-s">How To Buy $NEIROH</p>
          </div>
        </div>
        <HowToBuy />

        <div>
          <BorderSec />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
