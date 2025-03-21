import React from "react";
import stars from "../assets/herosection/stars.webp";
import herogif from "../assets/herosection/hero.gif";
// import heroVideo from "../assets/herosection/heroVideo.webm";

function Herosection() {
  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <div className="pt-[50px] pb-[20px] bg-[#FFF]">
      <div className="max-w-[1200px]  w-[100%] mx-auto ">
        <div className="flex justify-start space-x-2 items-center">
         <div className="max-w-[505px] w-[100%]">
         <div className="space-y-[10px]">
            <h4 className="text-[18px]  leading-[144.444%] font-[400] text-start text-[#000] tracking-[-1px] capitalize">
              Blockchain Meets Global Financial Markets
            </h4>
            <h2 className=" text-[45px] font-[700] leading-[120%] tracking-[-1px] text-[#000] text-start">
              The First Crypto <br /> Trading Super App
            </h2>
            <p className="text-[14px] max-w-[840px] w-[100%] mx-auto font-[400] leading-[150%] text-start text-[#000] tracking-[-0.32px] ">BlockchainFX is the only crypto native trading platform that provides instant access to the world’s largest financial markets. Users can trade crypto, forex, stocks, ETFs, futures, options, bonds, indices, CFDs, and more, all in one place. As a community driven ecosystem, BFX token holders earn USDT fees whenever someone trades on the app.
            </p>
          </div>
          <div className="flex justify-start pt-[20px] pb-[0px] items-center space-x-[17px]">
            <a
              href="https://forms.gle/MqeUsLeJPwxt4gfC7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                 
                className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[158px] w-[100%] h-[39px]"
              >
                Join the Whitelist
              </button>
            </a>
            <a
              href="https://blockchainfx.com/BFX-Whitepaper.pdf"
              className="!w-[138px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hover:text-white hover:bg-[#E5AE00] px-[12px] text-black bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px] !w-[100%] h-[39px]">
                Whitepaper
              </button>
            </a>
          </div>
          <div className="flex items-center justify-start pt-[20px] space-x-3">
            <p className="text-[#000] font-[400] text-[14px]">Rated by Users</p>
            <div className="flex items-center space-x-2">
              <img className="w-[84px]" src={stars} alt="" />
              <p className="text-[#3E3E3E] font-[400] text-[14px]">4.79/5 </p>
            </div>
          </div>
         </div>
          <div className="flex justify-end max-w-[619px]">
            <img src={herogif} className="max-h-[450px]" alt="" />
            {/* <video
              width={600}
              height={450}
              className="max-h-[450px]"
              muted
              autoPlay="autoplay"
              preload="auto"
              playsInline
              loop
            >
              <source src={heroVideo} type="video/webm" />
            </video> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
