/* eslint-disable @next/next/no-img-element */
type sectionProps = {
  index: number;
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

// Components
import AnimatedImage from "./AnimatedImage";

// Button
import { SecondaryButton } from "../../Buttons/index";

const index = ({ index, sectionData }: sectionProps) => {
  const isEven = index % 2 ? true : false;

  return (
    <section
      style={{
        color: sectionData.color,
        backgroundColor: sectionData.bgColor,
        clipPath: isEven
          ? `polygon(0 4%, 100% 0, 100% 100%, 0 96%)`
          : `polygon(0 0, 100% 4%, 100% 96%, 0 100%)`,
      }}
      className={`w-full -z-10 mt-[-19%]
      sm:mt-[-15%]
      md:mt-[-6%]
      lg:mt-[-12%]
      xl:mt-[-12%]
  `}
    >
      <div
        className={`w-full flex justify-center items-center flex-col-reverse
        ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
        `}
      >
        {/* Content */}
        <div
          className="flex-1 px-3 pb-[29%]
      sm:pb-[15%] sm:px-10
      md:pb-[7%]
      lg:py-36 lg:px-16"
        >
          {/* Header */}
          <img alt={sectionData.title} src={sectionData.logo} />
          <h1
            className="text-4xl font-[1000] py-3
          lg:text-7xl"
          >
            {sectionData.title}
          </h1>
          {/* Subtitle */}
          <p className="pb-3 font-extralight">{sectionData.subtitle}</p>
          {/* Body */}
          <p className="text-lg leading-6">{sectionData.para}</p>
          {/* button */}
          <div className="flex flex-row-reverse">
            <SecondaryButton>more</SecondaryButton>
          </div>
        </div>

        {/* Animated Image */}
        <AnimatedImage sectionData={sectionData} isEven={isEven} />
      </div>
    </section>
  );
};

export default index;
