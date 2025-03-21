"use client"

import React from "react"
import { useTranslation } from "react-i18next"

import graph from "../assets/HyperGrowth/Graph.png"

function HyperGrowthSec() {
  const { t } = useTranslation()

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet")
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offset = 50
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        })
      }
    }, 200)
  }

  return (
    <div className="py-[50px] bg-[#FAFAFA]">
      <div className="max-w-[1200px] space-y-[35px] w-[100%] mx-auto ">
        <div className="space-y-[14px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            {t("HyperGrowthSec.title")}
          </h3>
          <p className="text-[14px] font-[400] max-w-[890px] mx-auto w-[100%] text-center leading-[21px] text-[#181A20] tracking-[-0.32px]">
            {t("HyperGrowthSec.description")}
          </p>
        </div>
        <div
          className="space-y-[53px] bg-[#fff] rounded-[14px] p-[53.32px] w-[667px] h-[413px] mx-auto"
          style={{
            boxShadow: "0px 5.336px 26.68px 0px rgba(169, 169, 169, 0.30)",
          }}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-[#000] font-[500] text-[19.7px]">
              {t("HyperGrowthSec.graph.title")}
            </h4>
            <div className="flex items-center space-x-3">
              <hr className="h-[0px] w-[20px] border-[2px] border-[#E5AE00]" />
              <p className="text-[13.6px] text-[#949494] font-[500]">
                {t("HyperGrowthSec.graph.blockchainFX")}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <hr className="h-[0px] w-[20px] border-[2px] border-[#CE2A96]" />
              <p className="text-[13.6px] text-[#949494] font-[500]">
                {t("HyperGrowthSec.graph.regularPlatform")}
              </p>
            </div>
          </div>
          <div>
            <img loading="lazy" src={graph || "/placeholder.svg"} alt={t("HyperGrowthSec.graph.alt")} className="" />
          </div>
        </div>
        <p className="text-[14px] font-[400] max-w-[908px] mx-auto w-[100%] text-center leading-[21px] text-[#181A20] tracking-[-0.32px]">
          {t("HyperGrowthSec.source")}
        </p>
        <div className="flex items-center justify-center">
          <a
            href="https://forms.gle/MqeUsLeJPwxt4gfC7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              onClick={handleScroll}
              className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[158px] w-[100%] h-[39px]"
            >
              {t("HyperGrowthSec.button")}
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HyperGrowthSec
