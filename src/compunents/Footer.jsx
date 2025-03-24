"use client"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import logo from "../assets/footer/logo.svg"
import socil1 from "../assets/footer/Vector (2).svg"
import socil2 from "../assets/footer/Vector (3).svg"
import socil3 from "../assets/footer/Vector (4).svg"

function Footer() {
  const { t } = useTranslation()

  const handleScroll = (event, targetId, offset) => {
    event.preventDefault()

    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="bg-[#FAFAFA]">
      {/* desktop verion */}

      <div className="w-[100%] 2xl:block xl:block lg:block md:block sm:hidden hidden space-y-[40px] max-w-[1200px]  pt-[50px] mx-auto pb-[50px] ">
        <div className="flex justify-between">
          <div className="flex justify-between w-[60%]">
            <div className="max-w-[177px] space-y-[10px] w-[100%]">
              <img src={logo || "/placeholder.svg"} alt={t("footer.logoAlt")} />
              <p className="text-[#000] text-[12px] font-[400] leading-[166.667%]">{t("footer.description")}</p>
            </div>
            <div className="max-w-[83.276px] w-[100%] pt-[15px]">
              <ul>
                <li className="text-[#000] text-[13.3px] font-[600] leading-[108.333%]  list-disc  min-w-[100px]">
                  {t("footer.quickLinks.title")}
                  <a
                    className="text-[#949494] block text-[10.8px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                    href=""
                    onClick={(e) => handleScroll(e, "join-whitelist", 60)}
                  >
                    {t("footer.quickLinks.whitelist")}
                  </a>
                  <br />
                  <a
                    className="text-[#949494] block text-[10.8px] pt-[10px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                    href=""
                    onClick={(e) => handleScroll(e, "roadmap", 90)}
                  >
                    {t("footer.quickLinks.roadmap")}
                  </a>
                  <a
                    className="text-[#949494] block text-[10.8px] pt-[10px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                    href=""
                    onClick={(e) => handleScroll(e, "what-is-bfx-coin", 90)}
                  >
                    {t("footer.quickLinks.whatIsBfx")}
                  </a>
                  <a
                    className="text-[#949494] block text-[10.8px] pt-[10px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                    href=""
                    onClick={(e) => handleScroll(e, "tokenomics", 90)}
                  >
                    {t("footer.quickLinks.tokenAllocation")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-w-[114px] w-[100%] pt-[15px]">
              <ul className=" w-[100%]">
                <li className="text-[#000] text-[13.3px] list-disc font-[600] leading-[108.333%] min-w-[140px]">
                  {t("footer.docs.title")} <br />
                  <Link to="/privacy-policy" className="text-blue-600 ">
                    <p className="text-[#949494] text-[10.8px] pt-[20px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                      {t("footer.docs.privacyPolicy")}
                    </p>
                  </Link>
                  <br />
                  <Link to="/terms-of-service" className="text-blue-600 ">
                    <p className="text-[#949494] text-[10.8px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                      {t("footer.docs.termsOfService")}
                    </p>
                  </Link>
                  <br />
                  <Link to="/token-sale" className="text-blue-600 ">
                    <p className="text-[#949494] text-[10.8px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                      {t("footer.docs.tokenSaleAgreement")}
                    </p>
                  </Link>
                  <br />
                  <a
                    className="text-[#949494] text-[10.8px] pt-[10px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                    href="https://t.me/blockchainfx_chat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("footer.docs.liveSupport")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[285px] space-y-[10px] w-[100%] pt-[12px]">
            <h4 className="text-[#000] text-[13.3px] font-[600] leading-[108.333%]">{t("footer.socials.title")}</h4>
            <div className="flex space-x-6 pt-[10px] pb-[20px]">
              <a
                href="https://www.instagram.com/blockchain.fx?igsh=MWwybTk3cTRmbDhhcg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img src={socil1 || "/placeholder.svg"} alt={t("footer.socials.instagramAlt")} />
              </a>
              <a
                href="https://t.me/blockchainfx_chat"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img src={socil2 || "/placeholder.svg"} alt={t("footer.socials.telegramAlt")} />
              </a>
              <a
                href="https://x.com/BlockchainFXcom"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img src={socil3 || "/placeholder.svg"} alt={t("footer.socials.twitterAlt")} />
              </a>
            </div>
            <div className="space-y-[5px]">
              <h4 className="text-[#949494] text-[10.8px] font-[400] leading-[108.333%]">
                {t("footer.contact.label")}
              </h4>
              <h3 className="text-[#949494] text-[15px] font-[400] leading-[108.333%]">{t("footer.contact.email")}</h3>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-[#000] py-[46px]">
          <p className="text-[10px] font-[400] text-[#000] leading-[190%]">
            {t("footer.disclaimer.part1")} <br />
            <br />
            {t("footer.disclaimer.part2")}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" text-[12px] text-[#000] leading-[100%]">{t("footer.copyright")}</p>
          <div
            className="
          space-x-5"
          >
            <Link to="/cookie-management" className="text-blue-600 ">
              <p className="text-[#949494] text-[10.8px] pt-[20px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                {t("footer.cookieManagement")}
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* desktop version end */}

      {/* mobile version */}

      <div className="w-[90%] 2xl:hidden xl:hidden lg:hidden md:hidden sm:block block space-y-[35px] py-[24px] mx-auto ">
        <div className=" space-y-[10px] w-[100%]">
          <img src={logo || "/placeholder.svg"} alt={t("footer.logoAlt")} />
          <p className="text-[#000] text-[14px] font-[400] leading-[200%]">{t("footer.description")}</p>
        </div>
        <div className="flex justify-between">
          <div className="max-w-[150px] w-[100%] ">
            <ul>
              <li className="text-[#000] text-[16px] font-[600] leading-[108.333%] ">
                {t("footer.quickLinks.title")} <br />
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "join-whitelist", 60)}
                >
                  {t("footer.quickLinks.whitelist")}
                </a>
                <br />
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "roadmap", 90)}
                >
                  {t("footer.quickLinks.roadmap")}
                </a>
                <br />
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "what-is-bfx-coin", 90)}
                >
                  {t("footer.quickLinks.whatIsBfx")}
                </a>
                <br />
                <a
                  className="text-[#949494] block text-[13px] pt-[20px] font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                  href=""
                  onClick={(e) => handleScroll(e, "tokenomics", 90)}
                >
                  {t("footer.quickLinks.tokenAllocation")}
                </a>
              </li>
            </ul>
          </div>
          <div className="max-w-[200px] w-[100%] ">
            <ul className=" w-[100%]">
              <li className="text-[#000] text-[16px] font-[600] leading-[108.333%]">
                {t("footer.docs.title")} <br />
                <Link to="/privacy-policy" className="text-blue-600 ">
                  <p className="text-[#949494] text-[13px] pt-[20px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    {t("footer.docs.privacyPolicy")}
                  </p>
                </Link>
                <br />
                <Link to="/terms-of-service" className="text-blue-600 ">
                  <p className="text-[#949494] text-[13px] pt-[20px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    {t("footer.docs.termsOfService")}
                  </p>
                </Link>
                <br />
                <Link to="/token-sale" className="text-blue-600 ">
                  <p className="text-[#949494] text-[13px] pt-[20px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block">
                    {t("footer.docs.tokenSaleAgreement")}
                  </p>
                </Link>
                <br />
                <a
                  className="text-[#949494] text-[13px] pt-[20px] block font-[400] leading-[108.333%] border border-transparent hover:border-b-[#E5AE00] transition duration-300 inline-block"
                  href="https://t.me/blockchainfx_chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("footer.docs.liveSupport")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="max-w-[285px] space-y-[25px] pt-[3px] w-[100%] ">
            <h4 className="text-[#000] text-[16px] font-[600] leading-[108.333%]">{t("footer.socials.title")}</h4>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/blockchain.fx?igsh=MWwybTk3cTRmbDhhcg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  className="w-[24px] h-[24px]"
                  src={socil1 || "/placeholder.svg"}
                  alt={t("footer.socials.instagramAlt")}
                />
              </a>
              <a
                href="https://t.me/blockchainfx_chat"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  className="w-[24px] h-[24px]"
                  src={socil2 || "/placeholder.svg"}
                  alt={t("footer.socials.telegramAlt")}
                />
              </a>
              <a
                href="https://x.com/BlockchainFXcom"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  className="w-[24px] h-[24px]"
                  src={socil3 || "/placeholder.svg"}
                  alt={t("footer.socials.twitterAlt")}
                />
              </a>
            </div>
            <div className="space-y-[10px]">
              <h4 className="text-[#949494] text-[12px] font-[400] leading-[108.333%]">{t("footer.contact.label")}</h4>
              <h3 className="text-[#949494] text-[15px] font-[400] leading-[108.333%]">{t("footer.contact.email")}</h3>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-[#000] py-[18px]">
          <p className="text-[10px] font-[400] text-[#000] leading-[190%]">
            {t("footer.disclaimer.part1")} <br />
            <br />
            {t("footer.disclaimer.part2")}
          </p>
        </div>
        <div>
          <p className="text-[10px] text-center text-[#000] leading-[100%]">{t("footer.copyright")}</p>
        </div>
      </div>

      {/* mobile version end */}
    </div>
  )
}

export default Footer

