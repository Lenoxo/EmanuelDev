import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNpm,
} from "react-icons/io5";
import { BiLogoTailwindCss, BiLogoPostgresql } from "react-icons/bi";
import { SiNextdotjs, SiExpress, SiSequelize } from "react-icons/si";
let projectsData = [];

class Project {
  constructor(title, image, description, deploy, repository, technologiesUsed) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.deploy = deploy;
    this.repository = repository;
    this.technologiesUsed = technologiesUsed || []
  }
}

// Projects instancies
const DevShop = new Project(
  "DevShop",
  "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif",
  "This is an API built using Node.js with Express.js for the main backend structure, Passport.js for authentications, Sequelize as ORM and PostgresSQL as DataBase.",
  "https://backend-ecommerce-production-a555.up.railway.app/api/v1/products",
  "https://github.com/Lenoxo/DevShop",
  [{ name: "Node.js", icon: IoLogoNodejs }, { name: "Express.js", icon: SiExpress }, { name: "Sequelize.js", icon: SiSequelize }, { name: "PostgresSQL", icon: BiLogoPostgresql }]
);
projectsData.push(DevShop);

const Reactify = new Project(
  "Reactify",
  "https://imgur.com/QhF9iXk.png",
  "This is an Ecommerce made with React.js, Next.js and TailwindCSS, with multiple features like PWA, User Authentication, Product Filtering, and much more!",
  "https://reactify-nextjs.vercel.app/",
  "https://github.com/Lenoxo/reactify-nextjs",
  [{ name: "React.js", icon: IoLogoReact }, { name: "TailwindCSS", icon: BiLogoTailwindCss }, { name: "Next.js", icon: SiNextdotjs }]
);
projectsData.push(Reactify);

const EcommerceDashboard = new Project(
  "Ecommerce Dashboard",
  "https://imgur.com/fvwZUTi.png",
  "This is Reactify's dashboard made with React.js, Next.js and TailwindCSS, it allows you to add, edit, delete and see useful data of the products in the Platzi Fake Store API. It also has User Authentication.",
  "https://react-ecommerce-dashboard.vercel.app/",
  "https://github.com/Lenoxo/react-ecommerce-dashboard",
  [{ name: "React.js", icon: IoLogoReact }, { name: "TailwindCSS", icon: BiLogoTailwindCss }, { name: "Next.js", icon: SiNextdotjs }]
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
  [{ name: "HTML", icon: IoLogoHtml5 }, { name: "TailwindCSS", icon: BiLogoTailwindCss }, { name: "JavaScript", icon: IoLogoJavascript }]
);
projectsData.push(PlatziTravel);

const AsyncLanding = new Project(
  "Async Landing",
  "https://imgur.com/6znt4Hc.png",
  "Landing page for practicing the use of async functions and promises, consuming YouTube API and IMDb API from Rapid API.",
  "https://lenoxo.github.io/async-landing/",
  "https://github.com/Lenoxo/async-landing",
  [{ name: "HTML", icon: IoLogoHtml5 }, { name: "TailwindCSS", icon: BiLogoTailwindCss }, { name: "JavaScript", icon: IoLogoJavascript }]
);
projectsData.push(AsyncLanding);

const Mokepon = new Project(
  "Mokepon",
  "https://imgur.com/Ys2PHD8.png",
  "Small video-game like Pokemon, made with pure HTML, CSS and JavaScript. Also, uses a nodejs local server. It's made for 2 players. It's also my first project.",
  "",
  "https://github.com/Lenoxo/Mokepon-project",
  [{ name: "HTML", icon: IoLogoHtml5 }, { name: "CSS", icon: IoLogoCss3 }, { name: "JavaScript", icon: IoLogoJavascript }]
);
projectsData.push(Mokepon);

const EmanuelDev = new Project(
  "EmanuelDev",
  "https://imgur.com/ogIgJyY.png",
  "Is this website, built using Next.js",
  "https://emanueldev.vercel.app/",
  "https://github.com/Lenoxo/emanueldev",
  [{ name: "React.js", icon: IoLogoReact }, { name: "TailwindCSS", icon: BiLogoTailwindCss }, { name: "Next.js", icon: SiNextdotjs }]
);
projectsData.push(EmanuelDev);

const YardSale = new Project(
  "YardSale draft",
  "https://imgur.com/azlBGID.png",
  "This is the draft of a YardSale website main page, built using HTML, CSS and JavaScript.",
  "https://lenoxo.github.io/YardSale/",
  "https://github.com/Lenoxo/YardSale",
  [{ name: "HTML", icon: IoLogoHtml5 }, { name: "CSS", icon: IoLogoCss3 }, { name: "JavaScript", icon: IoLogoJavascript }]
);
projectsData.push(YardSale);

export default projectsData;
