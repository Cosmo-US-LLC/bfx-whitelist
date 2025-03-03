import React from "react";
  
// import video from "../assets/livedemo/IMG_9925 (1).mp4";
import liveVideo from "../assets/livedemo/live.mp4";

// 'https://www.w3schools.com/html/mov_bbb.mp4'
function LiveDemo() {

  return (
    <div className="pt-[20px] pb-[50px] ">
      <div className="max-w-[1200px]  min-h-[454px] px-[46px] border border-[#B0B0B0] rounded-[13px] w-[100%] mx-auto bg-[#fff] p-[30px] space-y-[1rem]">
        <h3 className="text-center text-[32px] font-[700] leading-[128.889%]">Live Demo</h3>
        <div className="bg-[#F3F3F3] max-w-[1033px] w-[100%] mx-auto min-h-[615px] rounded-[7.491px] border  border-[#B0B0B0] flex items-center justify-center">
        <video width="640" height="660" controls={false} autoPlay muted loop>
  <source src={liveVideo} type="video/mp4" />
</video>
        </div>
        <div className="flex justify-center">
        <a
              href="https://forms.gle/MqeUsLeJPwxt4gfC7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[200px]"
            >
            <button
              className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[200px] w-[100%] h-[39px]"
            >
              Join Whitelist Now
            </button>
            </a>
        </div>
        </div>
    </div>
  );
}

export default LiveDemo;
