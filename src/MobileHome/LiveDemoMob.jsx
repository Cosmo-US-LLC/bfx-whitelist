import React from "react";
import liveVideo from "../assets/livedemo/live.mp4";


function LiveDemoMob() {

  return (
    <div className="py-[24px]">
      <div className="max-w-[1200px] p-[20px]  border border-[#B0B0B0] rounded-[13px] w-[90%] mx-auto bg-[#fff] space-y-[1rem]">
        <h3 className="text-center text-[30px] font-[700] leading-[109.375%]">Live BlockchainFX Demo</h3>
        <div className="bg-[#F3F3F3] flex p-2 items-center max-w-[1033px] w-[100%] mx-auto min-h-[230px] rounded-[6px] border  border-[#B0B0B0]">
 <video width="640" height="660" controls autoPlay playsinline  muted loop>
  <source src={liveVideo} type="video/mp4" />
</video>
        </div>
        <div className="flex justify-center">
        <a
              href="https://forms.gle/MqeUsLeJPwxt4gfC7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[161px] h-[40px]"
            >
            <button
              className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[11.657px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[161px] w-[100%] h-[40px]"
            >
              Join Whitelist Now
            </button>
            </a>
        </div>
        </div>
    </div>
  );
}

export default LiveDemoMob;
