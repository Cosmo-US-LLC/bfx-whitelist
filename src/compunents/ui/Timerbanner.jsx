import React, { useState, useEffect } from "react";

const Timerbanner = () => {
  const targetDate = new Date(Date.UTC(2025, 2, 30, 17, 0, 0)).getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (event, targetId, offset = 0) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    } else {
      console.error(`Element with ID "${targetId}" not found.`);
    }
  };
  return (
    <>
      <div className=" bg-[#E5AE00] 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden w-[100%] h-[37px]  items-center  fixed z-[999] top-0">
        <div className="max-w-[677px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] mx-auto flex items-center justify-between">
          <h2 className="text-[16px] leading-[100%] font-[700]">
            BFX Presale starts in
          </h2>
          <h3 className="text-[16px] font-[700]">
            {timeLeft.days}{" "}
            <span className="text-[14px] font-[400] pr-4">Days</span>{" "}
            {timeLeft.hours}{" "}
            <span className="text-[14px] font-[400] pr-4">Hours</span>{" "}
            {timeLeft.minutes}{" "}
            <span className="text-[14px] font-[400] pr-4">Mins</span>{" "}
            {timeLeft.seconds}{" "}
            <span className="text-[14px] font-[400]">Secs</span>
          </h3>
          <button
            onClick={(e) => handleScroll(e, "join-whitelist", 60)}
            className="w-[120px] h-[26px] font-[700] bg-[#E5AE00] text-[10px] border border-[#000] rounded-[8px]"
          >
            Join the Whitelist
          </button>
        </div>
      </div>
      <div className=" bg-[#E5AE00] w-[100%] h-[50px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex items-center  fixed z-[999] bottom-0">
        <div className="max-w-[677px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[94%] mx-auto flex items-center justify-between">
          <div className="space-x-[10px] flex items-center">
            <h2 className="text-[10px] font-[700] leading-[16px]">
              BFX Presale starts in
            </h2>
            <h3 className="text-[10px] font-[700] leading-[16px]">
              {timeLeft.days}{" "}
              <span className="text-[8px] font-[400] pr-2">Days</span>{" "}
              {timeLeft.hours}{" "}
              <span className="text-[8px] font-[400] pr-2">Hours</span>{" "}
              {timeLeft.minutes}{" "}
              <span className="text-[8px] font-[400] pr-2">Mins</span>{" "}
              {timeLeft.seconds}{" "}
              <span className="text-[8px] font-[400]">Secs</span>
            </h3>
          </div>
          <button
            className="w-[95px] h-[26px] font-[700] bg-[#E5AE00] text-[8px] border border-[#000] rounded-[8px]"
            onClick={(e) => handleScroll(e, "join-whitelist", 60)}
          >
            Join the Whitelist
          </button>
        </div>
      </div>
    </>
  );
};

export default Timerbanner;
