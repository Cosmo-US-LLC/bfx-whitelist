"use client"

import React from "react";
import { useTranslation } from "react-i18next";
import graph from "../assets/LessThanSec/Frame 1410125779 (1).png";

function LessThanSec() {
  const { t } = useTranslation();

  return (
    <div className="pt-[50px] pb-[50px] bg-[#fff]">
      <div className="max-w-[1200px] space-y-[50px] w-[100%] mx-auto ">
        <div className="space-y-[18px]">
          <h3 className="text-[30px] capitalize font-[700] text-center leading-[58px] text-[#181A20] tracking-[-1px]">
            {t("LessThanSec.title")}
          </h3>
          <p className="text-[14px] font-[400] w-[890px] mx-auto text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
            {t("LessThanSec.description")}
          </p>
        </div>
        <div className="space-y-[60px]">
          <div className="relative">
            <div className="flex justify-center">
              <img src={graph || "/placeholder.svg"} loading="lazy" alt={t("LessThanSec.graphAlt")} className="h-[321px] w-[321px]" />
            </div>
            <p className="text-[#6F6F6F] -top-3 left-[28%] absolute text-[15px] font-[700] tracking-[-0.787px]">
              {t("LessThanSec.labels.bonds")}
            </p>
            <p className="text-[#6F6F6F] absolute top-[8%] left-[20%] text-[15px] font-[700] tracking-[-0.787px]">
              {t("LessThanSec.labels.stocks")}
            </p>
            <p className="text-[#6F6F6F] absolute top-[21%] left-[17%] text-[15px] font-[700] tracking-[-0.787px]">
              {t("LessThanSec.labels.commodities")}
            </p>
            <p className="text-[#6F6F6F] absolute top-[35%] left-[19%]  text-[15px] font-[700] tracking-[-0.787px]">
              {t("LessThanSec.labels.crypto")}
            </p>
            <p className="text-[#6F6F6F] absolute bottom-[5%] right-[23%]  text-[15px] font-[700] tracking-[-0.787px]">
              {t("LessThanSec.labels.forex")}
            </p>
          </div>
          <div className="max-w-[887px] pt-[0px] flex justify-between items-center mx-auto w-[100%]">
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#E9AD2F] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[16.7px] font-[700] tracking-[-1px] ">
                {t("LessThanSec.legend.forex")}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#DCDCDC] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[16.7px] font-[700] tracking-[-1px] ">
                {t("LessThanSec.legend.bonds")}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#B6B6B6] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[16.7px] font-[700] tracking-[-1px] ">
                {t("LessThanSec.legend.stocks")}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#7DBB6C] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[16.7px] font-[700] tracking-[-1px] ">
                {t("LessThanSec.legend.commodities")}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-[30px] h-[30px] bg-[#A36E00] rounded-[4px]"></div>
              <p className="text-[#181A20] text-[16.7px] font-[700] tracking-[-1px] ">
                {t("LessThanSec.legend.crypto")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessThanSec;
