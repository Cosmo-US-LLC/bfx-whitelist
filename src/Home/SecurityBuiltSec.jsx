import React from "react";
import { useTranslation } from "react-i18next";

import cardicon1 from "../assets/SecurityBuilt/secicn (1).svg";
import cardicon2 from "../assets/SecurityBuilt/secicn (2).svg";
import cardicon3 from "../assets/SecurityBuilt/secicn (3).svg";
import cardicon4 from "../assets/SecurityBuilt/secicn (4).svg";
import cardicon5 from "../assets/SecurityBuilt/secicn (5).svg";
import cardicon6 from "../assets/SecurityBuilt/secicn (6).svg";

function SecurityBuiltSec() {
  const { t } = useTranslation();

  return (
    <div className="py-[50px] bg-[#FAFAFA]">
      <div className="max-w-[985px] space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[14px]">
          <h3 className="text-[30px] capitalize font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            {t("securityBuilt.title")}
          </h3>
          <p className="text-[14px] font-[400] max-w-[550px] text-center mx-auto w-[100%] leading-[130%] text-[#181A20] tracking-[-0.32px]">
            {t("securityBuilt.description")}
          </p>
        </div>
        <div className="max-w-[658px] mx-auto grid grid-cols-3 gap-y-[30px]  ">
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img loading="lazy" src={cardicon1 || "/placeholder.svg"} alt={t("securityBuilt.features.pciDss.iconAlt")} className="w-[26.7px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center">
              {t("securityBuilt.features.pciDss.title")}
            </h4>
          </div>
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img loading="lazy" src={cardicon2 || "/placeholder.svg"} alt={t("securityBuilt.features.dataPrivacy.iconAlt")} className="w-[31.3px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center">
              {t("securityBuilt.features.dataPrivacy.title")}
            </h4>
          </div>
          <div className="w-[189px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img loading="lazy" src={cardicon3 || "/placeholder.svg"} alt={t("securityBuilt.features.monitoring.iconAlt")} className="w-[41px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center">
              {t("securityBuilt.features.monitoring.title")}
            </h4>
          </div>
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img loading="lazy" src={cardicon4 || "/placeholder.svg"} alt={t("securityBuilt.features.riskManagement.iconAlt")} className="w-[41.7px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center">
              {t("securityBuilt.features.riskManagement.title")}
            </h4>
          </div>
          <div className="w-[179px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img loading="lazy" src={cardicon5 || "/placeholder.svg"} alt={t("securityBuilt.features.dataBackups.iconAlt")} className="w-[36.6px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center">
              {t("securityBuilt.features.dataBackups.title")}
            </h4>
          </div>
          <div className="w-[189px] flex flex-col mx-auto space-y-[1rem] justyfy-center items-center w-[100%]">
            <img loading="lazy" src={cardicon6 || "/placeholder.svg"} alt={t("securityBuilt.features.gdpr.iconAlt")} className="w-[28.1px]" />
            <h4 className="text-[14px] font-[400] tracking-[-0.32px] text-center">
              {t("securityBuilt.features.gdpr.title")}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityBuiltSec;