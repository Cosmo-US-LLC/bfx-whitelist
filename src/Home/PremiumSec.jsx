import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import starticn from "../assets/PremiumSec/start.svg";
import arw from "../assets/PremiumSec/arw.svg";
import faq1 from "../assets/PremiumSec/faq (1).svg";
import faq2 from "../assets/PremiumSec/faq (2).svg";
import line from "../assets/PremiumSec/line.png";
import cardimg1 from "../assets/PremiumSec/cardimg (1).webp";
import cardimg2 from "../assets/PremiumSec/cardimg (2).webp";
import cardimg3 from "../assets/PremiumSec/cardimg (3).webp";
import cardimg4 from "../assets/PremiumSec/cardimg (4).webp";
import cardimg5 from "../assets/PremiumSec/cardimg (5).webp";
import cardimg6 from "../assets/PremiumSec/cardimg (6).webp";
import Iicon from "../assets/Gateway/i.svg";
import cardimg7 from "../assets/PremiumSec/cardimg (7).webp";

const cards = [
  {
    id: 1,
    img: cardimg1,
    title: "Novice",
    price: "$1,000",
    reviews: [true, false, false, false, false],
    points: ["Early Access", "10% BFX Bonus", "BFX Visa Card"],
    buttonLabel: "Join the Whitelist",
  },
  {
    id: 2,
    img: cardimg2,
    title: "Advanced",
    price: "$2,500",
    reviews: [true, true, false, false, false],
    points: ["Early Access", "20% BFX Bonus", "Metal BFX Visa Card", "$500 Trading Credits"],
    buttonLabel: "Join the Whitelist",
  },
  {
    id: 3,
    img: cardimg3,
    title: "Pro",
    price: "$5,000",
    reviews: [true, true, true, false, false],
    points: ["Early Access", "30% BFX Bonus", "Metal BFX Visa Card", "$1000 Trading Credits"],
    buttonLabel: "Join the Whitelist",
  },
  {
    id: 4,
    img: cardimg4,
    title: "Expert",
    price: "$10,000+",

    reviews: [true, true, true, true, false],
    points: [
      "Early Access",
      "40% BFX Bonus",
      "Metal BFX Visa Card",
      "10% USDT Rewards",
      "$2000 Trading Credits",
    ],
    buttonLabel: "Join the Whitelist",
  },
  {
    id: 5,
    img: cardimg5,
    title: "Master",
    price: "$25,000+",

    reviews: [true, true, true, true, true],
    points: [
      "Early Access",
      "50% BFX Bonus",
      "Metal BFX Visa Card",
      "15% USDT Rewards",
      "$5000 Trading Credits",
    ],
    buttonLabel: "Join the Whitelist",
  },
  {
    id: 6,
    img: cardimg6,
    title: "Elite",
    price: "$50,000+",

    reviews: [true, true, true, true, true, true],
    points: [
      "Early Access",
      "60% BFX Bonus",
      "Metal BFX Visa Card",
      "20% USDT Rewards",
      "$10,000 Trading Credits",
    ],
    buttonLabel: "Join the Whitelist",
  },
  {
    id: 7,
    img: cardimg7,
    title: "Legend",
    price: "$100,000+",
    reviews: [true, true, true, true, true, true, true],
    points: [
      "Early Access",
      "80% BFX Bonus",
      "18 Karat BFX Visa Card",
      "30% USDT Rewards",
      "$25,000 Trading Credits",
    ],
    buttonLabel: "Join the Whitelist",
  },
];
const Bundles = [
  {
    id: 1,
    question: "When will I get my Founder’s Club NFT?",
    answer:
      "<li>You’ll receive your Founder's Club NFT automatically after purchasing the required amount of $BFX.</li> <li>The NFT will appear in your personal dashboard and can be claimed once the presale ends.</li> <li>To access the dashboard, connect the same wallet by clicking 'Connect Wallet' in the top right corner.</li>",
  },
  {
    id: 2,
    question: "When will I get my Bonuses?",
    answer:
      "<li>Your BFX bonuses will be instantly added to your dashboard</li><li>To access your dashboard, click the 'Connect Wallet' button</li>",
  },
  {
    id: 3,
    question: "Can I get an NFT with multiple purchases?",
    answer:
      "<li>Yes, you can buy $BFX in smaller amounts to reach the total required. </li><li>For example, buying $200 worth of $BFX five times will earn you the Novice NFT (valued at $1,000).</li>",
  },
  {
    id: 4,
    question: "Can I upgrade my NFT?",
    tooltip: true,
    answer:
      "<li>Yes, you can upgrade multiple times during the presale.</li> <li>You'll receive rewards and the NFT for the highest level you achieve.</li> <li>After the presale ends, upgrades will no longer be possible.</li>",
  },
];

