import React from "react";
import { useTranslation } from "react-i18next";

import vector1 from "../assets/Roadmap/vector (11).png";
import vector2 from "../assets/Roadmap/vector (10).webp";
import vector3 from "../assets/Roadmap/vector (9).png";
import vector4 from "../assets/Roadmap/vector (8).png";
import vector5 from "../assets/Roadmap/vector (7).png";
import vector6 from "../assets/Roadmap/vector (6).webp";
import vector7 from "../assets/Roadmap/vector (5).webp";
import vector8 from "../assets/Roadmap/vector (4).webp";
import vector9 from "../assets/Roadmap/vector (3).webp";
import vector10 from "../assets/Roadmap/vector (2).webp";
import vector11 from "../assets/Roadmap/vector (1).webp";

function RoadmapSec() {
  const { t } = useTranslation();
 
  return (
    <div className="pt-[50px] space-y-[35px] pb-[50px] px-[73px]" id="roadmap">
      <div className="max-w-[1054px] relative space-y-[120px] w-[100%] mx-auto ">
        <div className="">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            {t("roadmap.title")}
          </h3>
        </div>
      <div className="space-y-[62px]">
      <div className="w-[693px] border border-[#9D9D9D] rounded-[8px] max-w-[799px] pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px]">
            <img loading="lazy" src={vector1 || "/placeholder.svg"} className="border border-[#000]" alt={t("roadmap.vectorAlt")} />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[22px] font-[500] leading-[138%]">{t("roadmap.phases.preparation.title")}</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px] text-[14px]">
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.preparation.items.idea")}</p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.preparation.items.raiseFunds")}</p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.preparation.items.onboardTeam")}</p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.preparation.items.tradingPlatform")}</p>
                </div>
            </div>
        </div>
        <img loading="lazy" src={vector2 || "/placeholder.svg"} className="absolute max-w-[100px] right-[24%] top-[-34%]" alt={t("roadmap.vectorAlt")} />
        <img loading="lazy" src={vector4 || "/placeholder.svg"} className="absolute z-[-1] right-[-18%] top-[50%]" alt={t("roadmap.vectorAlt")} />
       </div>
       <div className="w-[693px] border border-[#9D9D9D] rounded-[8px] max-w-[799px] ml-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px]">
            <img loading="lazy" src={vector1 || "/placeholder.svg"} className="border border-[#000]" alt={t("roadmap.vectorAlt")} />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[22px] font-[500] leading-[138%]">{t("roadmap.phases.execution.title")}</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px] text-[14px]">
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.execution.items.website")}</p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.execution.items.createToken")}</p>
                </div>
                <div className="max-w-[324px] flex items-center text-[14px] px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.execution.items.launchPresale")}</p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.execution.items.certikAudit")}</p>
                </div>
            </div>
        </div>
        <img loading="lazy" src={vector7 || "/placeholder.svg"} className="absolute max-w-[140px]  right-[5%] top-[-41%]" alt={t("roadmap.vectorAlt")} />
        <img loading="lazy" src={vector3 || "/placeholder.svg"} className="absolute max-w-[100px] z-[-1] left-[-15%] top-[50%]" alt={t("roadmap.vectorAlt")} />
       </div>
       <div className="w-[693px] border border-[#9D9D9D] rounded-[8px] max-w-[799px] mr-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px]">
            <img loading="lazy" src={vector5 || "/placeholder.svg"} className="" alt={t("roadmap.vectorAlt")} />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[22px] font-[500] leading-[138%]">{t("roadmap.phases.launch.title")}</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px] text-[14px]">
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.launch.items.affiliateProgram")}</p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.launch.items.sellOutPresale")}</p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.launch.items.launchOnExchanges")}</p>
                </div>
                <div className="max-w-[324px] flex items-center  px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.launch.items.tenThousandHolders")}</p>
                </div>
            </div>
        </div>
        <img loading="lazy" src={vector8 || "/placeholder.svg"} className="absolute left-[14%] max-w-[100px] top-[-72%]" alt={t("roadmap.vectorAlt")} />
        <img loading="lazy" src={vector4 || "/placeholder.svg"} className="absolute right-[-15%] max-w-[100px] z-[-1] top-[50%]" alt={t("roadmap.vectorAlt")} />
       </div>
       <div className="w-[693px] border border-[#9D9D9D] rounded-[8px] max-w-[799px] ml-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px]">
            <img loading="lazy" src={vector5 || "/placeholder.svg"} className="" alt={t("roadmap.vectorAlt")} />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[22px] font-[500] leading-[138%]">{t("roadmap.phases.performance.title")}</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px] text-[14px]">
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.performance.items.cashbackSystem")}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.performance.items.publicChats")}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.performance.items.copyTrading")}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.performance.items.mobileApps")}</p>
                </div>
            </div>
        </div>
        <img loading="lazy" src={vector11 || "/placeholder.svg"} className="absolute right-[18%] max-w-[100px] top-[-32%]" alt={t("roadmap.vectorAlt")} />
        <img loading="lazy" src={vector10 || "/placeholder.svg"} className="absolute left-[-25%] max-w-[100px]  top-[-10%]" alt={t("roadmap.vectorAlt")} />
        <img loading="lazy" src={vector3 || "/placeholder.svg"} className="absolute left-[-15%] max-w-[100px] z-[-1] top-[50%]" alt={t("roadmap.vectorAlt")} />
       </div>
       <div className="w-[693px] border border-[#9D9D9D] rounded-[8px] max-w-[799px] mr-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px]">
            <img loading="lazy" src={vector5 || "/placeholder.svg"} className="" alt={t("roadmap.vectorAlt")} />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[22px] font-[500] leading-[138%]">{t("roadmap.phases.expansion.title")}</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px] text-[14px]">
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.expansion.items.cexListing")}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.expansion.items.tradingVolume")}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.expansion.items.hundredThousandHolders")}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.expansion.items.leaderboards")}</p>
                </div>
            </div>
        </div>
        <img loading="lazy" src={vector6 || "/placeholder.svg"} className="absolute left-[0%] max-w-[140px]  top-[-50%]" alt={t("roadmap.vectorAlt")} />
        <img loading="lazy" src={vector4 || "/placeholder.svg"} className="absolute right-[-15%] z-[-1] top-[50%]" alt={t("roadmap.vectorAlt")} />
       </div>
       <div className="w-[693px] border border-[#9D9D9D] rounded-[8px] max-w-[799px] ml-auto pr-[48px] pl-[35px] py-[28px] flex justify-between items-start relative"
      style={{
        background:"rgb(250 250 250)"
      }}
      >
        <div className="w-[27px]">
            <img loading="lazy" src={vector5 || "/placeholder.svg"} className="" alt={t("roadmap.vectorAlt")} />
        </div>
        <div className="w-[86%] space-y-[8px]">
            <h3 className="text-[22px] font-[500] leading-[138%]">{t("roadmap.phases.globalReach.title")}</h3>
            <div className="grid grid-cols-2 gap-x-[13px] gap-y-[8px] text-[14px]">
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.globalReach.items.usLicense")}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.globalReach.items.marketingCampaigns")}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.globalReach.items.millionHolders")}</p>
                </div>
                <div className="max-w-[324px] flex items-center px-[12px] w-[100%] h-[44px] bg-[#DDD]">
                    <p className="text-[12px]">{t("roadmap.phases.globalReach.items.partnerships")}</p>
                </div>
            </div>
        </div>
        <img loading="lazy" src={vector8 || "/placeholder.svg"} className="absolute right-[19%] top-[-40%] max-w-[100px]" alt={t("roadmap.vectorAlt")} />
       </div>
      </div>
      </div>
    </div>
  );
}

export default RoadmapSec;
