import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import useColorMode from "../hooks/use.ColorMode";
import { motion } from "framer-motion";

const Sidenav = () => {
  const [nav, setNav] = useState<boolean>(false);

  const [colorMode, setColorMode] = useColorMode();

  const handleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      {/* toggle dark mode */}

      <button
        onClick={handleColorMode}
        className=" cursor-pointer absolute top-4 right-12 mr-4 z-[10] text-gray-700 dark:text-white"
      >
        {colorMode === "light" ? (
          <BsFillMoonStarsFill size={25} aria-label="dark mode" />
        ) : (
          <BsFillSunFill size={25} aria-label="light mode" />
        )}
      </button>
      {/* small screens */}

      {!nav ? (
        <HiMenu
          size={28}
          aria-label="menu open"
          className=" cursor-pointer absolute top-4 right-4 z-[99] md:hidden  text-gray-700 dark:text-white"
          onClick={handleNav}
        />
      ) : (
        <HiOutlineX
          size={28}
          aria-label="menu close"
          className=" cursor-pointer absolute top-4 right-4 z-[99] md:hidden  text-gray-700 dark:text-white"
          onClick={handleNav}
        />
      )}
      {nav ? (
        <div className="fixed w-full h-screen bg-white/50 flex flex-col justify-center items-center z-20 md:hidden dark:bg-zinc-700/60">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in dark:bg-zinc-600  dark:text-white dark:shadow-zinc-900 "
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in dark:bg-zinc-600  dark:text-white dark:shadow-zinc-900"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in dark:bg-zinc-600  dark:text-white dark:shadow-zinc-900"
          >
            <AiOutlineUser size={20} />
            <span className="pl-4">About</span>
          </a>

          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in dark:bg-zinc-600  dark:text-white dark:shadow-zinc-900"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : null}
      {/* large screens */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="md:block hidden fixed  top-[25%] z-10"
      >
        <div className="flex flex-col ">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-100 dark:bg-zinc-600  dark:text-white dark:shadow-zinc-700"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-100 dark:bg-zinc-600  dark:text-white dark:shadow-zinc-700"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#about"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-100 dark:bg-zinc-600  dark:text-white dark:shadow-zinc-700"
          >
            <AiOutlineUser size={20} />
          </a>

          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-100 dark:bg-zinc-600  dark:text-white dark:shadow-zinc-700"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidenav;
