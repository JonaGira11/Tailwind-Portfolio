import { motion } from "framer-motion"
import { staggerChildren } from "../utils/motion"
type PropjectItemProps = {
  title: string,
  demo: string,
  github: string,
  image: string
}

const ProjectItem = ({ title, demo, github, image }: PropjectItemProps) => {
  return (
    <motion.div className=' relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-700    rounded-xl group hover:bg-gradient-to-r from-gray-200 to-sky-600'
      variants={staggerChildren}>
      <img src={image} alt={title} className='aspect-[4/3] object-cover rounded-xl group-hover:opacity-10' width={450} height={450} />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]'>
        <h3 className='font-bold text-2xl text-white tracking-wider text-center'>
          {title}
        </h3>
        <a href={github} target="_blank" >
          <p className='max-w-[120px] my-3 text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>GitHub</p>
        </a>
        <a href={demo} target="_blank" >
          <p className='max-w-[120px] text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>Demo</p>
        </a>

      </div>
    </motion.div>
  )
}

export default ProjectItem