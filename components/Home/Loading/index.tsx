import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type loadingProps = {
  isLoaded: boolean;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;
};

const Loading = ({ isLoaded, setIsLoaded }: loadingProps) => {
  const [percentage, setPercentage] = useState(0);
  // document.body.style.overflow = "hidden";

  useEffect(() => {
    let interval = setInterval(() => {
      setPercentage(percentage + 1);
    }, 20);
    document.body.style.overflow = "hidden";

    if (percentage > 99) {
      clearInterval(interval);
      document.body.style.overflow = "scroll";
      setIsLoaded(true);
    }

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div
      className={`fixed z-50 w-full h-screen bg-darkBg flex items-center text-primary transition-all duration-500
      ${isLoaded ? "-z-50 opacity-0" : "z-50 opacity-100"}
  `}
    >
      <div
        className="w-full flex flex-col items-center relative -top-[12.5%]
      md:-top-[20%]
      "
      >
        {/* Loading */}
        <div
          className="w-[40%] h-20 relative animate-loading
        "
        >
          <Image
            alt="loading"
            src="https://www.venuslab.co/images/loading.png"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        {/* Percentage */}
        <p
          className="absolute text-6xl font-extrabold top-[30%] left-[55%]
          sm:text-[7rem]
          md:top-[5%]
        "
        >
          {percentage}%
        </p>
        {/* Hello */}
        <div
          className="w-[80%] h-20 absolute top-[83%] left-[5%]
          md:h-[12rem]
        "
        >
          <div className="w-full h-full relative">
            <Image
              alt="loading"
              src="https://www.venuslab.co/images/hello.png"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
