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
        <div className="w-[100%] max-w-[521px] space-y-[20px]">
          <h3 className="text-[30px] capitalize font-[700] leading-[114%] text-[#181A20] tracking-[-1px] text-center">
            BFX Credit Card
          </h3>
          <p className="text-[15px] max-w-[330px] mx-auto text-[#181A20] font-[400] leading-[153.333%] tracking-[-0.32px] text-center">
            $BFX is the first cryptocurrency to offer daily USDT staking rewards
            from every trade made on an international multi-asset trading
            platform. $BFX holders earn returns based on their holdings. The
            more $BFX you hold, the more USDT you earn.
          </p>
        </div>
        <div className="w-[100%] items-center flex justify-center min-h-[333px] rounded-[8px]">
          <video
            width="640"
            height="660"
            className="!rounded-[8px]"
            controls={false}
            autoPlay
            playsinline 
            muted
            loop
          >
            <source src={creditVideo} type="video/mp4" />
          </video>
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
