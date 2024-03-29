import { motion } from "framer-motion";
import { mainVariants, mainTextA, mainTextB, formVariants } from "../utils/motion";
import { TypeAnimation } from "react-type-animation";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const img: string = new URL("../images/banner-main.webp", import.meta.url).href;

const Main = () => {
  return (
    <div id="main" aria-label="main section">
      <img
        src={img}
        className="w-full h-screen object-cover scale-x-[1]"
        alt="background image"
        width={2000}
        height={1500}
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-gray-200/90 dark:bg-neutral-900/90">
        <motion.div
          className="max-w-[700px] m-auto h-screen w-full flex flex-col justify-center lg:items-start items-center"
          variants={mainVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h1
            className="sm:text-5xl text-4xl font-bold text-gray-800 dark:text-white"
            variants={mainTextA}
          >
            Hi! I'm Jonathan
          </motion.h1>
          <motion.h2
            className="flex sm:text-3xl text-2xl text gray-600 dark:text-gray-300 font-semibold"
            variants={mainTextB}
          >
            I'm a
            <TypeAnimation
              sequence={[
                "Coder", // Types 'One'
                2000, // Waits 1s
                "Full-Stack Developer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech Enthusiast", // Types 'Three' without deleting 'Two'
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "6px" }}
            />
          </motion.h2>

<motion.div
variants={formVariants}>
          <div className="flex justify-center pt-6">
            <a
              href="https://twitter.com/j_sallz11"
              className="text-neutral-600 mr-3 dark:text-white hover:scale-110 duration-300"
              aria-label="twitter link"
              target="_blank"
            >
              <AiOutlineTwitter size={30} />
            </a>
            <a
              href="https://github.com/JonaGira11"
              className="text-neutral-600 mr-3 dark:text-white hover:scale-110 duration-300"
              aria-label="github link"
              target="_blank"
            >
              <AiOutlineGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-giraldo-mosquera-b53083238/"
              className="text-neutral-600 mr-3 dark:text-white hover:scale-110 duration-300"
              aria-label="linkedin link"
              target="_blank"
            >
              <AiFillLinkedin size={30} />
            </a>
          </div>
          <div className="pt-8 ">
            <a
              className="bg-sky-800 p-3 rounded-xl text-gray-100 hover:bg-sky-400 point-cursor"
              href="#contact"
            >
              Contact Me
            </a>
            <a
              className="bg-sky-800 p-3 rounded-xl text-gray-100 hover:bg-sky-400 point-cursor ml-3"
              href="#projects"
            >
              See Work
            </a>
          </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
