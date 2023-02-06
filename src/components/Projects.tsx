import { motion } from 'framer-motion'
import ProjectItem from './ProjectItem'
import { Portfolio } from '../constants/data'
import SubheadingText from './SubheadingText'

const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.4 },
    },
  };

const Projects = () => {
    return (
        <section id='projects' className="py-5  dark:bg-neutral-800 " aria-label='projects section'>
            <motion.div
                variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren:0.04,
                        delayChildren:0.04,
                      },
                    },
                  }}
                  initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
             className=' max-w-5xl mx-auto p-4 py-16 md:pl-20'>
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
                        className=" md:text-4xl text-2xl font-bold text-center text-sky-700 border-b-4 border-sky-700 inline tracking-wider">PROJECTS</motion.h2>
                </div>

                <SubheadingText text='Here are some of the projects I have made using the skills I have' />
                <motion.div className='grid sm:grid-cols-2 gap-12'
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false, amount: 0.5 }}
                 variants={container}>
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