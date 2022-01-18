/* eslint-disable react-hooks/exhaustive-deps */

type sectionProps = {
  isEven: boolean;
  sectionData: {
    title: string;
    bgColor: string;
    color: string;
    logo: string;
    subtitle: string;
    para: string;
    circleBg: string;
    animatedImg: string;
  };
};

import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedImage = ({ isEven, sectionData }: sectionProps) => {
  const { ref, entry } = useInView({
    threshold: [
      0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31,
      0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43,
      0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55,
      0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67,
      0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79,
      0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91,
      0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99,
    ],
  });

  let previousY = 0;
  let previousRatio = 0;

  useEffect(() => {
    if (!entry) return;

    const currentY = entry.boundingClientRect.y;
    const currentRatio = entry.intersectionRatio;
    const isIntersecting = entry.isIntersecting;

    const myImage = entry.target.querySelector<HTMLElement>("#animated_image");
    const circle = entry.target.querySelector<HTMLElement>("#animated_circle");

    if (myImage !== null && circle !== null) {
      let { width, height } = entry.target.getBoundingClientRect();
      let { width: boxW, height: boxH } = myImage.getBoundingClientRect();

      let tX = (width / 2 + boxW / 2) * currentRatio;
      let tY = (height / 2 + boxH / 2) * currentRatio;

      if (circle !== null) {
        circle.style.transform = `scale(${entry.intersectionRatio})`;
        circle.style.opacity = `${entry.intersectionRatio}`;
      }

      if (currentY < previousY) {
        if (currentRatio > previousRatio && isIntersecting) {
          console.log("Scrolling down enter");
          circle.style.transform = `scale(1)`;
          circle.style.opacity = "1";
          tX = width / 2 + boxW / 2;
          tY = height / 2 + boxH / 2;
        }
      }

      if (isIntersecting) {
        if (isEven) {
          myImage.style.transform = `translate(-${tX}px, -${tY}px)`;
        } else {
          myImage.style.transform = `translate(${tX}px, -${tY}px)`;
        }
      }

      previousY = currentY;
      previousRatio = currentRatio;
    }
  }, [entry]);

  return (
    <div
      className="flex-1 w-full
    lg:py-[5rem]
    "
    >
      <div
        className="relative flex items-center justify-center py-[10rem] overflow-hidden
        "
        ref={ref}
      >
        {/* Animated Circle */}
        <div
          id="animated_circle"
          style={{
            backgroundImage: sectionData.circleBg,
          }}
          className="w-[200px] h-[200px] rounded-full scale-0 transition-all 
          sm:w-[240px] sm:h-[240px]
          md:w-[280px] md:h-[280px]
          lg:w-[400px] lg:h-[400px]
          "
        />
        {/* Animated Image */}
        <div
          id="animated_image"
          className={`absolute w-[80%] h-[80%]
          xs:w-[60%] xs:h-[60%]
          lg:w-[80%] lg:h-[80%]
          ${isEven ? `top-full left-full` : `top-full right-full`}
          `}
        >
          <div className="w-full h-full relative">
            <Image
              alt={sectionData.title}
              src={sectionData.animatedImg}
              layout="fill"
              objectFit="contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedImage;
