import React from "react";

import eranimg from "../assets/EarnOnSec/video.webm";

function CreditCard() {
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
    <div className="pt-[20px] pb-[50px] ">
      <div className="max-w-[1200px]  min-h-[454px] p-[30px] border border-[#B0B0B0] rounded-[13px] space-x-[4rem] flex justify-between  items-center w-[100%] mx-auto bg-[#fff]">
          <div className="w-[50%] h-[410px] bg-[#F3F3F3] rounded-[11px]">
           
          </div>
          <div className="max-w-[410px] w-[50%] !mr-auto space-y-[20px]">
            <h3 className="text-[30px] capitalize font-[700] leading-[128%] text-[#181A20] tracking-[-1px] text-start">
            BFX Credit Card
            </h3>
            <p className="text-[14px] text-[#181A20] font-[400] leading-[161.598%] max-w-[457px] text-start">
            Enjoy limitless trading opportunities, like exchanging Gold for BTC  or swapping ETH for Nvidia stock instantly without multiple brokers. Traditionally, converting crypto into other assets required separate exchanges, extra fees, and long wait times. BlockchainFX streamlines everything in one place, making trading faster, easier, and more convenient than ever.
            </p>
            <a
              href="https://forms.gle/MqeUsLeJPwxt4gfC7"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button 
            onClick={handleScroll}
            className="text-white bg-[#E5AE00] px-[12px] hover:text-black !mt-[15px] hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[161px] w-[100%] h-[39px]">
             Join Whitelist Now
            </button>
            </a>
          </div>
        </div>
    </div>
  );
}

export default CreditCard;
