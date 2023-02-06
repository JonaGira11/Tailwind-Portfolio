import { motion } from "framer-motion"
import SubheadingText from "./SubheadingText"

export const Contact = () => {
    return (
        <section id='contact' className="pt-3 dark:bg-neutral-800 " aria-label='contact section'>
            <motion.div className=' max-w-5xl mx-auto p-4  pt-16 md:pl-20'
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.04,
                            delayChildren: 0.04,
                        },
                    },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}>
                <div className="pb-10">
                    <motion.h2 className=" md:text-4xl text-2xl font-bold text-center text-sky-700 border-b-4 border-sky-700 inline tracking-wider"
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
                        whileInView="show">CONTACT</motion.h2>
                </div>

                <SubheadingText text="Get in contact with me " />
                <motion.form action='https://getform.io/f/58db4c0c-b262-405f-ba7b-0adf98c43ef0' method='POST' encType="multipart/form-data"
                    initial="hidden"
                    whileInView="show"
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 50,
                            transition: {
                                type: 'spring',
                                stiffness: 300,
                                damping: 140,
                            },
                        },
                        show: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: 'spring',
                                stiffness: 80,
                                delay: 0.5,
                            },
                        },
                    }}>

                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2 text-stone-400 font-semibold'>Name</label>
                        <input type="text" name="name"
                            className='border-2 rounded-lg p-3 border-gray-300  flex dark:bg-stone-800 dark:text-white' />
                    </div>
                    <div className='flex flex-col py-2 '>
                        <label className='uppercase text-sm py-2 text-stone-400 font-semibold'>Email</label>
                        <input className='border-2 rounded-lg p-3 dark:bg-stone-800 dark:text-white' type="email" name="email" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2 text-stone-400 font-semibold'>Subject</label>
                        <input className='border-2 rounded-lg p-3 border-gray-300  dark:bg-stone-800 dark:text-white' type="text" name="subject" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2 text-stone-400 font-semibold'>Message</label>
                        <textarea className='accent-neutral-300 border-2 rounded-lg p-3 border-gray-300 resize-none dark:bg-stone-800 dark:text-white' rows={10} name="message"></textarea>
                    </div>
                    <button className='bg-sky-800 text-gray-100 mt-4 w-full rounded-lg p-4 hover:bg-sky-900' type='submit'>Send Message</button>
                </motion.form>
            </motion.div>
        </section>
    )
}