function PremiumSec() {
  const [openBundles, setOpenBundles] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const [showTooltip, setShowTooltip] = useState(false);

  const swiperRef = useRef(null);

  const handleDotClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
      setActiveIndex(index);
    }
  };
  const toggleBundles = (id) => {
    setOpenBundles(id === openBundles ? null : id);
  };

  const handleScroll = () => {
    setTimeout(() => {
      const element = document.getElementById("Wallet");
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offset = 50;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <div className="py-[50px] bg-[#FAFAFA]" id="premium">
      <div className="max-w-[1400px] w-[100%] space-y-[30px] mx-auto relative">
        <div className="space-y-[10px]">
          <h3 className="text-[30px] leading-[155.556%] text-[#000] text-center font-[700]">
            Limited Founder's Club Membership
          </h3>
          <p className="text-[14px] leading-[150%] max-w-[572px] mx-auto text-[#000] text-center font-[400] tracking-[-0.32px]">
          Buy $BFX during the pre-sale and get Founder's Club NFTs starting at only $1,000! <br />
          Enjoy early access, exclusive memberships, bonus $BFX, daily staking rewards in BFX and USDT, plus extra trading credits.
          </p>
        </div>
        <div className="max-w-[1012px] w-[100%] mx-auto ">
          <div className="relative">
            <button className="swiper-button-prev-swp rotate-[182deg] absolute z-10 !left-[-5%] top-[50%] transform -translate-y-1/2">
              <img className="w-[37.545px] h-[37.545px]" src={arw} alt="" />
            </button>
            <button className="swiper-button-next-swp  absolute z-10 !right-[-5%] top-[50%] transform -translate-y-1/2">
              <img className="w-[37.545px] h-[37.545px]" src={arw} alt="" />
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
                      activeIndex === index
                        ? "border-black"
                        : "border-[#9D9D9D]"
                    } border !min-h-[550px] max-h-[550px] h-[100%]`}
                  >
                    <div>
                      <img
                        src={card.img}
                        loading="lazy"
                        className="rounded-[8px] max-h-[190px]"
                        alt={card.title} 
                      />

                      <div className="flex justify-between py-[14px]">
                        <div>
                          <h3 className="text-[#000] flex flex-col justify-end text-[16.966px] font-[600] leading-[115%]">
                             <div className="flex items-center space-x-[10px]">
                              <div>
                              {card.title} 
                              </div>
                             <div className="text-start text-[12px] px-[7px] py-[2px] border-[#000] ml-1 border font-[600]">NFT</div> 
                              </div> <br />
                            <span className="text-[#7C7C7C] text-start text-[15.27px] font-[600]">
                              {card.price}
                            </span>
                          </h3>
                        </div>

                        <ul className="flex justify-center">
                          {card.reviews.map((isStarFilled, index) =>
                            isStarFilled ? (
                              <li key={index}>
                                <img src={starticn} className="h-[23px]" alt="rating star" />
                              </li>
                            ) : null
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
                      <a
                        href="https://forms.gle/MqeUsLeJPwxt4gfC7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                    activeIndex === index
                      ? "border-black border-[3px] -mt-[2px] w-[24.85px] h-[24.85px]"
                      : ""
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
            <div className="w-[100%] max-w-[70px]">
              <h4 className="text-[16px] text-[#000] font-[600] leading-[115%] text-center">
                Novice
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $1,000+
              </p>
            </div>
            <div className="w-[100%] max-w-[120px]">
              <h4 className="text-[16px] text-[#000] font-[600] leading-[115%] text-center">
                Advanced
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $2,500+
              </p>
            </div>
            <div className="w-[100%] max-w-[60px]">
              <h4 className="text-[16px] text-[#000] font-[600] leading-[115%] text-center">
                Pro
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $5,000+
              </p>
            </div>
            <div className="w-[100%] max-w-[120px]">
              <h4 className="text-[16px] text-[#000] font-[600] leading-[115%] text-center">
                Expert
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $10,000+
              </p>
            </div>
            <div className="w-[100%] max-w-[100px]">
              <h4 className="text-[16px] text-[#000] font-[600] leading-[115%] text-center">
                Master
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $25,000+
              </p>
            </div>
            <div className="w-[100%] max-w-[70px]">
              <h4 className="text-[16px] text-[#000] font-[600] leading-[115%] text-center">
                Elite
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $50,000+
              </p>
            </div>
            <div className="w-[100%] max-w-[98px]">
              <h4 className="text-[16px] text-[#000] font-[600] leading-[115%] text-center">
                Legend
              </h4>
              <p className="text-[#7C7C7C] font-[#7C7C7C] text-[18px] text-center">
                $100,000+
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1000px]  w-[100%] mx-auto bg-[#F5F5F5] border border-[#797979] rounded-[13px] px-[30px]  pt-[33px] pb-[10px] ">
          <div>
            <h3 className="text-[30px] text-center font-[700] leading-[166.667%] text-[#181A20] tracking-[ -0.973px]">
              Questions About The Founder’s Club
            </h3>
          </div>

          <div>
            {Bundles.map((item, index) => (
              <div
                key={item.id}
                className={`py-[20px] ${
                  index !== Bundles.length - 1 ? "border-b border-[#000]" : ""
                }`}
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
                      <img src={faq1} alt="" />
                    ) : (
                      <img src={faq2} alt="" />
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
                          <img
                            className="w-[11.7px]"
                            src={Iicon}
                            alt="Info Icon"
                          />
                          {showTooltip && (
                            <div className="absolute top-[13px] z-[99] bg-[#808080] w-[260px] text-start leading-[110%] text-[#fff] text-[10px] font-[400] rounded-md p-[10px] shadow-lg">
                              <span className="absolute top-[8px] left-[4px]">
                                .
                              </span>{" "}
                              For example, buying $1,000 of $BFX gives you the
                              Novice NFT. <br />{" "}
                              <span className="absolute top-[28px] left-[4px]">
                                .
                              </span>{" "}
                              Spend $1,500 more to upgrade to Advanced. <br />{" "}
                              <span className="absolute top-[40px] left-[4px]">
                                .
                              </span>{" "}
                              You can keep upgrading until you reach the final
                              Legend NFT.
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
  );
}

export default PremiumSec;
