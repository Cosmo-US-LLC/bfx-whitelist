import React, { useEffect, useRef } from "react";
import creditVideo from "../assets/CreditCard/cred.mp4";

function CreditCardMob() {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("muted", "");
      video.play().catch((error) => {
        console.log("Autoplay failed. Error:", error);
      });
    }
  }, []);

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 80;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <div className="pt-[24px] pb-[24px]">
      <div className="pt-[14px] pb-[31px] px-[15px] space-y-[20px]  w-[90%] mx-auto bg-[#fff]">
      
        <div className="w-[100%] p-[40px] border border-[#9D9D9D] min-h-[460px] bg-[#F3F3F3] rounded-[11px] space-y-[20px]">
            <h3 className="text-[20.86px] text-center capitalize font-[700] leading-[128%] text-[#181A20] tracking-[-1px]">
            BFX Credit Card
            </h3>

            <div className="w-[100%] items-center flex justify-center rounded-[8px]">
          <video
            width="300"
            height="260"
            className="!rounded-[8px]"
            controls
            autoPlay
            playsinline 
            muted
            loop
          >
            <source src={creditVideo} type="video/mp4" />
          </video>
        </div>

            <ul className="list-disc">
              <li className="text-[15px] border-b ml-3 py-[8px] font-[500] ">Unlimited spending / No limits </li>
              <li className="text-[15px] border-b ml-3 py-[8px] font-[500] ">Metal or 18 / 24 karat gold plated cards </li>
              <li className="text-[15px] border-b ml-3 py-[8px] font-[500] ">10,000 USD monthly ATM withdrawal limit </li>
              <li className="text-[15px] border-b ml-3 py-[8px] font-[500] ">Up to 100,000 USD per single transaction  </li>
              <li className="text-[15px] border-b ml-3 py-[8px] font-[500] ">Top up with BFX and more than 20+ crypto </li>
              <li className="text-[15px] border-b ml-3 py-[8px] font-[500] ">BFX and USDT daily rewards available to pay </li>
              <li className="text-[15px] border-b ml-3 py-[8px] font-[500] ">Accepted at 250 Million Merchant Worldwide </li>
              <li className="text-[15px] border-b ml-3 py-[8px] font-[500] ">Cards are exclusively available during BFX presale </li>
            </ul>
          </div>
       
        <div className="flex justify-center">
          <a
            href="https://forms.gle/MqeUsLeJPwxt4gfC7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[158px] w-[100%] h-[40px]"
              onClick={handleScroll}
            >
              Join Whitelist Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreditCardMob;
