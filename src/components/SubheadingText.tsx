
import { motion } from "framer-motion"

type PropsType = {
    text: string
}

const SubheadingText = ({text}:PropsType) => {
  return (
    <motion.p
    variants={{  hidden: {
        opacity: 0,
      },
      show: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: i * 0.03 },
      }),
    }}
     className="py-4 text-stone-400 text-base font-semibold">
  {Array.from(text).map((letter, index) => (
      <motion.span variants={{
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
           
          },
        },
      }} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
    </motion.p>
  )
}

export default SubheadingText