import { ReactNode } from "react"

type ParaProps = {
    children: ReactNode
}

const ParaText = ({children}:ParaProps) => {
  return (
   <p className="md:text-lg mt-2 text-base text-justify dark:text-white">{children}</p>
  )
}

export default ParaText