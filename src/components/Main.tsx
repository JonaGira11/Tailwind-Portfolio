import {motion} from 'framer-motion'
const staggerContainer = (staggerChildren:any, delayChildren:any) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});


const img: string = new URL("../images/banner-main.jpg", import.meta.url).href

const Main = () => {
  return (
    <div id="main" aria-label='main section'>
      <img src={img} className="w-full h-screen object-cover scale-x-[1]" alt='background image' />
      <div className='w-full h-screen absolute top-0 left-0 bg-gray-200/90 dark:bg-neutral-900/90'>

        <motion.div 
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren:1,
              delayChildren:1,
            },
          },
        }}
        initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
        className='max-w-[700px] m-auto h-screen w-full flex flex-col justify-center lg:items-start items-center'>
          <motion.h1 
          variants={{hidden: {
            y: 50,
            opacity: 0,
          },
          show: {
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              duration: 1,
              delay:0.5
            
            },
          }}}
          className='sm:text-5xl text-4xl font-bold text-gray-800 dark:text-white '>
            I am Jonathan</motion.h1>
          <motion.h2 
          variants={{hidden: {
            y: 50,
            opacity: 0,
          },
          show: {
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              duration: 1.1,
              delay:0.7
            
            },
          }}}
          className='sm:text-3xl text-2xl text gray-600 dark:text-gray-300'>I'm a Web Developer</motion.h2>
        </motion.div>

      </div>
    </div>
  )
}

export default Main