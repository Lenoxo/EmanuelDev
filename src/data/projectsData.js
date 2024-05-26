import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoDocker
} from "react-icons/io5";
import {
  BiLogoTailwindCss,
  BiLogoPostgresql,
  BiLogoTypescript
} from "react-icons/bi";
import { SiNextdotjs, SiExpress, SiSequelize, SiNeovim } from "react-icons/si";
let projectsData = [];

class Project {
  constructor(title, image, description, deploy, repository, technologiesUsed) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.deploy = deploy;
    this.repository = repository;
    this.technologiesUsed = technologiesUsed || [];
  }
}

// Projects instancies

const PatientorFront = new Project(
  "Patientor-Front",
  "https://imgur.com/ZaE38X6.png",
  "App for management of patients data, styled using Material UI components and icons, allowing to add and read patients and entries, connected with Patientor-Back as the backend",
  "",
  "https://github.com/Lenoxo/patientor",
  [
    { name: "React.js", icon: IoLogoReact },
    { name: "Typescript", icon: BiLogoTypescript }
  ]
);
projectsData.push(PatientorFront);

const PatientorBack = new Project(
  "Patientor-Back",
  "https://imgur.com/2X5rn2y.png",
  "Backend for management of patient data, allowing to read and add patients and entries, connected with Patientor-Front, for now, saves patient info in memory.",
  "",
  "https://github.com/Lenoxo/patientor-back",
  [
    { name: "Node.js", icon: IoLogoNodejs },
    { name: "Express.js", icon: SiExpress },
    { name: "Typescript", icon: BiLogoTypescript }
  ]
);
projectsData.push(PatientorBack);

const TempNvim = new Project(
  "Temp-Nvim",
  "https://imgur.com/BKgNAdP.png",
  "Neovim Text Editor with plugins installed and containerized in a docker container, helping to have a quick setup for writing professional code with just one command. Based on Alpine Linux Image.",
  "https://hub.docker.com/r/lenoxo/nvimdocker",
  "https://github.com/Lenoxo/temp-nvim/",
  [
    { name: "Docker", icon: IoLogoDocker },
    { name: "Neovim", icon: SiNeovim }
  ]
);
projectsData.push(TempNvim);

const DevShop = new Project(
  "DevShop",
  "https://imgur.com/z1KvPaA.png",
  "The DevShop API is a project built using Node.js, Express.js, Passport.js, and PostgreSQL, designed to simulate the functionality of an e-commerce platform. This API provides a range of features and follows best practices, making it a robust foundation for testing and development purposes.",
  "https://devshop-api-1gc5.onrender.com/api-docs/",
  "https://github.com/Lenoxo/DevShop",
  [
    { name: "Node.js", icon: IoLogoNodejs },
    { name: "Express.js", icon: SiExpress },
    { name: "Sequelize.js", icon: SiSequelize },
    { name: "PostgresSQL", icon: BiLogoPostgresql }
  ]
);
projectsData.push(DevShop);

const Reactify = new Project(
  "Reactify",
  "https://imgur.com/QhF9iXk.png",
  "This is an Ecommerce made with React.js, Next.js and TailwindCSS, with multiple features like PWA, User Authentication, Product Filtering, and much more!",
  "https://reactify-nextjs.vercel.app/",
  "https://github.com/Lenoxo/reactify-nextjs",
  [
    { name: "React.js", icon: IoLogoReact },
    { name: "TailwindCSS", icon: BiLogoTailwindCss },
    { name: "Next.js", icon: SiNextdotjs }
  ]
);
projectsData.push(Reactify);

const EcommerceDashboard = new Project(
  "Ecommerce Dashboard",
  "https://imgur.com/fvwZUTi.png",
  "This is Reactify's dashboard made with React.js, Next.js and TailwindCSS, it allows you to add, edit, delete and see useful data of the products in the Platzi Fake Store API. It also has User Authentication.",
  "https://react-ecommerce-dashboard.vercel.app/",
  "https://github.com/Lenoxo/react-ecommerce-dashboard",
  [
    { name: "React.js", icon: IoLogoReact },
    { name: "TailwindCSS", icon: BiLogoTailwindCss },
    { name: "Next.js", icon: SiNextdotjs }
  ]
);
projectsData.push(EcommerceDashboard);

const Taskit = new Project(
  "Taskit",
  "https://imgur.com/3oqApvY.png",
  "Taskit is a task management and organization application built with Create React App.",
  "https://lenoxo.github.io/Taskit/",
  "https://github.com/Lenoxo/Taskit",
  [{ name: "React.js", icon: IoLogoReact }]
);
projectsData.push(Taskit);

const PlatziTravel = new Project(
  "Platzi Travel",
  "https://imgur.com/VzRa2yR.png",
  "It is a landing page to view images of tourist sites, built with HTML and CSS in conjunction with Tailwind CSS. It is 100% responsive and features integrated Dark Mode.",
  "https://lenoxo.github.io/platzi-travel/",
  "https://github.com/Lenoxo/platzi-travel",
  [
    { name: "HTML", icon: IoLogoHtml5 },
    { name: "TailwindCSS", icon: BiLogoTailwindCss },
    { name: "JavaScript", icon: IoLogoJavascript }
  ]
);
projectsData.push(PlatziTravel);

const AsyncLanding = new Project(
  "Async Landing",
  "https://imgur.com/6znt4Hc.png",
  "Landing page for practicing the use of async functions and promises, consuming YouTube API and IMDb API from Rapid API.",
  "https://lenoxo.github.io/Async-Landing/",
  "https://github.com/Lenoxo/Async-Landing",
  [
    { name: "HTML", icon: IoLogoHtml5 },
    { name: "TailwindCSS", icon: BiLogoTailwindCss },
    { name: "JavaScript", icon: IoLogoJavascript }
  ]
);
projectsData.push(AsyncLanding);

const Mokepon = new Project(
  "Mokepon",
  "https://imgur.com/Ys2PHD8.png",
  "Small video-game like Pokemon, made with pure HTML, CSS and JavaScript. Also, uses a nodejs local server. It's made for 2 players. It's also my first project.",
  "",
  "https://github.com/Lenoxo/Mokepon-project",
  [
    { name: "HTML", icon: IoLogoHtml5 },
    { name: "CSS", icon: IoLogoCss3 },
    { name: "JavaScript", icon: IoLogoJavascript }
  ]
);
projectsData.push(Mokepon);

const EmanuelDev = new Project(
  "EmanuelDev",
  "https://imgur.com/ogIgJyY.png",
  "Is this website, built using Next.js",
  "https://emanueldev.vercel.app/",
  "https://github.com/Lenoxo/emanueldev",
  [
    { name: "React.js", icon: IoLogoReact },
    { name: "TailwindCSS", icon: BiLogoTailwindCss },
    { name: "Next.js", icon: SiNextdotjs }
  ]
);
projectsData.push(EmanuelDev);

const YardSale = new Project(
  "YardSale draft",
  "https://imgur.com/azlBGID.png",
  "This is the draft of a YardSale website main page, built using HTML, CSS and JavaScript.",
  "https://lenoxo.github.io/YardSale/",
  "https://github.com/Lenoxo/YardSale",
  [
    { name: "HTML", icon: IoLogoHtml5 },
    { name: "CSS", icon: IoLogoCss3 },
    { name: "JavaScript", icon: IoLogoJavascript }
  ]
);
projectsData.push(YardSale);

export default projectsData;
