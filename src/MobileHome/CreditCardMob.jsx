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
            <h3 className="text-[30px] text-center capitalize font-[700] leading-[128%] text-[#181A20] tracking-[-1px]">
            BFX Visa Card
            </h3>

            <div className="w-[100%] p-[20px] border border-[#9D9D9D] bg-[#F3F3F3] rounded-[11px] items-center flex justify-center flex-col space-y-5 rounded-[8px]">
          <video
            width="300"
            height="260"
            className="!rounded-[8px]"
            autoPlay
            playsInline 
            muted
            loop
          >
            <source src={creditVideo} type="video/mp4" />
          </video>
          <div className="flex justify-center space-x-3 items-center">
          <h4 className="text-[14px]  font-[400] leading-[100%]">Compatible with</h4>
          <button className="w-[70.2px] h-[30px] hover:opacity-[0.7] flex justify-center items-center rounded-[4.8px] border border-[#000]"><img src={applepay} alt="" /></button>
          <button className="w-[70.2px] h-[30px] hover:opacity-[0.7] flex justify-center items-center rounded-[4.8px] border border-[#000]"><img src={googlelepay} alt="" /></button>
          </div>
        </div>

            <ul className="list-disc p-[30px] border border-[#9D9D9D] bg-[#F3F3F3] rounded-[11px]">
              <li className="text-[14px] border-b ml-3 py-[8px] font-[500] ">Unlimited Spending </li>
              <li className="text-[14px] border-b ml-3 py-[8px] font-[500] ">Metal or 18 Karat Gold Card</li>
              <li className="text-[14px] border-b ml-3 py-[8px] font-[500] ">Up to $100,000 per Transaction</li>
              <li className="text-[14px] border-b ml-3 py-[8px] font-[500] ">Up to $10K Monthly ATM Withdrawals </li>
              <li className="text-[14px] border-b ml-3 py-[8px] font-[500] ">Use BFX and USDT Rewards for Payments </li>
              <li className="text-[14px] border-b ml-3 py-[8px] font-[500] ">Accepted Worldwide (Online & In-Stores) </li>
              <li className="text-[14px] border-b ml-3 py-[8px] font-[500] ">Top Up with BFX and 20+ Crypto</li>
              <li className="text-[14px]  ml-3 pt-[8px] font-[500] ">BFX Visa Card Only Available in Presale</li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-[400] text-center leading-[150%]">Shipping will begin once the BFX presale ends, as all cards will be sent out simultaneously.  Every BFX Founder’s Club member will receive a secure form after the presale to submit their shipping details. Cards will be delivered worldwide via DHL or FedEx Express. </p>
          </div>
      </div>
    </div>
  );
}

export default CreditCardMob;
