// Components
import Grid from "./Grid/index";

const index = () => {
  return (
    <section
      className="w-full flex flex-col items-center px-3 bg-services bg-cover bg-inherit bg-no-repeat text-white mt-[-15%] pt-[55%] -z-20
      sm:pt-[30%]
      md:pt-[25%]
      lg:bg-center  lg:pt-[20%]
    "
    >
      {/* Headings */}
      <h1
        className="text-primary uppercase text-center text-[1.7rem] font-extrabold w-full
      md:text-[2.8rem]"
      >
        what we can do
        <br />
        for you and your business
      </h1>
      {/* Services Components */}
      <Grid />
      {/* Footer */}
      <div className="w-full text-center">
        <h1
          className="text-[2.5rem] uppercase text-primary
        xs:text-[3rem]
        md:text-[5rem]"
        >{`let's talk`}</h1>
        <p
          className="text-base px-[20%] my-5
          sm:px-[25%]
          md:text-xl
          lg:px-[30%]
          "
        >
          {`Wheather you're interested in working with us or for us, we're always happy to chat.`}
        </p>
      </div>
      {/* Button */}
    </section>
  );
};

export default index;
