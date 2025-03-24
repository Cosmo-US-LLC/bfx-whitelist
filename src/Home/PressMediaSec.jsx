import React from "react";
import { useTranslation } from "react-i18next";

import medai1 from "../assets/Press&Media/medicn (3).svg";
import medai2 from "../assets/Press&Media/medicn (2).svg";
import medai3 from "../assets/Press&Media/medicn (1).svg";

function PressMediaSec() {
  const { t } = useTranslation();
  
  return (
    <div className="py-[50px] bg-[#fff] space-y-[35px] px-[62px]">
      <div className="max-w-[1076px] relative space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            {t("pressMedia.title")}
          </h3>
        </div>
        <div className="flex gap-x-4 justify-center">
          <div className="bg-[#FAFAFA] max-w-[311px] rounded-[8px] px-[17.6px] py-[37px] w-[100%] ">
            <div className="space-y-[25px]">
              <div className="flex items-center justify-center h-[30px]">
                <img 
                  loading="lazy" 
                  src={medai1 || "/placeholder.svg"} 
                  className="h-[30px]" 
                  alt={t("pressMedia.quotes.first.logoAlt")} 
                />
              </div>
              <p className="text-[13px] text-center leading-[187.5%] font-[400]">
                {t("pressMedia.quotes.first.text")}
              </p>
            </div>
          </div>
          <div className="bg-[#FAFAFA] max-w-[311px] rounded-[8px] px-[17px] py-[37px] w-[100%] ">
            <div className="space-y-[25px]">
              <div className="flex items-center justify-center h-[30px]">
                <img 
                  loading="lazy" 
                  src={medai2 || "/placeholder.svg"} 
                  className="h-[30px]" 
                  alt={t("pressMedia.quotes.second.logoAlt")} 
                />
              </div>
              <p className="text-[13px] text-center leading-[187.5%] font-[400]">
                {t("pressMedia.quotes.second.text")}
              </p>
            </div>
          </div>
          <div className="bg-[#FAFAFA] max-w-[311px] rounded-[8px] px-[17.6px] pt-[37px] pb-[29px] w-[100%] ">
            <div className="space-y-[25px]">
              <div className="flex items-center justify-center h-[30px]">
                <img 
                  loading="lazy" 
                  src={medai3 || "/placeholder.svg"} 
                  className="h-[30px]" 
                  alt={t("pressMedia.quotes.third.logoAlt")} 
                />
              </div>
              <p className="text-[13px] text-center leading-[187.5%] font-[400]">
                {t("pressMedia.quotes.third.text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressMediaSec;
