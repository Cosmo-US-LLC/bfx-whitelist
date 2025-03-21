import React from "react";
import { useTranslation } from "react-i18next";

import excixn1 from "../assets/ExclusiveSec/excixn (1).webp";
import excixn2 from "../assets/ExclusiveSec/excixn (2).webp";
import excixn3 from "../assets/ExclusiveSec/excixn (3).svg";
import excixn4 from "../assets/ExclusiveSec/excixn (4).webp";

function ExclusiveBenefitsSec() {
  const { t } = useTranslation();

  const cardItems = [
    {
      id: "01",
      img: excixn1,
      title: t("ExclusiveBenefitsSec.items.0.title"),
      description: t("ExclusiveBenefitsSec.items.0.description"),
    },
    {
      id: "02",
      img: excixn2,
      title: t("ExclusiveBenefitsSec.items.1.title"),
      description: t("ExclusiveBenefitsSec.items.1.description"),
    },
    {
      id: "03",
      img: excixn3,
      title: t("ExclusiveBenefitsSec.items.2.title"),
      description: t("ExclusiveBenefitsSec.items.2.description"),
    },
    {
      id: "04",
      img: excixn4,
      title: t("ExclusiveBenefitsSec.items.3.title"),
      description: t("ExclusiveBenefitsSec.items.3.description"),
    },
  ];

  return (
    <div className="py-[50px]">
      <div className="max-w-[1400px] w-[100%] mx-auto relative">
        <div>
          <h3 className="text-[30px] capitalize leading-[155.556%] text-[#181A20] text-center font-[700]">
            {t("ExclusiveBenefitsSec.title")}
          </h3>
        </div>
        <div className="max-w-[1100px] pt-[30px] w-[100%] mx-auto">
          <div className="grid grid-cols-4 gap-x-[21px]">
            {cardItems.map((item) => (
              <div
                key={item.id}
                className="max-w-[255px] mx-auto px-[15px] flex flex-col justify-center pt-[10px] pb-[34px] min-h-[310px] max-h-[310px] bg-[#F9FAFB] rounded-[8px] border border-[#F9FAFB] space-y-[20px]"
              >
                <div className="max-h-[116px] h-[100%] p-[15px] flex justify-center items-center">
                  <img
                    src={item.img}
                    loading="lazy"
                    className="max-h-[116px] h-[100%] object-cover"
                    alt=""
                  />
                </div>
                <h3
                  className="text-[16px] text-center !mt-[5px] text-[#000] font-[700] leading-[115%]"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h3>
                <h4 className="text-[14px] text-center text-[#000] font-[400] leading-[111.111%]">
                  {item.description}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExclusiveBenefitsSec;