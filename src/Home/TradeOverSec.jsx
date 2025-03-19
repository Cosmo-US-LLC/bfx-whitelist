import React from "react";
import { useTranslation } from "react-i18next";
import takeimg1 from "../assets/TradeOver/takeimg (5).webp";
import takeimg2 from "../assets/TradeOver/takeimg (1).png";
import takeimg3 from "../assets/TradeOver/takeimg (2).webp";
import takeimg4 from "../assets/TradeOver/takeimg (3).webp";
import takeimg5 from "../assets/TradeOver/takeimg (4).webp";

const TradeOverSec = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      img: takeimg1,
      title: t("TradeOverSec.categories.0.title"),
      subtitle: t("TradeOverSec.categories.0.subtitle"),
    },
    {
      img: takeimg2,
      title: t("TradeOverSec.categories.1.title"),
      subtitle: t("TradeOverSec.categories.1.subtitle"),
    },
    {
      img: takeimg3,
      title: t("TradeOverSec.categories.2.title"),
      subtitle: t("TradeOverSec.categories.2.subtitle"),
    },
    {
      img: takeimg4,
      title: t("TradeOverSec.categories.3.title"),
      subtitle: t("TradeOverSec.categories.3.subtitle"),
    },
    {
      img: takeimg5,
      title: t("TradeOverSec.categories.4.title"),
      subtitle: t("TradeOverSec.categories.4.subtitle"),
    },
  ];

  return (
    <div className="py-[50px]">
      <div className="max-w-[1200px] w-[100%] mx-auto space-y-[30px]">
        <h3 className="text-[30px] font-[700] capitalize leading-[155%] leading-[-1px] text-center">
          {t("TradeOverSec.title")}
        </h3>
        <div className="flex justify-center space-x-[14px]">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="border rounded-[8px] border-[#9D9D9D] min-h-[310px] overflow-hidden pb-[14px] max-w-[200px] w-[100%] space-y-[13px]"
              style={{ background: "rgba(241, 241, 241, 0.36)" }}
            >
              <div>
                <img
                  src={item.img}
                  className="min-h-[167px] w-[100%] object-cover"
                  alt=""
                />
              </div>
              <div className="space-y-[4px] px-[14px]">
                <h3 className="text-[16px] text-[#181A20] font-[600] leading-[140%] tracking-[-0.32px]">
                  {item.title}
                </h3>
                <p className="text-[14px] font-[400] text-[#181A20] leading-[157.143%] tracking-[-0.32px]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradeOverSec;
