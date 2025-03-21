import React from "react";
import { useTranslation } from "react-i18next"; 
import nexticn1 from "../assets/NextGen/nwxticon (9).svg";
import nexticn2 from "../assets/NextGen/nwxticon (8).svg";
import nexticn3 from "../assets/NextGen/nwxticon (7).svg";
import nexticn4 from "../assets/NextGen/nwxticon (6).svg";
import nexticn5 from "../assets/NextGen/nwxticon (5).svg";
import nexticn6 from "../assets/NextGen/nwxticon (4).svg";
import nexticn7 from "../assets/NextGen/nwxticon (3).svg";
import nexticn8 from "../assets/NextGen/nwxticon (2).svg";
import nexticn9 from "../assets/NextGen/nwxticon (1).svg";
import nexticn10 from "../assets/NextGen/nwxticon.svg";

function NextGenerationSec() {
  const { t } = useTranslation(); 

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth"
        });
      }
    }, 200);
  };

  return (
    <div className="pt-[50px] pb-[50px] bg-[#FBFBFB]">
      <div className="max-w-[1200px]  w-[100%] mx-auto space-y-[60px]">
        <h3 className="text-[30px] font-[700] leading-[155.556%] leading-[-1px] text-center">
          {t("NextGeneration.nextGenTitle")}
        </h3>
        <div className="space-y-[45px]">
          <div className="flex justify-center items-center space-x-[5rem]">
            <div className="flex flex-col min-w-[185px] items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img loading="lazy" src={nexticn1} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]" dangerouslySetInnerHTML={{ __html: t("NextGeneration.teamExperience") }}></p>
            </div>
            <div className="flex flex-col min-w-[122px] items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img loading="lazy" src={nexticn2} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]" dangerouslySetInnerHTML={{ __html: t("NextGeneration.assets") }}></p>
            </div>
            <div className="flex flex-col min-w-[137px] items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img loading="lazy" src={nexticn10}  className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]" dangerouslySetInnerHTML={{ __html: t("NextGeneration.spreads") }}></p>
            </div>
            <div className="flex flex-col items-center min-w-[145px] space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img loading="lazy" src={nexticn4} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]" dangerouslySetInnerHTML={{ __html: t("NextGeneration.chatSupport") }}></p>
            </div>
            <div className="flex flex-col items-center min-w-[129px] space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img loading="lazy" src={nexticn3} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]" dangerouslySetInnerHTML={{ __html: t("NextGeneration.register") }}></p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-[5rem]">
            <div className="flex min-w-[185px] flex-col items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img loading="lazy" src={nexticn5} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]" dangerouslySetInnerHTML={{ __html: t("NextGeneration.oneClickTrading") }}></p>
            </div>
            <div className="flex flex-col min-w-[122px] items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img loading="lazy" src={nexticn6} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]" dangerouslySetInnerHTML={{ __html: t("NextGeneration.leverageTrading") }}></p>
            </div>
            <div className="flex flex-col min-w-[137px] items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img loading="lazy" src={nexticn7} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]" dangerouslySetInnerHTML={{ __html: t("NextGeneration.charts") }}></p>
            </div>
            <div className="flex flex-col min-w-[145px] items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img loading="lazy" src={nexticn8} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]" dangerouslySetInnerHTML={{ __html: t("NextGeneration.indicators") }}></p>
            </div>
            <div className="flex flex-col min-w-[129px] items-center space-y-[9px]">
              <div className="min-h-[40px] max-h-[40px]">
                <img loading="lazy" src={nexticn9} className='h-[38px]' alt="" />
              </div>
              <p className="text-[14px] text-[#000] text-center leading-[150%] font-[400] tracking-[-0.32px]" dangerouslySetInnerHTML={{ __html: t("NextGeneration.tournaments") }}></p>
            </div>
          </div>
          {/* <div className="flex justify-center items-center pt-[30px] space-x-[17px]">
          <a
              href="https://forms.gle/MqeUsLeJPwxt4gfC7"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button
              onClick={handleScroll}
              className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[158px] w-[100%] h-[39px]"
            >
              Join the Whitelist
            </button>
            </a>
            <a href="https://trade.blockchainfx.io/traderoom" target="_blank" rel="noopener noreferrer">
              <button className="hover:text-white hover:bg-[#E5AE00] px-[12px] text-black bg-transparent text-[14px] font-[500] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[138px] w-[100%] h-[39px]">
                {t("NextGeneration.betaTrading")}
              </button>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default NextGenerationSec;
