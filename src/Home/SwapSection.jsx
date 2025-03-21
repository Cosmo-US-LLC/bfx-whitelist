import whitepaper from "../assets/Whitepaper/instantSwap.gif";

export default function SwapSection() {
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
      <div className="w-full flex items-center justify-center py-[50px] px-[60px]">
        <div className="p-6 max-w-[1080px] min-h-[454px] border border-1 border-[#B0B0B0] flex flex-row items-center rounded-[13px]">
          <div className="w-[50%]">
            <div className="w-full p-2">
              <img
                src={whitepaper}
                loading="lazy"
                className="w-[453px] h-auto"
                alt="whitepaper"
              />
            </div>
          </div>
          <div className="w-[50%] space-y-4 pl-4">
            <div className="flex flex-col justify-start w-full p-2">
              <h3 className="text-[30px] font-bold leading-[48px] mb-4">
                Swap Between Assets{" "}
              </h3>
              <p className="text-[14px]">
              Experience limitless trading opportunities, like swapping gold for BTC or ETH for Nvidia stock, all in one place. Traditionally, converting crypto into other assets required separate exchanges, extra fees, and long wait times. BlockchainFX streamlines it, making trading faster and easier than ever.
              </p>
            </div>

            <div className="flex justify-start w-full p-2">
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
      </div>
    </>
  );
}
