import html from "../images/logos/html.png";
import css from "../images/logos/css.png";
import javascript from "../images/logos/javascript.png";
import reactImage from "../images/logos/react.png";
import nextjs from "../images/logos/nextjs.png";
import node from "../images/logos/node.png";
import typscript from "../images/logos/typescript.png";
import tailwind from "../images/logos/tailwind.png";
const HuluThumnail: string = new URL("../images/thumbnails/huluThumbnail.png", import.meta.url).href
const MetaversusThumbnail: string = new URL("../images/thumbnails/metaversusThumbnail.png", import.meta.url).href
const ShoppingCartThumbnail: string = new URL("../images/thumbnails/shoppingCartThumbnail.png", import.meta.url).href
const MordernUIThumbnail: string = new URL("../images/thumbnails/MordernUIThumbnail.png", import.meta.url).href



export type Portfoliotype =
    {
        id: number,
        title: string,
        demo: string,
        github: string,
        image: string
    }


export const Portfolio: Portfoliotype[] = [
    {
        id: 1,
        title: "Hulu Clone",
        demo: "https://hulu-clone-jonagira11.vercel.app/",
        github: "https://github.com/JonaGira11/HuluClone",
        image: HuluThumnail
    },
    {
        id: 2,
        title: "Metaversus",
        demo: "https://metaversus-self.vercel.app/",
        github: "https://github.com/JonaGira11/Metaversus/tree/main",
        image: MetaversusThumbnail
    },
    {
        id: 3,
        title: "Cart App",
        demo: "https://shopping-cart-v1.vercel.app/",
        github: "https://github.com/JonaGira11/Shopping-cart-V1",
        image: ShoppingCartThumbnail
    },
    {
        id: 4,
        title: "Modern UI",
        demo: "https://modern-ui-react-tailwind.vercel.app/",
        github: "https://github.com/JonaGira11/ModernUI-React-Tailwind/tree/main",
        image: MordernUIThumbnail
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