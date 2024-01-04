import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  ServiceProps,
} from "@/Types";
import { BsVectorPen, BsCode } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
  { path: "/Gallery", label: "Gallery" },
];

const services: ServiceProps[] = [
  { id: 1, title: "Building APIs", icon: <BsVectorPen />, finished: 57 },
  { id: 2, title: "Web Developmemt", icon: <BsCode />, finished: 209 },
  {
    id: 3,
    title: "Software Engineering",
    icon: <HiMagnifyingGlass />,
    finished: 29,
  },
  { id: 4, title: "UI/UX Designs", icon: <FiBarChart />, finished: 13 },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 3,
    text: "Years of Experience",
  },
  {
    id: 2,
    number: 178,
    text: "Satisfied Customers",
  },
  {
    id: 3,
    number: 742,
    text: "Design Items",
  },
  {
    id: 4,
    number: 112,
    text: "Clients Served",
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/JobPortal.png",
    name: "Job Portal",
    tools: ["HTML", "TailWind ", "Javascript", "React"],

    link: "https://job-portal-tundephilps.vercel.app/",

    github: "https://github.com/tundephilps/Jobs-Portal",
  },
  {
    id: 2,
    img: "/Dashboard.png",
    name: "Dashboard with Typescript",
    tools: ["HTML", "CSS", "TypeScript", "React"],

    link: "https://dashboard-bfdac.firebaseapp.com/",

    github: "https://github.com/tundephilps/Dashboard-with-Typescript",
  },

  {
    id: 3,
    img: "/Fintech3.png",
    name: "Fintech Applications",
    tools: ["HTML", "Tailwind", "Javascript", "React"],

    link: "https://fintech-apps-tundephilps.vercel.app/",

    github: "https://github.com/tundephilps/Fintech-Apps",
  },
  {
    id: 4,
    img: "/hotel.png",
    name: "Hotel and Reservation Website",
    tools: ["HTML", "Tailwnd", "Javascript", "React"],

    link: "https://hotel-app-tundephilps.vercel.app/",

    github: "https://github.com/tundephilps/Hotel-App",
  },
  {
    id: 5,
    img: "/softwareui.png",
    name: "Software UI Collections",
    tools: ["HTML", "SCSS", "Javascript", "React"],

    link: "https://softwares-ui.vercel.app/",

    github: "https://github.com/tundephilps/Software-UI-Collections",
  },
  {
    id: 7,
    img: "/arcade.png",
    name: "Game Store & Arcade",
    tools: ["HTML", "CSS", "Javascript", "React"],

    link: "https://game-store-tundephilps.vercel.app/",

    github: "https://github.com/tundephilps/Games-Store-Blog-Arcade",
  },
  {
    id: 8,
    img: "/collection.png",
    name: "Landing Pages Collection",
    tools: ["HTML", "CSS", "Tailwind CSS", "Javascript", "React"],

    link: "https://landing-pages-henna.vercel.app/",

    github: "https://github.com/tundephilps/Landing-Page-Collection",
  },

  {
    id: 9,
    img: "/cinema.png",
    name: "Movie App",
    tools: ["HTML", "CSS", "Javascript", "React"],

    link: "https://optimum-cinema.vercel.app/",

    github: "https://github.com/tundephilps/Cinema-App",
  },
  {
    id: 10,
    img: "/CoreReact.png",
    name: "Core React Projects",
    tools: ["HTML", "CSS", "Javascript", "React"],

    link: "https://core-react-tundephilps.vercel.app/",

    github: "https://github.com/tundephilps/Core-React-Projects",
  },

  {
    id: 11,
    img: "/Redux.png",
    name: "Redux Collection",
    tools: ["HTML", "CSS", "Javascript", "React", "Redux"],

    link: "https://redux-projects-tundephilps.vercel.app/",

    github: "https://github.com/tundephilps/Redux-Collection",
  },
  {
    id: 12,
    img: "/Softwares.png",
    name: "Software and Applications",
    tools: ["React", "Tailwind CSS"],

    link: "https://apps-n-softwares.vercel.app/",

    github: "https://github.com/tundephilps/Softwares-and-Applicaions",
  },
  {
    id: 13,
    img: "/tulet.png",
    name: "Property Firm Website",
    tools: ["React", "Tailwind CSS"],

    link: "https://www.tuletoaks.com/",

    github: "https://github.com/tundephilps/Property-Firm-Webpage",
  },
  {
    id: 14,
    img: "/page8.png",
    name: "Educational WebApp",
    tools: ["React", "Redux-Toolkit", "Tailwind CSS"],

    link: "https://university-brown.vercel.app/",

    github: "https://github.com/tundephilps/Educational-WebApp",
  },
];

const skills = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 100 },
  { name: "Bootstrap", level: 100 },
  { name: "Tailwind CSS", level: 100 },
  { name: "Material UI ", level: 100 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "ReactJS", level: 100 },
  { name: "Redux", level: 75 },
  { name: "NextJS", level: 85 },
  { name: "React Native", level: 95 },
  { name: "Figma", level: 85 },
  { name: "Github", level: 95 },
  { name: "Firebase", level: 75 },
  { name: "Sanity.IO", level: 75 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: "Address", text: "Lagos, Nigeria" },
  { id: 2, title: "Phone", text: "+2348034574154" },
  { id: 3, title: "Email", text: "tundephilps@gmail.com" },
];

export { navLinks, projects, countUpItems, services, skills, contacts };
