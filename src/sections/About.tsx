import { aboutPara } from "../constants/data"
import ParaText from "../components/ParaText"

const About = () => {
  return (
    <div id='about' className="py-5  dark:bg-black ">
      <div className=' max-w-5xl mx-auto p-4 py-16'>
        <h2 className=" md:text-4xl text-2xl font-bold text-center text-sky-700">About</h2>
        {aboutPara.map((aboutpara) => (
          <ParaText  key={aboutpara.id}>{aboutpara.para}</ParaText>
          
        ))}
      </div>

    </div>
  )
}

export default About