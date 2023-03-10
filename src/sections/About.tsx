import { aboutPara } from "../constants/data"
import ParaText from "../components/ParaText"
import { motion } from "framer-motion"
import { outterContainer, headingVariants, slideIn,formVariants } from "../utils/motion"


const About = () => {
  return (
    <section id='about' className="py-5 dark:bg-neutral-800  overflow-hidden" aria-label="about section">
      <motion.div className=' max-w-5xl mx-auto p-4 py-8 md:py-10 md:pl-20 '
        variants={outterContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}>
        <div className="pb-10">
          <motion.h2 className=" md:text-4xl text-2xl font-bold text-center text-sky-700 border-b-4 border-sky-700 inline tracking-wider"
            variants={headingVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >ABOUT</motion.h2>
        </div>

        {aboutPara.map((aboutpara) => (
          <motion.div
          key={aboutpara.id}
           variants={slideIn}
          viewport={{ once: true, amount: 0.1 }} >
            <ParaText  >{aboutpara.para}</ParaText>
          </motion.div>
        ))}
        <motion.div className="pt-8 flex justify-center "
        variants={formVariants}>
          <a className="bg-sky-800 p-3 rounded-xl text-gray-100 hover:bg-sky-400 point-cursor"
        href="#contact">
          Contact Me
          </a>
        </motion.div>
        
        
      </motion.div>

    </section>
  )
}

export default About