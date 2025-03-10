import React from "react";
import herobnr1 from "../assets/herosection/bnrhero (5).svg";
import herobnr2 from "../assets/herosection/bnrhero (8).svg";
import herobnr3 from "../assets/herosection/bnrhero (6).svg";
import herobnr4 from "../assets/herosection/bnrhero (7).svg";
import herobnr5 from "../assets/herosection/bnrhero (2).svg";

function FeaturedSec() {
  return (
    <div className="h-[113px] flex items-center">
      <div className="max-w-[1024px]  w-[100%] mx-auto ">
        <div className="">
          <div className="flex justify-center items-center h-[73.47] space-x-[30px] border rounded-[20px] py-[22px]">
            <img src={herobnr1}  alt="" />
            <img src={herobnr2} className="h-[22.21px]" alt="" />
            <img src={herobnr3} className="h-[24.39px]" alt="" />
            <img src={herobnr4} className="h-[20.86px]" alt="" />
            <img src={herobnr5} className="max-w-[225px] h-[24.56px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSec;
