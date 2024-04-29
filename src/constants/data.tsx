import html from "../images/logos/html.webp";
import css from "../images/logos/css.webp";
import javascript from "../images/logos/javascript.webp";
import reactImage from "../images/logos/react.webp";
import nextjs from "../images/logos/nextjs.webp";
import node from "../images/logos/node.webp";
import typscript from "../images/logos/typescript.webp";
import tailwind from "../images/logos/tailwind.webp";
const HuluThumnail: string = new URL(
  "../images/thumbnails/huluThumbnail.webp",
  import.meta.url
).href;
const MetaversusThumbnail: string = new URL(
  "../images/thumbnails/metaversusThumbnail.webp",
  import.meta.url
).href;
const ShoppingCartThumbnail: string = new URL(
  "../images/thumbnails/shoppingCartThumbnail.webp",
  import.meta.url
).href;
const MordernUIThumbnail: string = new URL(
  "../images/thumbnails/MordernUIThumbnail.webp",
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
    para: "Hi I'm Jonathan, a Full Stack Developer. Creating responsive full-stack websites and webapps using JavaScript is what I do best. I discovered coding a few years ago by a recommendation and haven't looked by since. ",
  },
  {
    id: 2,
    para: "I love the community around web development and I am excited for a full time career in software engineering. I am ready to be apart of a great team while bringing value and continuing my growth as a developer. Feel free to contact me below.",
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
