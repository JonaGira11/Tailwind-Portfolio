import { motion } from "framer-motion"
import { subheadingVariantsP, subheadingVariantsS } from "../utils/motion"

type PropsType = {
    text: string
}

const SubheadingText = ({text}:PropsType) => {
  return (
    <motion.p className=" text-stone-400 text-base font-semibold"
    variants={subheadingVariantsP}
    viewport={{ once: true, amount: 0.5 }} >
  {Array.from(text).map((letter, index) => (
      <motion.span variants={subheadingVariantsS} key={index} >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
    </motion.p>
  )
}

export default SubheadingText