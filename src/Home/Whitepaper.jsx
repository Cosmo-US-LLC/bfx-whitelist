import React from "react";
import { useTranslation } from 'react-i18next';
import whitepaper from "../assets/Whitepaper/whitepaper.webp";

export default function Whitepaper() {
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
    <>
      <div className="w-full flex items-center justify-center py-[50px] px-[60px]" id="whitepaper">
        <div className="p-6 max-w-[1080px] space-x-[3rem] min-h-[454px] border border-1 border-[#B0B0B0] flex flex-row items-center rounded-[13px]">
          <div className="w-[50%]">
            <div className="w-full p-2">
              <img 
                src={whitepaper || "/placeholder.svg"} 
                loading="lazy" 
                className="w-[453px] h-auto object-cover" 
                alt={t('whitepaper.imageAlt')} 
              />
            </div>
          </div>
          <div className="w-[50%] max-w-[460px] space-y-4 pl-4">
            <div className="flex flex-col justify-start w-full p-2">
              <h3 className="text-[30px] font-bold leading-[48px] mb-4">
                {t('whitepaper.title')}
              </h3>
              <p className="text-[14px]">
                {t('whitepaper.description')}
              </p>
            </div>

            <div className="flex justify-start w-full p-2 space-x-3">
              <a
                href="https://forms.gle/MqeUsLeJPwxt4gfC7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  onClick={handleScroll}
                  className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[14px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[158px] w-[100%] h-[39px]"
                >
                  {t('whitepaper.joinWhitelist')}
                </button>
              </a>
              <a href="https://blockchainfx.com/BFX-Whitepaper.pdf" target="_blank" rel="noopener noreferrer">
                <button className="hover:text-white hover:bg-[#E5AE00] px-[10px] text-black bg-transparent text-[14px] font-[800] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[165px] w-[100%] h-[39px]">
                  {t('whitepaper.accessWhitepaper')}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
