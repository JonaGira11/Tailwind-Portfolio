import { aboutPara } from "../constants/data"
import ParaText from "../components/ParaText"

const About = () => {
  return (
    <section id='about' className="py-5  dark:bg-black ">
      <div className=' max-w-5xl mx-auto p-4 py-16'>
        <div className="pb-10">
        <h2 className=" md:text-4xl text-2xl font-bold text-center text-sky-700 border-b-4 border-sky-700 inline">About</h2>
        </div>
      
        {aboutPara.map((aboutpara) => (
          <ParaText  key={aboutpara.id}>{aboutpara.para}</ParaText>
        ))}
        <div className="py-10">
        <h3 className=" mt-10 md:text-3xl text-2xl font-bold text-center text-sky-700 border-sky-700 border-b-4 pb-2 inline">Skills</h3>
        </div>
       
        <p className="py-4 text-stone-400 text-base ">Here are some of the technolgies I worked with</p>
      </div>

    </section>
  )
}

export default About