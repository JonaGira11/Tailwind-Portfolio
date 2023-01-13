import { AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMacCommand, AiOutlineMail } from "react-icons/ai"
import {WiMoonAltWaxingCrescent4} from "react-icons/wi"
import { useState } from "react"
import useColorMode from "../hooks/use.ColorMode"


const Sidenav = () => {

    const [nav, setNav] = useState<boolean>(false)

    const [colorMode, setColorMode] = useColorMode();

   const handleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" :"light")
   }

    const handleNav = () => {
        setNav(!nav)
        console.log("state changed")
    }

    return (
        <div>
            <AiOutlineMenu size={25} className=" cursor-pointer absolute top-4 right-4 z-[99] md:hidden" onClick={handleNav} />{
                nav ? (
                    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                        <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in ">
                            <AiOutlineHome size={20} />
                            <span className="pl-4">Home</span>
                        </a>
                        <a href="#about" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-800 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in ">
                            <AiOutlineUser  className="text-white" size={20}   />
                            <span className="pl-4">About</span>
                        </a>
                        <a href="#projects" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in ">
                            <AiOutlineProject size={20} />
                            <span className="pl-4">Projects</span>
                        </a>
                        <a href="#contact" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in ">
                            <AiOutlineMail size={20} />
                            <span className="pl-4">Contact</span>
                        </a>
                        <button className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in ">
                        <WiMoonAltWaxingCrescent4 size={20} />
                            <span className="pl-4">Switch Theme</span>
                        </button>

                    </div>
                ) : (
                    null
                )
            }
            <div className="md:block hidden fixed  top-[25%] z-10">
                <div className="flex flex-col ">
                    <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#about" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineUser size={20} />
                    </a>
                    <a href="#projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineProject size={20} />
                    </a>
                    <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail size={20} />
                    </a>
                    <button 
                    onClick={handleColorMode}
                    className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2  p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-blue-300 dark:text-white">
                    <WiMoonAltWaxingCrescent4 size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidenav