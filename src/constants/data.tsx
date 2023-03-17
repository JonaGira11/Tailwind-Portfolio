import html from "../images/logos/html.png";
import css from "../images/logos/css.png";
import javascript from "../images/logos/javascript.png";
import reactImage from "../images/logos/react.png";
import nextjs from "../images/logos/nextjs.png";
import node from "../images/logos/node.png";
import typscript from "../images/logos/typescript.png";
import tailwind from "../images/logos/tailwind.png";
const HuluThumnail: string = new URL(
  "../images/thumbnails/huluThumbnail.png",
  import.meta.url
).href;
const MetaversusThumbnail: string = new URL(
  "../images/thumbnails/metaversusThumbnail.png",
  import.meta.url
).href;
const ShoppingCartThumbnail: string = new URL(
  "../images/thumbnails/shoppingCartThumbnail.png",
  import.meta.url
).href;
const MordernUIThumbnail: string = new URL(
  "../images/thumbnails/MordernUIThumbnail.png",
  import.meta.url
).href;

export type Portfoliotype = {
  id: number;
  title: string;
  demo: string;
  github: string;
  image: string;
};

export const Portfolio: Portfoliotype[] = [
  {
    id: 1,
    title: "Hulu Clone",
    demo: "https://hulu-clone-jonagira11.vercel.app/",
    github: "https://github.com/JonaGira11/HuluClone",
    image: HuluThumnail,
  },
  {
    id: 2,
    title: "Metaversus",
    demo: "https://metaversus-self.vercel.app/",
    github: "https://github.com/JonaGira11/Metaversus/tree/main",
    image: MetaversusThumbnail,
  },
  {
    id: 3,
    title: "Cart App",
    demo: "https://shopping-cart-v1.vercel.app/",
    github: "https://github.com/JonaGira11/Shopping-cart-V1",
    image: ShoppingCartThumbnail,
  },
  {
    id: 4,
    title: "Modern UI",
    demo: "https://modern-ui-react-tailwind.vercel.app/",
    github: "https://github.com/JonaGira11/ModernUI-React-Tailwind/tree/main",
    image: MordernUIThumbnail,
  },
];

type paraType = {
  id: number;
  para: string;
};

export const aboutPara: paraType[] = [
  {
    id: 1,
    para: "Hi, I'm Jonathan. A self-taught Full Stack Developer. I have a passion for creating responsive full-stack websites and webapps. I am interested in all things JavaScript. A powerful tool used to create full-stack applications. Coding allows my creativity to come alive on the front end, while tickling my problem-solving itch when I run into problems (very often) on the back end. I am constantly learning new libraries and applying what I learn by building new things with them.  I showcase some of my projects below or for more on my GitHub.",
  },
  {
    id: 2,
    para: "I am open to Job opportunities where I can grow, contribute and continue to learn. Feel free to contact me below.",
  },
];

type skillsType = {
  id: number;
  src: string;
  title: string;
  style: string;
};

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
];
