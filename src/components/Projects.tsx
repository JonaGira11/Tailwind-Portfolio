import { motion } from 'framer-motion'
import ProjectItem from './ProjectItem'
import { Portfolio } from '../constants/data'
import SubheadingText from './SubheadingText'
import { outterContainer, headingVariants, projectsContainer } from "../utils/motion"

const Projects = () => {
    return (
        <section id='projects' className="py-5  dark:bg-neutral-800 " aria-label='projects section'>
            <motion.div className=' max-w-5xl mx-auto p-4 py-16 md:pl-20'
                variants={outterContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }} >
                <div className="pb-10">
                    <motion.h2 className=" md:text-4xl text-2xl font-bold text-center text-sky-700 border-b-4 border-sky-700 inline tracking-wider"
                        variants={headingVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >PROJECTS</motion.h2>
                </div>

                <SubheadingText text="Some of my Projects" />

                <motion.div className='grid sm:grid-cols-2 gap-12 pt-8'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={projectsContainer}>
                    {Portfolio.map((portdata => (
                        <ProjectItem
                            key={portdata.id}
                            title={portdata.title}
                            image={portdata.image}
                            demo={portdata.demo}
                            github={portdata.github}
                        />
                    )))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Projects