import React from "react";
import fobicn from "../assets/herosection/forbes-ar21 1.svg";
import herobnr2 from "../assets/herosection/bnrhero (8).svg";
import herobnr3 from "../assets/herosection/bnrhero (6).svg";
import herobnr4 from "../assets/herosection/bnrhero (7).svg";
import herobnr5 from "../assets/herosection/bnrhero (2).svg";
// import heroVideo from "../assets/herosection/heroVideo.webm";
import stars from "../assets/herosection/stars.webp";
import herogif from "../assets/herosection/hero.gif";


// import heroVideo from "../assets/herosection/heroVideo.webm";

function MobileHero() {

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    }, 200); 
  };

  return (
    <div className="pt-[22px] pb-[2rem] bg-[#FFFFFF]">
      <div className="w-[90%] mx-auto ">
        <div className="space-y-[20px]">
          <div>
            <h4 className="text-[16px]  leading-[100%] font-[400] text-center text-[#000] tracking-[-1px] capitalize">
              Blockchain Meets Global Financial Markets
            </h4>
            <h2 className="pt-6 pb-8 text-[36px] leading-[120%] font-[700] tracking-[-1px] text-[#000] text-center">
              The First Crypto <br /> Trading Super App
            </h2>
            <p className="text-[15px] max-w-[865px] w-[100%] mx-auto font-[400] leading-[153.667%] text-center text-[#000] tracking-[-0.32px] ">
            BlockchainFX is the only crypto native trading platform that provides instant access to the world’s largest financial markets. Users can trade crypto, forex, stocks, ETFs, futures, options, bonds, indices, CFDs, and more, all in one place. As a community driven ecosystem, BFX token holders earn USDT fees whenever someone trades on the app.
            </p>
          </div>
          <div className="flex justify-center items-center space-x-[17px]">
          <a
              href="https://forms.gle/MqeUsLeJPwxt4gfC7"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button 
             onClick={handleScroll}
            className="text-white bg-[#E5AE00] px-[14px] hover:text-black hover:bg-transparent text-[14px] font-[700] border border-[#E5AE00] hover:border-[#000] rounded-[8px]  h-[48px]">
              Join the waitlist
            </button>
            </a>
            <a href="https://blockchainfx.com/whitepaper.pdf" target="_blank" className="" rel="noopener noreferrer">
            <button className="hover:text-white hover:bg-[#E5AE00] px-[14px] text-black bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px]  h-[48px]">
            Whitepaper
            </button>
              </a>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="flex items-center space-x-2">
            <img className="w-[84px]" src={stars} alt="" />
              <p className="text-[#3E3E3E] font-[400] text-[14px]">4.79/5 </p>
            </div>
            <p className="text-[#000] font-[400] text-[14px]">Rated by Users</p>
          </div>
          <div className="flex justify-center pb-[15px]">
            <img src={herogif} className="max-h-[550px]" alt="" />
            {/* <video
              width={500}
              height={410}
              className="max-h-[550px]"
              muted
              autoPlay="autoplay"
              preload="auto"
              playsInline
              loop
            >
              <source src={heroVideo} type="video/webm" />
            </video> */}
          </div>

          <div className="border rounded-[6px] py-[20px] !mt-[20px] px-[13px]">
            <h3 className="text-center text-[15px] font-[600]">Featured In:</h3>
            <div className="flex justify-center items-center space-x-[9px] mt-[5px]">
              {/* <img className="h-[12px]" src={herobnr1} alt="" /> */}
              <img className="h-[13px]" src={herobnr3} alt="" />
              <img className="h-[12px] " src={herobnr2} alt="" />
              
              <img className="h-[12px]" src={herobnr4} alt="" />
              <img
                className="max-w-[100.25px] h-[11.7px]"
                src={herobnr5}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHero;
