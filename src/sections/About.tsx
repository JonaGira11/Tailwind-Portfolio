import { aboutPara } from "../constants/data"
import ParaText from "../components/ParaText"
import { skillsInfo } from "../constants/data"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section id='about' className="py-5 dark:bg-neutral-800 " aria-label="about section">
      <div className=' max-w-5xl mx-auto p-4 py-16 md:pl-20 '>
        <div className="pb-10">
          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'tween',
                  ease: 'easeIn',
                  duration: 1
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            className=" md:text-4xl text-2xl font-bold text-center text-sky-700 border-b-4 border-sky-700 inline tracking-wider">ABOUT</motion.h2>
        </div>

        {aboutPara.map((aboutpara) => (
          <ParaText key={aboutpara.id}>{aboutpara.para}</ParaText>
        ))}
        <div className="py-10">
          <motion.h3
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'tween',
                  ease: 'easeIn',
                  duration: 1
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            className=" mt-10 md:text-3xl text-2xl font-bold text-center text-sky-700 border-sky-700 border-b-4 pb-2 inline tracking-wider">SKILLS</motion.h3>
        </div>

        <p className="py-4 text-stone-400 text-base font-semibold">Here are some of the technolgies I worked with</p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-12 sm:px-0">
          {skillsInfo.map(({ id, src, title, style }) => (
            <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  shadow-black/50 ${style}`} key={id}>
              <img src={src} alt={`${title}-logo`} className="w-20 mx-auto" />
              <p className="text-center mt-4 font-semibold text-stone-400">{title}</p>
            </div>


          ))}
        </div>

      </div>

    </section>
  )
}

export default About