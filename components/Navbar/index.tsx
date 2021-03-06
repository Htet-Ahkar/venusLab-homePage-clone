import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Constants
import { pages } from "../../constants/index";

// Components
import { PrimaryButton } from "../Buttons/index";
import { MobileMenu } from "..";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffsetY(window.scrollY);
    };
  }, []);

  useEffect(() => {
    offsetY > 0 ? setIsScroll(true) : setIsScroll(false);

    return () => {};
  }, [offsetY]);

  // Lock Scroll (Not really necessary tough)
  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");

    return () => {};
  }, [isMenuOpen]);

  return (
    <header
      className="w-full fixed top-0 left-0 flex align-middle justify-center min-h-[80px] text-stone-200 z-20
    "
    >
      <div
        className={`w-full px-4 flex gap-10 justify-between align-middle bg-navbarBg transition-all duration-500
      md:px-5
      ${isScroll ? "" : "lg:pt-10 lg:pb-5 lg:px-10"}
      `}
      >
        {/* Logo Container */}
        <div className="w-full h-full flex items-center relative">
          <div
            className={`flex justify-start items-center w-full h-full absolute left-0 transition-all duration-500
        ${isMenuOpen && `-translate-x-[90px] left-1/2 mt-[30px]`}
        `}
          >
            <Link href="/">
              <a>
                <Image
                  src="https://www.venuslab.co/icons/logo.svg"
                  width={180}
                  height={90}
                  alt="Venuslab Logo"
                />
              </a>
            </Link>
          </div>
        </div>
        {/* Nav Container */}
        <nav
          className="h-full justify-center items-center hidden
        menu:flex"
        >
          <ul
            className="h-full flex gap-11 justify-center items-center uppercase leading-4 text-sm
            menu:text-lg"
          >
            {pages.map((page) => (
              <li
                key={page.name}
                className="flex flex-col items-center
              after:content-[''] after:block after:w-0 after:h-[1px] after:bg-slate-50 rounded-3xl text-sm
              after:transition-all after:duration-500
              hover:after:w-11/12
              lg:text-base
              "
              >
                <Link href={page.url}>{page.name}</Link>
              </li>
            ))}
            <li>
              <PrimaryButton>request a quote</PrimaryButton>
            </li>
          </ul>
        </nav>
        {/* Hamburger Menu */}
        <div
          className="cursor-pointer flex justify-center items-center z-20
          menu:hidden"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Navbar;
