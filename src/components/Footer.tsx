import { AiOutlineTwitter, AiOutlineGithub, AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  const year: number = new Date().getFullYear()
  return (
    <footer className='flex justify-center items-center sm:py-16 py-6 flex-col px-10 dark:bg-neutral-800'>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[2px] border-t-[#3F3E45]">
        <p className="font-normal text-center text-[18px] leading-[27px] text-neutral-600">
          Copyright Ⓒ {year} Jonathan
        </p>


        <div className="flex flex-row md:mt-0 mt-6">
          <a href="#" className="text-neutral-600 mr-3 dark:text-white">
            <AiOutlineTwitter size={30} />
          </a>
          <a href="#"className="text-neutral-600 mr-3 dark:text-white">
            <AiOutlineGithub size={30}/>
          </a>
          <a href="#" className="text-neutral-600 mr-3 dark:text-white">
            <AiFillLinkedin size={30}/>
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer