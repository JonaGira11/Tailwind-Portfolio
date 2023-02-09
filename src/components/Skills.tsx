import { skillsInfo } from "../constants/data"
import { motion } from "framer-motion"
import SubheadingText from "../components/SubheadingText"
import { outterContainer, headingVariants, slideIn, staggerChildren, staggerContainer } from "../utils/motion"


const Skills = () => {
  return (
    <section id='skills' className="py-5 dark:bg-neutral-800  overflow-hidden" aria-label="about section">
      <motion.div className=' max-w-5xl mx-auto p-4 py-8 md:py-10 md:pl-20 '
        variants={outterContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}>

        <div className="py-10">
          <motion.h3 className=" mt-10 md:text-3xl text-2xl font-bold text-center text-sky-700 border-sky-700 border-b-4 pb-2 inline tracking-wider"
            variants={headingVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >SKILLS</motion.h3>
        </div>
        <SubheadingText text="Technologies I have worked with" />
        <motion.div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-12 sm:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerContainer} >
          {skillsInfo.map(({ id, src, title, style }) => (
            <motion.div
              variants={staggerChildren} >
              <div
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  shadow-black/50 ${style}`} key={id}>
                <img src={src} alt={`${title}-logo`} className="w-20 mx-auto" />
                <p className="text-center mt-4 font-semibold text-stone-400">{title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>

    </section>
  )
}

export default Skills