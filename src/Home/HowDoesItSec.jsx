import React from "react";
import { useTranslation } from "react-i18next";
import howimg from "../assets/HowDoesItSec/hiwimg.webp";

const HowDoesItSec = () => {
  const { t } = useTranslation();

  const cardItems = [
    {
      id: "01",
      title: t("HowDoesItSec.items.0.title"),
      description: t("HowDoesItSec.items.0.description"),
    },
    {
      id: "02",
      title: t("HowDoesItSec.items.1.title"),
      description: t("HowDoesItSec.items.1.description"),
    },
    {
      id: "03",
      title: t("HowDoesItSec.items.2.title"),
      description: t("HowDoesItSec.items.2.description"),
    },
    {
      id: "04",
      title: t("HowDoesItSec.items.3.title"),
      description: t("HowDoesItSec.items.3.description"),
    },
    {
      id: "05",
      title: t("HowDoesItSec.items.4.title"),
      description: t("HowDoesItSec.items.4.description"),
    },
    {
      id: "06",
      title: t("HowDoesItSec.items.5.title"),
      description: t("HowDoesItSec.items.5.description"),
    },
  ];

  return (
    <div className="py-[50px]">
      <div className="max-w-[1200px] w-[100%] mx-auto relative">
        <div>
          <h3 className="text-[30px] capitalize leading-normal tracking-[-1px] text-[#181A20] text-center font-[700]">
            {t("HowDoesItSec.title")}
          </h3>
        </div>
        <div className="max-w-[900px] pt-[34px] space-x-[3rem] flex justify-between w-[100%] mx-auto">
          <div className="w-[54%] grid grid-cols-2 gap-x-[19px] gap-y-[19px]">
            {cardItems.map((item) => (
              <div
                key={item.id}
                className="max-w-[243px] px-[19px] flex flex-col justify-center pt-[20px] pb-[24px] max-h-[223.384px] min-h-[210.384px] bg-[#F2F2F2] rounded-[8px] border border-[#F9FAFB]"
              >
                <p className="text-[19.011px] pb-[23px] text-[#000] font-[700]">
                  {item.id}.
                </p>
                <div className="min-h-[30px] flex justify-center items-center">
                  <h3 className="text-[16px] text-center text-[#000] font-[700] leading-[109.316%]">
                    {item.title}
                  </h3>
                </div>
                <h4 className="text-[14px] text-center text-[#000] font-[400] leading-[135.796%]">
                  {item.description}
                </h4>
              </div>
            ))}
          </div>
          <div className="w-[50%] flex justify-end max-w-[310px]">
            <img src={howimg} className="object-cover" loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItSec;
