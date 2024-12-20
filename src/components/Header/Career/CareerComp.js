import Image from "next/image";
import React from "react";
import img from "../../../assets/career.png"
import img2 from "../../../assets/bottom.png"

const CareerComp = () => {
  return (
    <section className="my-24 ">
      <div className="container">
        <div className="bg-company2 bg-no-repeat bg-right-top w-full h-auto flex flex-col items-center gap-7">
          <p className="font-semibold tracking-widest">CAREER AT FINSWEET</p>
          <h3 className="text-[48px] font-bold text-center">We hired people who are <br /> Always Passionate about <br /> what they do</h3>
          <p className="max-w-[600px] text-center">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .</p>
          <Image src={img} alt="career image"/>
          <p className="text-xl font-semibold">See Our open positions </p>
          <Image src={img2} alt="bottom"/>
        </div>
      </div>
    </section>
  );
};

export default CareerComp;
