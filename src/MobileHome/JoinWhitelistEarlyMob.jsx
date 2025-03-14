import React from "react";
import joinWhitelistMobImages from "../assets/joinWhitelist/joinwhitelistMob.webp";
import swpicon from "../assets/wallet/swp.svg";

function JoinWhitelistEarlyMob() {
  return (
    <div className="pb-[24px]" id="join-whitelist">
      <div className="  w-[100%] flex flex-col px-4 gap-6">
        <div className="  flex flex-col justify-center items-center gap-4 py-6    rounded-[12px] border-[#ECECEC] bg-[#F9F9F9]">
          <h2 className="w-[357px] text-[32px] font-[700] text-center tracking-[-0.56px] capitalize leading-[120%]">
            {/* Join The Whitelist <br/> For Early Access */}
            Join the Whitelist <br /> for Early Access to <br /> the BFX Presale
          </h2>
          <p className="w-[317px] text-center text-[15px] font-[400] leading-[18px]">
          After raising $750,000 in the seed round and launching the Beta Trading App, the community now has a chance to join the BFX presale.
          </p>
          <img
            src={joinWhitelistMobImages}
            className="min-h-[239px] w-[252px] object-cover"
            alt=""
          />
        </div>
        <div className="     flex flex-col px-6 py-6 rounded-[12px] border-[#ECECEC] bg-[#F9F9F9]">
          <div className="flex flex-col gap-4">
            <h2 className="w-[398px] text-[#181A20] font-inter text-[20px] font-[600] tracking-[-0.312px]">
              How to Participate?
            </h2>
            <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
              1. Join the whitelist for 15 minutes of early access to buy BFX before the presale is publicly available.
            </p>
            <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
              2. Click the button below to get whitelisted.
            </p>
            <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
              3. Enter your wallet address and purchase amount.
            </p>
            <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
              4. Use the same wallet when the presale starts.
            </p>
            <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
              5. First come, first served.
            </p>

            <hr className="w-[50%] mx-auto h-[1px]" />

            <div className="flex flex-col gap-4">
              <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
                <strong>Payment Method:</strong> ETH, BNB and USDT
              </p>
              <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
                <strong>Claim:</strong> Your tokens will automatically be transferred to your wallet after the presale ends. You don't need to do anything.
              </p>
              <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
                <strong> Date:</strong> Sunday, March 30 at 5 PM UTC
              </p>
              <p className="text-[#434343] font-inter text-[14px] font-medium tracking-[-0.312px]">
                <strong>Goal:</strong> $250,000
              </p>
            </div>
          </div>
          <div
              className="max-w-[414px] mt-4 mb-2 px-[10px] pt-[14px] pb-[16px] border border-[#B0B0B0] w-[100%] mx-auto "
              style={{
                background: "rgba(237, 237, 237, 0.40)",
              }}
            >
              <div className=" space-y-[13px]">
                <h4 className="text-center text-[#808080] text-[15px] leading-[120%] font-[600]">
                $BFX Launches <br /> on Multiple Exchanges
                </h4>
                <div className="grid grid-cols-3 gap-[10px]">
                  <div
                    className="px-[4px] flex max-w-[129px] h-[33px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                    style={{
                      background: "rgba(176, 176, 176, 0.17)",
                    }}
                  >
                    <img
                      src={swpicon}
                      className="w-[19.976px] h-[19.976px]"
                      alt=""
                    />
                    <h4 className="text-[9.322px] text-[#545454] font-[700] leading-[120.286%]">
                      UNISWAP
                    </h4>
                  </div>
                  <div
                    className="px-[4px] flex max-w-[129px] h-[33px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                    style={{
                      background: "rgba(176, 176, 176, 0.17)",
                      filter: "blur(6.5px",
                      opacity: "0.73",
                    }}
                  >
                    <div className="w-[19.976px] h-[19.976px] bg-[#F0B90B] rounded-full"></div>
                    <h4 className="text-[9.322px] text-[#545454] font-[700] leading-[120.286%]">
                      UNISWAP
                    </h4>
                  </div>
                  <div
                    className="px-[4px] flex max-w-[129px] h-[33px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                    style={{
                      background: "rgba(176, 176, 176, 0.17)",
                      filter: "blur(6.5px",
                      opacity: "0.73",
                    }}
                  >
                    <div className="w-[19.976px] h-[19.976px] bg-[#0052FE] rounded-full"></div>
                    <h4 className="text-[9.322px] text-[#545454] font-[700] leading-[120.286%]">
                      UNISWAP
                    </h4>
                  </div>
                  <div
                    className="px-[4px] flex max-w-[129px] h-[33px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                    style={{
                      background: "rgba(176, 176, 176, 0.17)",
                      filter: "blur(6.5px",
                      opacity: "0.73",
                    }}
                  >
                    <div className="w-[19.976px] h-[19.976px] bg-[#00F0FF] rounded-full"></div>
                    <h4 className="text-[9.322px] text-[#545454] font-[700] leading-[120.286%]">
                      UNISWAP
                    </h4>
                  </div>
                  <div
                    className="px-[4px] flex max-w-[129px] h-[33px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                    style={{
                      background: "rgba(176, 176, 176, 0.17)",
                      filter: "blur(6.5px",
                      opacity: "0.73",
                    }}
                  >
                    <div className="w-[19.976px] h-[19.976px] bg-[#7635F5] rounded-full"></div>
                    <h4 className="text-[9.322px] text-[#545454] font-[700] leading-[120.286%]">
                      UNISWAP
                    </h4>
                  </div>
                  <div
                    className="px-[4px] flex max-w-[129px] h-[33px] rounded-[4.444px] justify-center items-center space-x-[4px] border border-[#ABABAB]"
                    style={{
                      background: "#35F535)",
                      filter: "blur(6.5px",
                      opacity: "0.73",
                    }}
                  >
                    <div className="w-[19.976px] h-[19.976px] bg-[#35F535] rounded-full"></div>
                    <h4 className="text-[9.322px] text-[#545454] font-[700] leading-[120.286%]">
                      UNISWAP
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://forms.gle/MqeUsLeJPwxt4gfC7"
              target="_blank"
              rel="noopener noreferrer"
            > 
          <button className="text-white mt-4 bg-[#E5AE00] px-[12px] hover:text-black hover:bg-transparent text-[11.85px] font-[800] border border-[#E5AE00]  hover:border-[#000] w-[100%] h-[32.094px]">
            Join Whitelist Now
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JoinWhitelistEarlyMob;
