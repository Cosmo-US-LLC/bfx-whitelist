import whitepaper from "../assets/Whitepaper/instantSwap.gif";

export default function SwapSectionMob() {
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
      <div className="w-full py-[24px] px-[20px]">
        <div className="py-6 px-3 space-y-[20px] border border-1 border-[#B0B0B0]  rounded-[13px]">
         
          <div className="w-[100%] space-y-4 ">
            <div className="flex flex-col justify-start w-full p-2">
              <h3 className="text-[30px] font-bold leading-[114%]  text-center mb-4">
                Swap Between Assets{" "}
              </h3>
              <p className="text-[14px] text-center max-w-[350px] mx-auto">
              Experience limitless trading opportunities, like swapping gold for BTC or ETH for Nvidia stock, all in one place. Traditionally, converting crypto into other assets required separate exchanges, extra fees, and long wait times. BlockchainFX streamlines it, making trading faster and easier than ever.
              </p>
            </div>
          </div>
          <div className="w-[100%] flex justify-center">
            <div className="w-full p-2">
              <img
               loading="lazy"
                src={whitepaper}
                className="w-[453px] h-auto"
                alt="whitepaper"
              />
            </div>
          </div>
          <div className="flex justify-center w-full p-2">
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
            </div>
        </div>
      </div>
    </>
  );
}
