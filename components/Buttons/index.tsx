import { url } from "inspector";

// Types
type buttonsProps = {
  children: string;
};

export const PrimaryButton = ({ children }: buttonsProps) => {
  return (
    <button
      className="uppercase bg-primary w-40 h-10 rounded-[40px] text-black flex justify-center items-center relative
    before:content-[''] before:table before:absolute before:w-0 before:h-0 before:bg-white before:rounded-[40px]
    before:transition-all before:duration-500 before:ease-accelerate-ease
    hover:before:w-11/12 hover:before:h-5/6"
    >
      <div className="w-full h-full absolute flex justify-center items-center text-base">
        {children}
      </div>
    </button>
  );
};

export const SecondaryButton = ({ children }: buttonsProps) => {
  return (
    <button
      className="text-black bg-white mt-5 mr-2 rounded-[30px] text-[0.9em] font-light tracking-[2px] items-center transition-all duration-300 bg-[url('https://www.venuslab.co/icons/arrow.png')] bg-contain bg-center bg-no-repeat
      hover:shadow-lg
    "
    >
      <div
        className="px-7 py-2 bg-[#eee] rounded-[30px] transition-all duration-300
        hover:translate-x-3 hover:-translate-y-3 hover:opacity-75
      "
      >
        {children}
      </div>
    </button>
  );
};
