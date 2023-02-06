import { motion } from 'framer-motion'
import { mainVariants, mainTextA, mainTextB } from '../utils/motion'


const img: string = new URL("../images/banner-main.jpg", import.meta.url).href

const Main = () => {
  return (
    <div id="main" aria-label='main section'>
      <img src={img} className="w-full h-screen object-cover scale-x-[1]" alt='background image' />
      <div className='w-full h-screen absolute top-0 left-0 bg-gray-200/90 dark:bg-neutral-900/90'>
        <motion.div className='max-w-[700px] m-auto h-screen w-full flex flex-col justify-center lg:items-start items-center'
          variants={mainVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}>
          <motion.h1 className='sm:text-5xl text-4xl font-bold text-gray-800 dark:text-white'
            variants={mainTextA}>I am Jonathan</motion.h1>
          <motion.h2 className='sm:text-3xl text-2xl text gray-600 dark:text-gray-300'
            variants={mainTextB}>I'm a Web Developer</motion.h2>
        </motion.div>

      </div>
    </div>
  )
}

export default Main