"use client"

import React from "react"
import { useTranslation } from "react-i18next"

import cardicon1 from "../assets/WallStreet/wallicn (1).svg"
import cardicon2 from "../assets/WallStreet/wallicn (2).svg"
import cardicon3 from "../assets/WallStreet/wallicn (3).svg"
import cardicon4 from "../assets/WallStreet/wallicn (4).svg"
import cardicon5 from "../assets/WallStreet/wallicn (5).svg"
import cardicon6 from "../assets/WallStreet/wallicn (6).svg"

function WallStreetSec() {
  const { t } = useTranslation()
  
  return (
    <div className="py-[50px] bg-[#FAFAFA]">
      <div className="max-w-[660px] space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[14px]">
          <h3 className="text-[30px] capitalize font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            {t("WallStreetSec.title")}
          </h3>
          <p className="text-[14px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
            {t("WallStreetSec.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-y-[30px]">
          <div className="w-[228px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img loading="lazy" src={cardicon1 || "/placeholder.svg"} alt="" className="w-[35px] h-[35px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center" dangerouslySetInnerHTML={{ __html: t("WallStreetSec.features.markets") }}></h4>
          </div>
          <div className="w-[185px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img loading="lazy" src={cardicon2 || "/placeholder.svg"} alt="" className="w-[40px] h-[40px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center" dangerouslySetInnerHTML={{ __html: t("WallStreetSec.features.instruments") }}></h4>
          </div>
          <div className="w-[265px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img loading="lazy" src={cardicon3 || "/placeholder.svg"} alt="" className="w-[35px] h-[35px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center" dangerouslySetInnerHTML={{ __html: t("WallStreetSec.features.globalMarkets") }}></h4>
          </div>
          <div className="w-[228px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img loading="lazy" src={cardicon4 || "/placeholder.svg"} alt="" className="w-[46px] h-[40px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center" dangerouslySetInnerHTML={{ __html: t("WallStreetSec.features.fastExecution") }}></h4>
          </div>
          <div className="w-[185px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img loading="lazy" src={cardicon5 || "/placeholder.svg"} alt="" className="w-[46px] h-[40px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center" dangerouslySetInnerHTML={{ __html: t("WallStreetSec.features.liquidity") }}></h4>
          </div>
          <div className="w-[265px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img loading="lazy" src={cardicon6 || "/placeholder.svg"} alt="" className="w-[42px] h-[31px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center" dangerouslySetInnerHTML={{ __html: t("WallStreetSec.features.withdrawals") }}></h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WallStreetSec
