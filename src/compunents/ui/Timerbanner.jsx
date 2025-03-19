import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

const Timerbanner = () => {
  const { t } = useTranslation();
  const targetDate = new Date("March 30, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
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
      <h2 className="text-[16px] leading-[100%] font-[700]"> {t("timer_banner.presale_starts_in")}</h2>
      <h3 className="text-[16px] font-[700]">
            {timeLeft.days} <span className="text-[14px] font-[400] pr-4">{t("timer_banner.days")}</span>
            {timeLeft.hours} <span className="text-[14px] font-[400] pr-4">{t("timer_banner.hours")}</span>
            {timeLeft.minutes} <span className="text-[14px] font-[400] pr-4">{t("timer_banner.minutes")}</span>
            {timeLeft.seconds} <span className="text-[14px] font-[400]">{t("timer_banner.seconds")}</span>
          </h3>
      <button
     onClick={(e) => handleScroll(e, "join-whitelist", 60)}
       className="w-[120px] h-[26px] font-[700] bg-[#E5AE00] text-[10px] border border-[#000] rounded-[8px]">Join Whitelist Now</button>
    </div>
   </div>
   <div className=" bg-[#E5AE00] w-[100%] h-[50px] 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex items-center  fixed z-[999] bottom-0">
   <div className="max-w-[677px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%] mx-auto flex items-center justify-between">
   <div className="space-y-[-2px]">
   <h2 className="text-[14px] font-[700] leading-[16px]">{t("timer_banner.presale_starts_in")}</h2>
   <h3 className="text-[14px] font-[700] leading-[16px] pt-1">
              {timeLeft.days} <span className="text-[10px] font-[400] pr-2">{t("timer_banner.days")}</span>
              {timeLeft.hours} <span className="text-[10px] font-[400] pr-2">{t("timer_banner.hours")}</span>
              {timeLeft.minutes} <span className="text-[10px] font-[400] pr-2">{t("timer_banner.minutes")}</span>
              {timeLeft.seconds} <span className="text-[12px] font-[400]">{t("timer_banner.seconds")}</span>
            </h3>
   </div>
    <button className="w-[110px] h-[26px] font-[700] bg-[#E5AE00] text-[10px] border border-[#000] rounded-[8px]"
    onClick={(e) => handleScroll(e, "join-whitelist", 60)}
    >Join Whitelist Now</button>
  </div>
 </div>
 </>
  );
};

export default Timerbanner;