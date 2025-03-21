import React from "react";
import { useTranslation } from 'react-i18next';
import liveming from "../assets/LiveNews/liveimg.webp";

function LiveNewSec() {
  const { t } = useTranslation();

  return (
    <div className="py-[50px] bg-[#FFF]">
      <div className="max-w-[934px] w-[100%] mx-auto space-y-[37px]">
        <div className="space-y-[14px]">
          <h3 className="text-[30px] text-center font-[700] leading-[95%] text-[#181A20] tracking-[-1px]">
            {t('liveNewsSec.title')}
          </h3>
          <p className="text-[14px] font-[400] text-center max-w-[660px] mx-auto w-[100%] leading-[130%] text-[#181A20] tracking-[-0.32px]">
            {t('liveNewsSec.description')}
          </p>
        </div>
        <div>
          <img 
            className="object-cover" 
            loading="lazy" 
            src={liveming || "/placeholder.svg"} 
            alt={t('liveNewsSec.imageAlt')} 
          />
        </div>
      </div>
    </div>
  );
}

export default LiveNewSec;
