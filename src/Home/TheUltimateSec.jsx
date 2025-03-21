import React from "react";

import logo from "../assets/TheUltimateSec/logo.svg";

function TheUltimateSec() {

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
    <div className="flex bgtheylt">
      <div className="max-w-[717px] min-h-[480px] max-h-[480px] flex items-center justify-center w-[100%] mx-auto  ">
      <div className="">
            <div className="flex justify-center pb-[20px]">
            <img src={logo} loading="lazy" className="h-[44.54px]" alt="" />
            </div>
            <h3 className="text-[45px] text-[#fff] font-[700] text-center leading-[117.143%] text-[#181A20] tracking-[-1px]">
           The Ultimate <br/> Trading Platform
            </h3>
            <div className="flex justify-center items-center pt-[35px] space-x-[17px]">
            <a
              href="https://forms.gle/MqeUsLeJPwxt4gfC7"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button 
             
            className="text-white bg-[#E5AE00]  hover:text-[#FFF] hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#fff] rounded-[8px] max-w-[164px] px-4 w-[100%] h-[39px]">
              Join the Whitelist
            </button>
            </a>
            <a href="https://trade.blockchainfx.io/traderoom" target="_blank" rel="noopener noreferrer" className="w-[160px]">
            <button className="hover:text-white hover:bg-[#E5AE00]  text-[#FFF] bg-transparent text-[14px] font-[500]  border hover:border-[#E5AE00] border-[#fff] rounded-[8px] !max-w-[160px] w-[100%] h-[39px]">
            Start Trading (Beta)
            </button>
            </a>
          </div>
          </div>
      </div>
    </div>
  );
}

export default TheUltimateSec;
