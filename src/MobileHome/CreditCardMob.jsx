import React, { useEffect, useRef } from "react";
import creditVideo from "../assets/CreditCard/cred.mp4";
import applepay from "../assets/CreditCard/btnsvg (2).svg";
import googlelepay from "../assets/CreditCard/btnsvg (1).svg";

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
      <div className=" px-[15px] space-y-[20px]  w-[90%] mx-auto bg-[#fff]">
      
        <div className="w-[100%]  min-h-[460px]  space-y-[20px]">
            <h3 className="text-[20.86px] text-center capitalize font-[700] leading-[128%] text-[#181A20] tracking-[-1px]">
            BFX Credit Card
            </h3>

            <div className="w-[100%] p-[20px] border border-[#9D9D9D] bg-[#F3F3F3] rounded-[11px] items-center flex justify-center rounded-[8px]">
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

            <ul className="list-disc p-[30px] border border-[#9D9D9D] bg-[#F3F3F3] rounded-[11px]">
              <li className="text-[14px] border-b ml-3 py-[8px] font-[500] ">Unlimited spending / No limits </li>
              <li className="text-[14px] border-b ml-3 py-[8px] font-[500] ">Metal or 18 / 24 karat gold plated cards </li>
              <li className="text-[14px] border-b ml-3 py-[8px] font-[500] ">10,000 USD monthly ATM withdrawal limit </li>
              <li className="text-[14px] border-b ml-3 py-[8px] font-[500] ">Up to 100,000 USD per single transaction  </li>
              <li className="text-[14px] border-b ml-3 py-[8px] font-[500] ">Top up with BFX and more than 20+ crypto </li>
              <li className="text-[14px] border-b ml-3 py-[8px] font-[500] ">BFX and USDT daily rewards available to pay </li>
              <li className="text-[14px] border-b ml-3 py-[8px] font-[500] ">Accepted at 250 Million Merchant Worldwide </li>
              <li className="text-[14px]  ml-3 pt-[8px] font-[500] ">Cards are exclusively available during BFX presale </li>
            </ul>
          </div>
          <div>
            <p className="text-[14px] font-[400] text-center leading-[150%]">Shipping will begin once the BFX presale ends, as all cards will be sent out simultaneously.  Every BFX Founder’s Club member will receive a secure form after the presale to submit their shipping details. Cards will be delivered worldwide via DHL or FedEx Express. </p>
          </div>
          <div className="flex justify-center space-x-3">
          <button className="w-[70.2px] h-[30px] hover:opacity-[0.7] flex justify-center items-center rounded-[4.8px] border border-[#000]"><img src={applepay} alt="" /></button>
          <button className="w-[70.2px] h-[30px] hover:opacity-[0.7] flex justify-center items-center rounded-[4.8px] border border-[#000]"><img src={googlelepay} alt="" /></button>
          </div>
      </div>
    </div>
  );
}

export default CreditCardMob;
