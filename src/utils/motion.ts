export const mainVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren:1,
        delayChildren:1,
      },
    },
}

export const mainTextA = {
        hidden: {
          y: 50,
          opacity: 0,
        },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 1,
            delay: 0.5

          },
        }
      }

   export const mainTextB = {
        hidden: {
          y: 50,
          opacity: 0,
        },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 1,
            delay: 0.7

          },
        }
      }

  export const outterContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.04,
        },
    },
  }

export const headingVariants = {
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
        duration: 1,
        delay: 0.1,
      },
    },
  }
  export const slideIn = {
    hidden: {
      x: "100%",
      y: "0",
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        delay: 0.2,
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  export const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }
  export const staggerChildren = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  export const projectsContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.35 },
    },
}

export const formVariants = {
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
}

export const subheadingVariantsP = {  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: i * 0.03 },
  }),
}

export const subheadingVariantsS = {
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
  }