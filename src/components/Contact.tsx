import { motion } from "framer-motion"
import SubheadingText from "./SubheadingText"
import { outterContainer, headingVariants, formVariants } from "../utils/motion"

export const Contact = () => {
    return (
        <section id='contact' className="pt-3 dark:bg-neutral-800 " aria-label='contact section'>
            <motion.div className=' max-w-5xl mx-auto p-4  pt-8 md:pt-10 md:pl-20 '
                variants={outterContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}>
                <div className="pb-10">
                    <motion.h2 className=" md:text-4xl text-2xl font-bold text-center text-sky-700 border-b-4 border-sky-700 inline tracking-wider"
                        variants={headingVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}>CONTACT</motion.h2>
                </div>

                <SubheadingText text="Get in contact with me " />
<motion.div className="bg-gray-500/30 p-4 border max-w-[500px] mx-auto rounded-xl border-none mt-4"
  viewport={{ once: true }}
  initial="hidden"
  whileInView="show"
  variants={formVariants}>
                <form action='https://getform.io/f/58db4c0c-b262-405f-ba7b-0adf98c43ef0' method='POST' encType="multipart/form-data">
                       
                    <div className='flex flex-col  '>
                        <label className='uppercase text-sm py-2 text-stone-400 font-semibold'>Name</label>
                        <input type="text" name="name" required
                            className='border-2 rounded-lg p-3 border-gray-300  flex dark:bg-neutral-800 dark:text-white' />
                    </div>
                    <div className='flex flex-col  '>
                        <label className='uppercase text-sm py-2 text-stone-400 font-semibold'>Email</label>
                        <input className='max-w-[600px] border-2 rounded-lg p-3 border-gray-300  dark:bg-neutral-800 dark:text-white' type="email" name="email" required />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 text-stone-400 font-semibold'>Subject</label>
                        <input className='border-2 rounded-lg p-3 border-gray-300  dark:bg-neutral-800 dark:text-white' type="text" name="subject"  required/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 text-stone-400 font-semibold'>Message</label>
                        <textarea className='accent-neutral-300 border-2 rounded-lg p-3 border-gray-300 resize-none dark:bg-neutral-800 dark:text-white' rows={5} name="message" required></textarea>
                    </div>
                    <div className="grid place-content-center">
                    <button className='bg-sky-800 text-gray-100 mt-4  w-60 rounded-lg p-4 hover:bg-sky-900 ' type='submit'>Send Message</button>
                    </div>
                </form>
                </motion.div>
            </motion.div>
        </section>
    )
}
