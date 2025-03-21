"use client"

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import icon1 from "../assets/Gateway/gticons (4).svg";
import icon2 from "../assets/Gateway/gticons (3).svg";
import icon3 from "../assets/Gateway/gticons (2).svg";
import icon4 from "../assets/Gateway/gticons (1).svg";
import cardicon1 from "../assets/Gateway/tblicn (2).svg";
import Iicon from "../assets/Gateway/i.svg";
import cardicon2 from "../assets/Gateway/tblicn (1).svg";

function GatewaySec() {
  const { t } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="py-[50px]">
      <div className="max-w-[1200px] space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[14px]">
          <h3 className="text-[30px] capitalize font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            {t("GatewaySec.title")}
          </h3>
          <p className="text-[14px] font-[400] max-w-[790px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
            {t("GatewaySec.subtitle")}
          </p>
        </div>
        <div className="max-w-[1025px] mx-auto flex justify-between itees-center ">
          <div className="max-w-[267px] w-[100%]">
            <ul className="max-w-[267px] w-[100%]">
              <li className="h-[83px]"></li>
              <li className="flex space-x-3 px-[18px] items-center h-[65px]">
                <div className="w-[65px]">
                  <img loading="lazy" src={icon1 || "/placeholder.svg"} alt="" className="w-[37px]" />
                </div>
                <span className="text-[#181A20] text-[20px] font-[700] tracking-[-1px]">
                  {t("GatewaySec.categories.costs")}
                </span>
              </li>
              <li className="flex space-x-3 px-[18px] items-center h-[65px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img loading="lazy" src={icon2 || "/placeholder.svg"} alt="" className="w-[36px]" />
                </div>
                <span className="text-[#181A20] text-[20px] font-[700] tracking-[-1px]">
                  {t("GatewaySec.categories.time")}
                </span>
              </li>
              <li className="flex space-x-3 px-[18px] items-center h-[65px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img loading="lazy" src={icon3 || "/placeholder.svg"} alt="" className="w-[46px]" />
                </div>
                <span className="text-[#181A20] text-[20px] font-[700] tracking-[-1px]">
                  {t("GatewaySec.categories.team")}
                </span>
              </li>
              <li className="flex space-x-3 px-[18px] items-center h-[65px] border-t border-[#C2C2C2]">
                <div className="w-[65px]">
                  <img loading="lazy" src={icon4 || "/placeholder.svg"} alt="" className="w-[39px]" />
                </div>
                <span className="text-[#181A20] text-[20px] font-[700] tracking-[-1px]">
                  {t("GatewaySec.categories.workScope")}
                </span>
              </li>
            </ul>
          </div>
          <div
            className="max-w-[355px] rounded-[11px] py-[23px] px-[16px] w-[100%] border border-[#9D9D9D]"
            style={{
              background: "rgba(241, 241, 241, 0.36)",
            }}
          >
            <div className="flex justify-start pl-[19px] space-x-4 items-center">
              <img loading="lazy" src={cardicon1 || "/placeholder.svg"} alt="" className="w-[56.7px] h-[56.7px]" />
              <h4 className="text-[16px] text-[#181A20] font-[700] tacking-[-1px] leading-[100%]">
                {t("GatewaySec.newPlatform.title")}
              </h4>
            </div>
            <ul>
              <li className="py-[20px] flex items-center space-x-2 border-b border-[#C2C2C2]">
                <span className="text-[#181A20] text-[14px] font-[500] ">
                  {t("GatewaySec.newPlatform.costs")}
                </span>
                <div
                  className="relative"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <img className="w-[11.7px]" src={Iicon || "/placeholder.svg"} alt="Info Icon" />
                  {showTooltip && (
                    <div className="absolute left-0 top-6 bg-[#808080] w-[210px] text-center leading-[110%] text-[#fff] text-[10px] font-[400] rounded-md p-[6px] shadow-lg">
                      {t("GatewaySec.tooltip")}
                    </div>
                  )}
                </div>
              </li>
              <li className="text-[#181A20] text-[14px] font-[500] flex items-center h-[65px] border-b border-[#C2C2C2]">
                {t("GatewaySec.newPlatform.time")}
              </li>
              <li className="text-[#181A20] text-[14px] font-[500] flex items-center h-[65px] border-b border-[#C2C2C2]">
                {t("GatewaySec.newPlatform.team")}
              </li>
              <li className="text-[#181A20] text-[14px] font-[500] py-[18px] tracking-[-0.8px]">
                {t("GatewaySec.newPlatform.workScope")}
              </li>
            </ul>
          </div>
          <div
            className="max-w-[355px] rounded-[11px] py-[23px] px-[16px] w-[100%] border border-[#9D9D9D]"
            style={{
              background: "rgba(241, 241, 241, 0.36)",
            }}
          >
            <div className="flex justify-start space-x-4 items-center">
              <img loading="lazy" src={cardicon2 || "/placeholder.svg"} alt="" className="w-[56.7px] h-[56.7px]" />
              <h4 className="text-[16px] text-[#181A20] font-[700] tacking-[-1px] leading-[100%]">
                {t("GatewaySec.blockchainFX.title")}
              </h4>
            </div>
            <ul>
              <li className="text-[#181A20] text-[14px] font-[500] flex items-center h-[62px] border-b border-[#C2C2C2]">
                {t("GatewaySec.blockchainFX.costs")}
              </li>
              <li className="text-[#181A20] text-[14px] font-[500] flex items-center h-[65px] border-b border-[#C2C2C2]">
                {t("GatewaySec.blockchainFX.time")}
              </li>
              <li className="text-[#181A20] text-[14px] font-[500] py-[12px] h-[65px] border-b border-[#C2C2C2]">
                {t("GatewaySec.blockchainFX.team")}
              </li>
              <li className="text-[#181A20] text-[14px] font-[500] py-[18px]">
                {t("GatewaySec.blockchainFX.workScope")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GatewaySec;
