import html from "../images/logos/html.png";
import css from "../images/logos/css.png";
import javascript from "../images/logos/javascript.png";
import reactImage from "../images/logos/react.png";
import nextjs from "../images/logos/nextjs.png";
import node from "../images/logos/node.png";
import typscript from "../images/logos/typescript.png";
import tailwind from "../images/logos/tailwind.png";




type Portfoliotype =
    {
        id: number,
        title: string,
        subheading: string,
        image: string
    }


export const Portfolio: Portfoliotype[] = [
    {
        id: 1,
        title: "yelpcamp",
        subheading: "A Full-stack web applicaton made using Node.js for the back-end and MongoDB Atlas as a cloud datbase. Yelpcamp allows users to create, review and delete campgorunds. You have to start by creating an account to utilise.",
        image: "hello"
    },
    {
        id: 2,
        title: "Todo App",
        subheading: "It can be difficult to remember everything we need to do. This is where this Todo App comes in handy. A functioning crud application that allows users to stores tasks on MongoDD that are instanly dispalyed on the page with ejs.",
        image: "dashf"
    },
]




type paraType = {
    id: number,
    para: string,
}

export const aboutPara: paraType[] = [
    {
        id: 1,
        para: "Hi, I'm Jonathan. A self taught Full Stack Developer. I have a passion for creating responsive websites and webapps. My programming language is Javascript. A powerfull tool at my disposal which allows my creativity to come alive. Have a look in the Projects section where I get to show off my skills.",

    },
    {
        id: 2,
        para: "I am currently exploring react libraries and building new things with them. I'll be continously updating my projects section as I create cool projects. When I'm not coding I am going to the gym, watching anime, movies and consuming as much football as possible!",
    },
    {
        id: 3,
        para: " I am open to Job opportunities where I can grow, contribute and continue to learn."
    }

]



type skillsType = {
    id: number,
    src: string,
    title: string,
    style: string
}

export const skillsInfo: skillsType[] = [
    {
        id: 1,
        src: html,
        title: "HTML",
        style: "dark:shadow-orange-500",
    },
    {
        id: 2,
        src: css,
        title: "CSS",
        style: "dark:shadow-blue-500",
    },
    {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "dark:shadow-yellow-500",
    },
    {
        id: 4,
        src: reactImage,
        title: "React",
        style: "dark:shadow-blue-600",
    },
    {
        id: 5,
        src: tailwind,
        title: "Tailwind",
        style: "dark:shadow-sky-400",
    },
    {
        id: 6,
        src: nextjs,
        title: "Next JS",
        style: "dark:shadow-white",
    },
    {
        id: 7,
        src: node,
        title: "Node JS",
        style: "dark:shadow-[#66cc33]",
    },
    {
        id: 8,
        src: typscript,
        title: "TypeScript",
        style: "dark:shadow-[#3178C6]",
    },
]