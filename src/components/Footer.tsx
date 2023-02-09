import { AiOutlineTwitter, AiOutlineGithub, AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  const year: number = new Date().getFullYear()
  return (
    <footer className='flex justify-center items-center sm:py-8 py-6 flex-col px-10 dark:bg-neutral-800'>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[2px] border-t-[#3F3E45]">
        <p className="font-normal text-center text-[18px] leading-[27px] text-neutral-600">
          Copyright Ⓒ {year} Jonathan
        </p>


        <div className="flex flex-row md:mt-0 mt-6">
          <a href="https://twitter.com/j_sallz11" className="text-neutral-600 mr-3 dark:text-white hover:scale-110 duration-300" aria-label="twitter link" target="_blank">
            <AiOutlineTwitter size={30} />
          </a>
          <a href="https://github.com/JonaGira11"className="text-neutral-600 mr-3 dark:text-white hover:scale-110 duration-300" aria-label="github link" target="_blank">
            <AiOutlineGithub size={30}/>
          </a>
          <a href="https://www.linkedin.com/in/jonathan-giraldo-mosquera-b53083238/" className="text-neutral-600 mr-3 dark:text-white hover:scale-110 duration-300"
          aria-label="linkedin link" target="_blank">
            <AiFillLinkedin size={30}/>
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer