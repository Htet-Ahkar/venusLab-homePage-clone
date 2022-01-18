type heroProps = {
  loading: boolean;
};

import { useEffect, useState } from "react";

const Hero = ({ loading }: heroProps) => {
  return (
    <section
      className="w-full h-screen relative text-white flex justify-center items-center hero
    bg-hero"
    >
      <div
        className="h-full w-full px-5 relative
      menu:px-32"
      >
        {/* Ater loaded animation */}
        <div
          className={`absolute top-[50%] transition-all duration-[2s]
        ${!loading ? `-translate-y-1/2` : `-translate-y-[10%] opacity-0`}`}
        >
          {/* Title */}
          <h1 className="uppercase text-primary flex flex-col leading-[0.9] font-hero">
            <small
              className="font-[200] text-[14vw] tracking-[-1px]
              sm:text-[6rem]
              md:text-[9rem]
            "
            >
              idea to
            </small>
            <strong
              className="text-[20vw] tracking-[-1px]
            md:text-[11rem] font-[700] "
            >
              impact
            </strong>
          </h1>

          {/* Paragraph */}
          <p
            className="first-letter:uppercase mt-4 text-xl pl-3
          md:text-2xl"
          >
            risk-free mobile and web development
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
