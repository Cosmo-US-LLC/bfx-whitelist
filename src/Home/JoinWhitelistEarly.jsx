import React from "react";
import { useTranslation } from "react-i18next";
import joinWhitelistImages from "../assets/joinWhitelist/joinwhitelistMob.webp";
import swpicon from "../assets/wallet/swp.svg";

function JoinWhitelistEarly() {
  const { t } = useTranslation();
  return (
    <div className="py-[50px]" id="join-whitelist">
      <div className="max-w-[1200px] w-[100%] mx-auto flex justify-center gap-10">
        <div className="w-[60%] flex flex-col justify-center items-center gap-4 py-6    rounded-[12px] border-[#ECECEC] bg-[#F9F9F9]">
          <h2 className="text-[32px] font-[700] text-center tracking-[-1px] capitalize leading-normal">
          Join the Whitelist <br /> for Early Access to the BFX Presale
          </h2>
          <p className="w-[549px] text-center text-[16px] font-[400] leading-[22px]">
          {t("joinwhitelistsec.description")}
          </p>
          <img
            src={joinWhitelistImages}
            loading="lazy"
            className="min-h-[421px] w-[446px] object-cover"
            alt=""
          />
        </div>
        <div className="w-[40%] flex flex-col px-6 py-6 rounded-[12px] border-[#ECECEC] bg-[#F9F9F9]">
          <div className="flex flex-col gap-4">
            <h2 className="w-[398px] text-[#181A20] font-inter text-[20px] font-[600] tracking-[-0.312px]">
              How to Participate?
            </h2>
            <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
              1. Join the Waitlist for 15 minutes of early access to buy BFX before the presale is publicly available.
            </p>
            <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
              2. Click the button below to get Waitlisted.
            </p>
            <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
            {t("joinwhitelistsec.step3")}
            </p>
            <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
            {t("joinwhitelistsec.step4")}
            </p>
            <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
            {t("joinwhitelistsec.step5")}
            </p>
            <hr className="w-[50%] mx-auto h-[1px]" />

            <div className="flex flex-col gap-4">
              <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
                <strong>{t("joinwhitelistsec.payment_methodtitle")}</strong> {t("joinwhitelistsec.payment_method")}
              </p>
              <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
                <strong>{t("joinwhitelistsec.claimtitle")}</strong> {t("joinwhitelistsec.claim")}
              </p>
              <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
                <strong> {t("joinwhitelistsec.datetitle")}</strong> {t("joinwhitelistsec.date")}
              </p>
              <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
                <strong>{t("joinwhitelistsec.goaltitle")}</strong> {t("joinwhitelistsec.goal")}
              </p>
            </div>
          </div>
          <div className="border border-gray-400 bg-gray-100 w-[100%]   h-[79.668px] gap-4 flex flex-col justify-center px-4 mt-6">
            <h4 className="text-start text-[#808080] text-[9.875px] leading-[75%] font-[600]">
            {t("joinwhitelistsec.launches_on")}
            </h4>
            <div className="flex   space-x-[8px]">
              <div
                className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                style={{
                  background: "rgba(176, 176, 176, 0.17)",
                }}
              >
                <img
                  src={swpicon}
                  className="w-[14.813px] h-[14.813px]"
                  alt=""
                />
                <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                  UNISWAP
                </h4>
              </div>
              <div
                className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                style={{
                  background: "rgba(176, 176, 176, 0.17)",
                  filter: "blur(6.5px",
                  opacity: "0.73",
                }}
              >
                <div className="w-[14.813px] h-[14.813px] bg-[#F0B90B] rounded-full"></div>
                <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                  UNISWAP
                </h4>
              </div>
              <div
                className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                style={{
                  background: "rgba(176, 176, 176, 0.17)",
                  filter: "blur(6.5px",
                  opacity: "0.73",
                }}
              >
                <div className="w-[14.813px] h-[14.813px] bg-[#0052FE] rounded-full"></div>
                <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                  UNISWAP
                </h4>
              </div>
              <div
                className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                style={{
                  background: "rgba(176, 176, 176, 0.17)",
                  filter: "blur(6.5px",
                  opacity: "0.73",
                }}
              >
                <div className="w-[14.813px] h-[14.813px] bg-[#00F0FF] rounded-full"></div>
                <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                  UNISWAP
                </h4>
              </div>
              <div
                className="px-[4px] flex max-w-[129px] h-[24px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                style={{
                  background: "rgba(176, 176, 176, 0.17)",
                  filter: "blur(6.5px",
                  opacity: "0.73",
                }}
              >
                <div className="w-[14.813px] h-[14.813px] bg-[#7635F5] rounded-full"></div>
                <h4 className="text-[6.913px] text-[#545454] font-[700] leading-[120.286%]">
                  UNISWAP
                </h4>
              </div>
            </div>
          </div>
          <a
              href="https://forms.gle/MqeUsLeJPwxt4gfC7"
              target="_blank"
              rel="noopener noreferrer"
            >
          <button className="text-white mt-4 bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[11.85px] font-[800] border border-[#E5AE00]  hover:border-[#000] w-[100%] h-[32.094px]">
          Join the waitlist
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JoinWhitelistEarly;
