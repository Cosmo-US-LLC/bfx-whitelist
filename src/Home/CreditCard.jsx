import React from "react";
import creditVideo from "../assets/CreditCard/cred.mp4";


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
    <div className="pt-[20px] pb-[50px]">
      <div className="max-w-[1200px]  min-h-[480px] p-[30px] border border-[#B0B0B0] w-[100%] space-y-[30px] mx-auto rounded-[13px]">
      <div className=" space-x-[2rem] flex justify-between  items-center  bg-[#fff]">
          <div className="w-[54%] flex items-center justify-center border border-[#9D9D9D] min-h-[460px] bg-[#F3F3F3] rounded-[11px]">
            <video width="380" className="!rounded-[11px]" height="260" playsinline  controls={false} autoPlay muted loop>
             <source src={creditVideo} type="video/mp4" />
           </video>
          </div>
          <div className="w-[45%] p-[40px] border border-[#9D9D9D] min-h-[460px] bg-[#F3F3F3] rounded-[11px] space-y-[20px]">
            <h3 className="text-[20.86px] text-center capitalize font-[700] leading-[128%] text-[#181A20] tracking-[-1px]">
            BFX Credit Card
            </h3>
            <ul className="list-disc">
              <li className="text-[16px] border-b ml-6 py-[8px] font-[500] ">Unlimited spending / No limits </li>
              <li className="text-[16px] border-b ml-6 py-[8px] font-[500] ">Metal or 18 / 24 karat gold plated cards </li>
              <li className="text-[16px] border-b ml-6 py-[8px] font-[500] ">10,000 USD monthly ATM withdrawal limit </li>
              <li className="text-[16px] border-b ml-6 py-[8px] font-[500] ">Up to 100,000 USD per single transaction  </li>
              <li className="text-[16px] border-b ml-6 py-[8px] font-[500] ">Top up with BFX and more than 20+ crypto </li>
              <li className="text-[16px] border-b ml-6 py-[8px] font-[500] ">BFX and USDT daily rewards available to pay </li>
              <li className="text-[16px] border-b ml-6 py-[8px] font-[500] ">Accepted at 250 Million Merchant Worldwide </li>
              <li className="text-[16px] border-b ml-6 py-[8px] font-[500] ">Cards are exclusively available during BFX presale </li>
            </ul>
          </div>
        </div>
           <div className="">
            <p className="text-[10px] text-center max-w-[816px] mx-auto tracking-[-0.32px] leading-[230%] font-[400] ">Shipping will begin once the BFX presale ends, as all cards will be sent out simultaneously.  Every BFX Founder’s Club member will receive a secure form after the presale to submit their shipping details. Cards will be delivered worldwide via DHL or FedEx Express. </p>
           </div>
      </div>
    </div>
  );
}

export default CreditCard;
