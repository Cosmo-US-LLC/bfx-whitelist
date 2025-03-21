import whitepaper from "../assets/Whitepaper/whitepaper.webp";

export default function Whitepaper() {

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
              <img src={whitepaper} loading="lazy" className="w-[453px] h-auto object-cover" alt="whitepaper" />
            </div>
          </div>
          <div className="w-[50%] max-w-[460px] space-y-4 pl-4">
            <div className="flex flex-col justify-start w-full p-2">
              <h3 className="text-[30px] font-bold leading-[48px] mb-4">
                Whitepaper
              </h3>
              <p className="text-[14px]">
              Explore the BlockchainFX whitepaper to learn how the $BFX token powers a next-gen trading ecosystem and how you will significantly benefit as an early holder. Discover its key features, advantages, and how BlockchainFX is bridging the gap between blockchain and traditional finance by creating the crypto industry's first trading super app.
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
                Join the Whitelist
              </button>
              </a>
              <a href="https://blockchainfx.com/BFX-Whitepaper.pdf" target="_blank" rel="noopener noreferrer">
              <button className="hover:text-white hover:bg-[#E5AE00] px-[10px] text-black bg-transparent text-[14px] font-[800] border hover:border-[#E5AE00] border-[#000] rounded-[8px] max-w-[165px] w-[100%] h-[39px]">
              Access Whitepaper
            </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
