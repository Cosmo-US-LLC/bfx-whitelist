"use client"

import { useRef, useState } from "react"
import { useTranslation } from "react-i18next" // Add this import
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import starticn from "../assets/PremiumSec/start.svg"
import arw from "../assets/PremiumSec/arw.svg"
import faq1 from "../assets/PremiumSec/faq (1).svg"
import faq2 from "../assets/PremiumSec/faq (2).svg"
import cardimg1 from "../assets/PremiumSec/cardimg (1).webp"
import cardimg2 from "../assets/PremiumSec/cardimg (2).webp"
import cardimg3 from "../assets/PremiumSec/cardimg (3).webp"
import cardimg4 from "../assets/PremiumSec/cardimg (4).webp"
import cardimg5 from "../assets/PremiumSec/cardimg (5).webp"
import cardimg6 from "../assets/PremiumSec/cardimg (6).webp"
import Iicon from "../assets/Gateway/i.svg"
import cardimg7 from "../assets/PremiumSec/cardimg (7).webp"

// Replace the hardcoded cards and Bundles arrays with a function that uses translations
function PremiumSec() {
  const { t } = useTranslation() // Add translation hook
  const [openBundles, setOpenBundles] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [showTooltip, setShowTooltip] = useState(false)
  const swiperRef = useRef(null)

  // Get card data from translations
  const cards = [
    {
      id: 1,
      img: cardimg1,
      title: t("PremiumSec.cards.0.title"),
      price: t("PremiumSec.cards.0.price"),
      reviews: [true, false, false, false, false],
      points: t("PremiumSec.cards.0.points", { returnObjects: true }),
      buttonLabel: t("PremiumSec.cards.0.buttonLabel"),
    },
    {
      id: 2,
      img: cardimg2,
      title: t("PremiumSec.cards.1.title"),
      price: t("PremiumSec.cards.1.price"),
      reviews: [true, true, false, false, false],
      points: t("PremiumSec.cards.1.points", { returnObjects: true }),
      buttonLabel: t("PremiumSec.cards.1.buttonLabel"),
    },
    {
      id: 3,
      img: cardimg3,
      title: t("PremiumSec.cards.2.title"),
      price: t("PremiumSec.cards.2.price"),
      reviews: [true, true, true, false, false],
      points: t("PremiumSec.cards.2.points", { returnObjects: true }),
      buttonLabel: t("PremiumSec.cards.2.buttonLabel"),
    },
    {
      id: 4,
      img: cardimg4,
      title: t("PremiumSec.cards.3.title"),
      price: t("PremiumSec.cards.3.price"),
      reviews: [true, true, true, true, false],
      points: t("PremiumSec.cards.3.points", { returnObjects: true }),
      buttonLabel: t("PremiumSec.cards.3.buttonLabel"),
    },
    {
      id: 5,
      img: cardimg5,
      title: t("PremiumSec.cards.4.title"),
      price: t("PremiumSec.cards.4.price"),
      reviews: [true, true, true, true, true],
      points: t("PremiumSec.cards.4.points", { returnObjects: true }),
      buttonLabel: t("PremiumSec.cards.4.buttonLabel"),
    },
    {
      id: 6,
      img: cardimg6,
      title: t("PremiumSec.cards.5.title"),
      price: t("PremiumSec.cards.5.price"),
      reviews: [true, true, true, true, true, true],
      points: t("PremiumSec.cards.5.points", { returnObjects: true }),
      buttonLabel: t("PremiumSec.cards.5.buttonLabel"),
    },
    {
      id: 7,
      img: cardimg7,
      title: t("PremiumSec.cards.6.title"),
      price: t("PremiumSec.cards.6.price"),
      reviews: [true, true, true, true, true, true, true],
      points: t("PremiumSec.cards.6.points", { returnObjects: true }),
      buttonLabel: t("PremiumSec.cards.6.buttonLabel"),
    },
  ]

  // Get FAQ data from translations
  const Bundles = [
    {
      id: 1,
      question: t("PremiumSec.faq.0.question"),
      answer: t("PremiumSec.faq.0.answer"),
    },
    {
      id: 2,
      question: t("PremiumSec.faq.1.question"),
      answer: t("PremiumSec.faq.1.answer"),
    },
    {
      id: 3,
      question: t("PremiumSec.faq.2.question"),
      answer: t("PremiumSec.faq.2.answer"),
    },
    {
      id: 4,
      question: t("PremiumSec.faq.3.question"),
      answer: t("PremiumSec.faq.3.answer"),
      tooltip: true,
    },
  ]

  const handleDotClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index)
      setActiveIndex(index)
    }
  }

  const toggleBundles = (id) => {
    setOpenBundles(id === openBundles ? null : id)
  }

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet")
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offset = 50
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        })
      }
    }, 200)
  }

  return (
    <div className="py-[50px] bg-[#FAFAFA]" id="premium">
      <div className="max-w-[1400px] w-[100%] space-y-[30px] mx-auto relative">
        <div className="space-y-[10px]">
          <h3 className="text-[30px] leading-[155.556%] text-[#000] text-center font-[700]">{t("PremiumSec.title")}</h3>
          <p className="text-[14px] leading-[150%] max-w-[572px] mx-auto text-[#000] text-center font-[400] tracking-[-0.32px]">
            {t("PremiumSec.subtitle")}
          </p>
        </div>
        <div className="max-w-[1012px] w-[100%] mx-auto ">
          <div className="relative">
            <button className="swiper-button-prev-swp rotate-[182deg] absolute z-10 !left-[-5%] top-[50%] transform -translate-y-1/2">
              <img className="w-[37.545px] h-[37.545px]" src={arw || "/placeholder.svg"} alt="" />
            </button>
            <button className="swiper-button-next-swp  absolute z-10 !right-[-5%] top-[50%] transform -translate-y-1/2">
              <img className="w-[37.545px] h-[37.545px]" src={arw || "/placeholder.svg"} alt="" />
            </button>

            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              loop={false}
              navigation={{
                nextEl: ".swiper-button-next-swp",
                prevEl: ".swiper-button-prev-swp",
                enabled: true,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              modules={[Navigation]}
              className="mySwiper"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={card.id}>
                  <div
                    style={{
                      background: "rgba(241, 241, 241, 0.36)",
                    }}
                    className={`p-[15px] rounded-[8px] flex max-w-[310.367px] mx-auto flex-col justify-between ${
                      activeIndex === index ? "border-black" : "border-[#9D9D9D]"
                    } border !min-h-[550px] max-h-[550px] h-[100%]`}
                  >
                    <div>
                      <img
                        src={card.img || "/placeholder.svg"}
                        loading="lazy"
                        className="rounded-[8px] max-h-[190px]"
                        alt={card.title}
                      />

                      <div className="flex justify-between py-[14px]">
                        <div>
                          <h3 className="text-[#000] flex flex-col justify-end text-[16.966px] font-[600] leading-[115%]">
                            <div className="flex items-center space-x-[10px]">
                              <div>{card.title}</div>
                              <div className="text-start text-[12px] px-[7px] py-[2px] border-[#000] ml-1 border font-[600]">
                                NFT
                              </div>
                            </div>{" "}
                            <br />
                            <span className="text-[#7C7C7C] text-start text-[15.27px] font-[600]">{card.price}</span>
                          </h3>
                        </div>

                        <ul className="flex justify-center">
                          {card.reviews.map((isStarFilled, index) =>
                            isStarFilled ? (
                              <li key={index}>
                                <img src={starticn || "/placeholder.svg"} className="h-[23px]" alt="rating star" />
                              </li>
                            ) : null,
                          )}
                        </ul>
                      </div>

                      <ul className="text-left">
                        {card.points.map((point, index) => (
                          <li
                            key={index}
                            className="mb-1 rounded-[8px] px-[8px] h-[40.719px] flex items-center text-[#181A20] text-[15.27px] font-[400] leading-[127.778%] tracking-[-0.32px]"
                            style={{
                              background: "rgba(124, 124, 124, 0.07)",
                            }}
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-start">
                      <a href="https://forms.gle/MqeUsLeJPwxt4gfC7" target="_blank" rel="noopener noreferrer">
                        <button
                          onClick={handleScroll}
                          className="text-white bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[15.27px] font-[800] border border-[#E5AE00] hover:border-[#000] rounded-[8px] max-w-[168.945px] w-[100%] h-[49px]"
                        >
                          {card.buttonLabel}
                        </button>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="max-w-[1000px]  w-[100%] mx-auto bg-[#F5F5F5] border border-[#797979] rounded-[13px] px-[26px] py-[10px] space-y-[10px]">
          <div className="relative flex justify-center px-6 mt-2">
            <div className="flex justify-between absolute w-[95%] top-[-45%]">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`w-[21.85px] h-[21.85px] cursor-pointer rounded-full  ${
                    activeIndex === index ? "border-black border-[3px] -mt-[2px] w-[24.85px] h-[24.85px]" : ""
                  }`}
                  style={{
                    background: "#E5AE00",
                  }}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))}
            </div>
            <div className="h-[11px] w-[100%] rounded-[50px] bg-[#C0C0C0]">
              <div
                className="bg-[#E5AE00] h-[11px] w-[80%] rounded-[50px]"
                style={{
                  width: `${(activeIndex / (cards.length - 1)) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between pt-[8px] pl-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`w-[100%] max-w-[${index === 0 ? "70" : index === 1 ? "120" : index === 2 ? "60" : index === 3 ? "120" : index === 4 ? "100" : index === 5 ? "70" : "98"}px]`}
              >
                <h4 className="text-[16px] text-[#000] font-[600] leading-[115%] text-center">{card.title}</h4>
                <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">{card.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[1000px]  w-[100%] mx-auto bg-[#F5F5F5] border border-[#797979] rounded-[13px] px-[30px]  pt-[33px] pb-[10px] ">
          <div>
            <h3 className="text-[30px] text-center font-[700] leading-[166.667%] text-[#181A20] tracking-[ -0.973px]">
              Questions About The Founder's Club
            </h3>
          </div>

          <div>
            {Bundles.map((item, index) => (
              <div
                key={item.id}
                className={`py-[20px] ${index !== Bundles.length - 1 ? "border-b border-[#000]" : ""}`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleBundles(item.id)}
                >
                  <h3
                    className={`text-[16px] font-[600] leading-[170.05% ] ${
                      openBundles === item.id ? "text-[#E5AE00]" : "text-black"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <span className="text-xl font-bold">
                    {openBundles === item.id ? (
                      <img src={faq1 || "/placeholder.svg"} alt="" />
                    ) : (
                      <img src={faq2 || "/placeholder.svg"} alt="" />
                    )}
                  </span>
                </div>
                {openBundles === item.id && (
                  <div className="relative">
                    <p
                      className="mt-2 text-[14px] list-disc text-[#181A20] font-[400] tracking-[-0.32px]"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></p>
                    {item.tooltip && (
                      <div className="absolute top-[6px] z-[9] left-[375px]">
                        <div
                          className="relative"
                          onMouseEnter={() => setShowTooltip(true)}
                          onMouseLeave={() => setShowTooltip(false)}
                        >
                          <img className="w-[11.7px]" src={Iicon || "/placeholder.svg"} alt="Info Icon" />
                          {showTooltip && (
                            <div className="absolute top-[13px] z-[99] bg-[#808080] w-[260px] text-start leading-[110%] text-[#fff] text-[10px] font-[400] rounded-md p-[10px] shadow-lg">
                              <span className="absolute top-[8px] left-[4px]">.</span> For example, buying $1,000 of
                              $BFX gives you the Novice NFT. <br />{" "}
                              <span className="absolute top-[28px] left-[4px]">.</span> Spend $1,500 more to upgrade to
                              Advanced. <br /> <span className="absolute top-[40px] left-[4px]">.</span> You can keep
                              upgrading until you reach the final Legend NFT.
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PremiumSec

