
import ProjectItem from './ProjectItem'
import { Portfolio } from '../constants/data'
const Projects = () => {
    return (
        <section id='projects' className="py-5  dark:bg-neutral-800 ">
            <div className=' max-w-5xl mx-auto p-4 py-16 md:pl-20'>
                <div className="pb-10">
                    <h2 className=" md:text-4xl text-2xl font-bold text-center text-sky-700 border-b-4 border-sky-700 inline">Projects</h2>
                </div>
                <p className="py-4 text-stone-400 text-base font-semibold "> Here are some of the projects I have made using the skills I have </p>
                <div className='grid sm:grid-cols-2 gap-12'>
                    {Portfolio.map((portdata => (
                        <ProjectItem
                            key={portdata.id}
                            title={portdata.title}
                            image={portdata.image}
                            demo={portdata.demo}
                            github={portdata.github}
                        />
                    )))}



                </div>
            </div>


        </section>
    )
}

export default Projects