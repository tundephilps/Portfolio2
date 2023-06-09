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
    tools: ["HTML", "TailWind CSS", "Javascript", "React"],

    link: "https://job-portal-tundephilps.vercel.app/",

    github: "https://github.com/tundephilps/Job-Portal",
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
    img: "/Blog.png",
    name: "Blog and News App",
    tools: ["HTML", "CSS", "Javascript", "Next.js"],

    link: "https://next-blog-tundephilps.vercel.app/",

    github: "https://github.com/tundephilps/CInema-App",
  },
  {
    id: 4,
    img: "/Fintech3.png",
    name: "Fintech Applications",
    tools: ["HTML", "Tailwind CSS", "Javascript", "React"],

    link: "https://financial-apps-tundephilps.vercel.app/",

    github: "https://github.com/tundephilps/Financial-Apps",
  },
  {
    id: 5,
    img: "/Realestate.png",
    name: "Real Estate Marketplace with Next.js",
    tools: ["HTML", "CSS", "Javascript", "Next.js"],

    link: "https://real-estate-marketplace-tundephilps.vercel.app/",

    github: "https://github.com/tundephilps/Next.js-RealEstate-Marketplace",
  },
  {
    id: 6,
    img: "/hotel.png",
    name: "Hotel and Reservation Website",
    tools: ["HTML", "Tailwnd CSS", "Javascript", "React"],

    link: "https://hotel-app-tundephilps.vercel.app/",

    github: "https://github.com/tundephilps/Hotel-App",
  },
  {
    id: 7,
    img: "/arcade.png",
    name: "Game Store & Arcade",
    tools: ["HTML", "CSS", "Javascript", "React"],

    link: "https://game-store-tundephilps.vercel.app/",

    github: "https://github.com/tundephilps/Game-Store-and-Arcade",
  },
  {
    id: 8,
    img: "/collection.png",
    name: "Landing Pages Collection",
    tools: ["HTML", "CSS", "Tailwind CSS", "Javascript", "React"],

    link: "https://landing-pages-collection-bay.vercel.app/",

    github: "https://github.com/tundephilps/Landing-Pages-Collection",
  },

  {
    id: 9,
    img: "/cinema.png",
    name: "Movie Search App",
    tools: ["HTML", "CSS", "Javascript", "React"],

    link: "https://movie-search-theta-self.vercel.app/",

    github: "https://github.com/tundephilps/Movie-Search-App",
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
    tools: ["HTML", "CSS", "Javascript", "React"],

    link: "https://redux-projects-tundephilps.vercel.app/",

    github: "https://github.com/tundephilps/Redux-Projects",
  },
  {
    id: 12,
    img: "/Softwares.png",
    name: "Softwares, Applications and Clones",
    tools: ["React", "Tailwind CSS"],

    link: "https://apps-and-softwares-tundephilps.vercel.app/",

    github: "https://github.com/tundephilps/SOFTWARES-AND-APPLICATIONS",
  },
  {
    id: 13,
    img: "/page8.png",
    name: "Educational WebApp",
    tools: ["React", "Redux-Toolkit", "Tailwind CSS"],

    link: "https://university-brown.vercel.app/",

    github: "https://github.com/tundephilps/Educational-WebApp",
  },
  {
    id: 14,
    img: "/Ricky.png",
    name: "Ricky and Morty App",
    tools: ["HTML", "CSS", "Javascript", "React"],

    link: "https://ricky-gules.vercel.app/",

    github: "https://github.com/tundephilps/Ricky-and-Morty-App",
  },
];

const skills = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 100 },
  { name: "Bootstrap", level: 100 },
  { name: "Tailwind CSS", level: 100 },
  { name: "Material UI ", level: 100 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 60 },
  { name: "ReactJS", level: 85 },
  { name: "Redux", level: 75 },
  { name: "NextJS", level: 65 },
  { name: "Figma", level: 85 },
  { name: "Github", level: 95 },
  { name: "Firebase", level: 55 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: "Address", text: "Lagos, Nigeria" },
  { id: 2, title: "Phone", text: "+2348034574154" },
  { id: 3, title: "Email", text: "tundephilps@gmail.com" },
];

export { navLinks, projects, countUpItems, services, skills, contacts };
