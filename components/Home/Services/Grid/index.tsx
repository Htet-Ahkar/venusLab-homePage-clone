// Constants
import Image from "next/image";
import { servicesSectionData } from "../../../../constants/index";

const index = () => {
  return (
    <div
      className="grid grid-cols-1 gap-20 py-20 px-5
    sm:px-10
    lg:px-5 lg:grid-cols-2
    "
    >
      {servicesSectionData.map((service) => (
        <div
          key={service.title}
          className="flex flex-col items-center gap-10 text-center
          lg:px-28
          "
        >
          {/* Image */}
          <div
            className="relative w-1/2 h-32
          lg:w-full lg:h-40
          "
          >
            <Image
              alt={service.title}
              src={service.img}
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* Title */}
          <h1
            className="text-2xl font-extrabold
          md:text-3xl
          "
          >
            {service.title}
          </h1>
          {/* Text  */}
          <p
            className="
          md:text-lg
          "
          >
            {service.para}
          </p>
        </div>
      ))}
    </div>
  );
};

export default index;
