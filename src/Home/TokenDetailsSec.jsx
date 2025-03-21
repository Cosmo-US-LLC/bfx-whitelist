import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "../assets/TokenAllocationSec/fa-solid_copy.svg";

function TokenDetailsSec() {
  const { t } = useTranslation();
  const address = "0xD0d801eEa2c2422dF3e626b82EBBb618f4Cc445e";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    toast.success(t("tokenDetails.addressCopied"), {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div className="pt-[50px] space-y-[35px] bg-[#FAFAFA] pb-[50px] px-[152px]">
      <div className="max-w-[896px] relative space-y-[40px] w-[100%] mx-auto ">
        <div className="space-y-[30px]">
          <h3 className="text-[30px] font-[700] text-center leading-[114%] text-[#181A20] tracking-[-1px]">
            {t("tokenDetails.title")}
          </h3>
          <p className="text-[14px] font-[400] max-w-[832px] mx-auto w-[100%] text-center leading-[130%] text-[#181A20] tracking-[-0.32px]">
            {t("tokenDetails.description")}
          </p>
        </div>
        <div className="space-y-[17px]">
          <div className="w-[100%] space-x-[20px] mx-auto flex justify-between items-center ">
            <div className="max-w-[363px] w-[100%] border px-[17px] pt-[14px] bg-[#fff] space-y-[7px] rounded-[6px] pb-[16px] border-[#000]">
              <h4 className="text-[#444] text-[16px] font-[400]">{t("tokenDetails.tokenName.label")}</h4>
              <h3 className="text-[#444] text-[16px] font-[700]">
                {t("tokenDetails.tokenName.value")}
              </h3>
            </div>
            <div className="max-w-[363px] w-[100%] border px-[17px] pt-[14px] bg-[#fff] space-y-[7px] rounded-[6px] pb-[16px] border-[#000]">
              <h4 className="text-[#444] text-[16px] font-[400]">{t("tokenDetails.launchOn.label")}</h4>
              <h3 className="text-[#444] text-[16px] font-[700]">
                {t("tokenDetails.launchOn.value")}
              </h3>
            </div>
            <div className="max-w-[363px] w-[100%] border px-[17px] pt-[14px] bg-[#fff] space-y-[7px] rounded-[6px] pb-[16px] border-[#000]">
              <h4 className="text-[#444] text-[16px] font-[400]">{t("tokenDetails.tokenType.label")}</h4>
              <h3 className="text-[#444] text-[16px] font-[700]">{t("tokenDetails.tokenType.value")}</h3>
            </div>
          </div>
          <div className="w-[100%] mx-auto space-x-[20px] flex justify-between items-center ">
            <div className="max-w-[363px] w-[100%] border px-[17px] pt-[14px] bg-[#fff] space-y-[7px] rounded-[6px] pb-[16px] border-[#000]">
              <h4 className="text-[#444] text-[16px] font-[400]">
                {t("tokenDetails.tokenSymbol.label")}
              </h4>
              <h3 className="text-[#444] text-[16px] font-[700]">{t("tokenDetails.tokenSymbol.value")}</h3>
            </div>
            <div className="max-w-[363px] w-[100%] border px-[17px] pt-[14px] bg-[#fff] space-y-[7px] rounded-[6px] pb-[16px] border-[#000]">
              <h4 className="text-[#444] text-[16px] font-[400]">{t("tokenDetails.decimal.label")}</h4>
              <h3 className="text-[#444] text-[16px] font-[700]">{t("tokenDetails.decimal.value")}</h3>
            </div>
            <div className="max-w-[363px] w-[100%] border px-[17px] pt-[14px] bg-[#fff] space-y-[7px] rounded-[6px] pb-[16px] border-[#000]">
              <h4 className="text-[#444] text-[16px] font-[400]">
                {t("tokenDetails.totalSupply.label")}
              </h4>
              <h3 className="text-[#444] text-[16px] font-[700]">{t("tokenDetails.totalSupply.value")}</h3>
            </div>
          </div>
          <div className="w-[100%] mx-auto flex justify-between items-center ">
            <div className="border px-[17px] space-y-[7px] rounded-[6px] w-[100%] pt-[14px] bg-[#fff] pb-[16px] border-[#000]">
              <h4 className="text-[#444] text-[16px] font-[400]">
                {t("tokenDetails.contractAddress.label")}
              </h4>
              <h3 className="text-[#444] flex text-[16px] font-[700]">
                {address}{" "}
                <img
                  src={copy || "/placeholder.svg"}
                  className="pl-2 w-[24px] cursor-pointer"
                  alt={t("tokenDetails.copyIconAlt")}
                  onClick={copyToClipboard}
                />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenDetailsSec;
