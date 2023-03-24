import { motion } from "framer-motion"
import SubheadingText from "./SubheadingText"
import { outterContainer, headingVariants, formVariants } from "../utils/motion"
import {z, ZodType} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import emailjs from '@emailjs/browser';
import { ReactEventHandler, useRef } from "react"

export const Contact = () => {


const form = useRef<HTMLFormElement>(null)
type FormData = {
    name: string;
    email: string;
    subject:string;
    message: string;
};
const schema:ZodType<FormData> = z.object({
    name: z.string().min(2).max(30),
    email: z.string().email(),
    subject: z.string().min(2).max(30),
    message: z.string().min(3).max(150),
});
const {handleSubmit, register, formState: {errors}} = useForm<FormData>({ resolver: zodResolver(schema)})

const submitData = (data:FormData) => {

emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current as HTMLFormElement, import.meta.env.VITE_PUBLIC_KEY )
alert("message sent")
form.current?.reset()
}

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
<motion.div className="bg-gray-500/30 p-4 border max-w-[500px] mx-auto rounded-xl border-none mt-4 shadow-md shadow-gray-400 dark:shadow-black/20"
  viewport={{ once: true }}
  initial="hidden"
  whileInView="show"
  variants={formVariants}>
                <form   ref={form} onSubmit={handleSubmit(submitData)}>
                       
                    <div className='flex flex-col  '>
                        <label className='uppercase text-sm py-2 text-stone-400 font-semibold'>Name</label>
                        <input type="text"  required {...register("name")}
                            className='border-2 rounded-lg p-3 border-gray-300  flex dark:bg-neutral-800 dark:text-white' />
                            {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                    </div>
                    <div className='flex flex-col  '>
                        <label className='uppercase text-sm py-2 text-stone-400 font-semibold'>Email</label>
                        <input className='max-w-[600px] border-2 rounded-lg p-3 border-gray-300  dark:bg-neutral-800 dark:text-white' type="email"  required {...register("email")} />
                        {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 text-stone-400 font-semibold'>Subject</label>
                        <input className='border-2 rounded-lg p-3 border-gray-300  dark:bg-neutral-800 dark:text-white' type="text" {...register("subject")}  required/>
                        {errors.subject && <span className="text-red-600">{errors.subject.message}</span>}
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2 text-stone-400 font-semibold'>Message</label>
                        <textarea className='accent-neutral-300 border-2 rounded-lg p-3 border-gray-300 resize-none dark:bg-neutral-800 dark:text-white' rows={5} {...register("message")} required></textarea>
                        {errors.message && <span className="text-red-600">{errors.message.message}</span>}
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
