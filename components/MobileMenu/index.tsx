import Link from "next/link";

// Constants
import { pages } from "../../constants/index";

type menuProps = {
  isMenuOpen: boolean;
};

const index = ({ isMenuOpen }: menuProps) => {
  return (
    <menu
      className="flex justify-center items-center -z-10
    menu:hidden"
    >
      {/* DropDown Menu */}
      <div
        className={`w-screen h-screen bg-darkBg absolute left-0 transition-all duration-500 flex flex-col justify-between items-center
        ${isMenuOpen ? `top-full -translate-y-[80px]` : `-top-[1500%]`}
        `}
      >
        <ul className="grid justify-items-center text-[1.65rem] text-white mt-[90px]">
          {pages.map((page) => (
            <li className="py-3 first-letter:uppercase" key={page.name}>
              <Link href={page.url}>{page.name}</Link>
            </li>
          ))}
        </ul>
        {/* Button */}
        <Link href="/">
          <a>
            <button className="w-screen bg-primary text-center uppercase text-black text-lg leading-4 py-5">
              request a quote
            </button>
          </a>
        </Link>
      </div>
    </menu>
  );
};

export default index;
