import { AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail } from "react-icons/ai"
import { WiMoonAltWaxingCrescent4 } from "react-icons/wi"
import {FiSun} from "react-icons/fi"
import { useState } from "react"
import useColorMode from "../hooks/use.ColorMode"


const Sidenav = () => {

    const [nav, setNav] = useState<boolean>(false)

    const [colorMode, setColorMode] = useColorMode();

    const handleColorMode = () => {
        setColorMode(colorMode === "light" ? "dark" : "light")
    }
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            {/* small screens */}
            
            <AiOutlineMenu size={25} className=" cursor-pointer absolute top-4 right-4 z-[99] md:hidden dark:text-white" onClick={handleNav} />{
                nav ? (
                    <div className="fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20 md:hidden dark:bg-zinc-700">
                        <a 
                         onClick={handleNav}  
                        href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in dark:bg-zinc-600  dark:text-white dark:shadow-zinc-900 ">
                            <AiOutlineHome size={20} />
                            <span className="pl-4">Home</span>
                        </a>
                        <a onClick={handleNav} href="#about" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in dark:bg-zinc-600  dark:text-white dark:shadow-zinc-900">
                            <AiOutlineUser size={20} />
                            <span className="pl-4">About</span>
                        </a>
                        <a  onClick={handleNav}  href="#projects" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in dark:bg-zinc-600  dark:text-white dark:shadow-zinc-900">
                            <AiOutlineProject size={20} />
                            <span className="pl-4">Projects</span>
                        </a>
                        <a onClick={handleNav}  href="#contact" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in dark:bg-zinc-600  dark:text-white dark:shadow-zinc-900">
                            <AiOutlineMail size={20} />
                            <span className="pl-4">Contact</span>
                        </a>
                        <button
                            onClick={handleColorMode}
                            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in dark:bg-zinc-600  dark:text-white dark:shadow-zinc-900">
                               {
                                (colorMode === "light")?
                                <WiMoonAltWaxingCrescent4 size={20} />:
                                <FiSun size={20}/>
                            }
                            <span className="pl-4">Switch Theme</span>
                        </button>

                    </div>
                ) : (
                    null
                )
            }
            {/* large screens */}
            <div className="md:block hidden fixed  top-[25%] z-10">
                <div className="flex flex-col ">
                    <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-100 dark:bg-zinc-600  dark:text-white dark:shadow-zinc-700">
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#about" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-100 dark:bg-zinc-600  dark:text-white dark:shadow-zinc-700">
                        <AiOutlineUser size={20} />
                    </a>
                    <a href="#projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-100 dark:bg-zinc-600  dark:text-white dark:shadow-zinc-700">
                        <AiOutlineProject size={20} />
                    </a>
                    <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-100 dark:bg-zinc-600  dark:text-white dark:shadow-zinc-700">
                        <AiOutlineMail size={20} />
                    </a>
                    <button
                        onClick={handleColorMode}
                        className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-100 dark:bg-zinc-600  dark:text-white dark:shadow-gray-600">
                            {
                                (colorMode === "light")?
                                <WiMoonAltWaxingCrescent4 size={20} />:
                                <FiSun size={20}/>
                            }
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidenav