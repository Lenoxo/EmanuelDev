let projectsData = [];

class Project {
  constructor(title, image, description, deploy, repository) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.deploy = deploy;
    this.repository = repository;
  }
}

const Reactify = new Project(
  "Reactify",
  "https://imgur.com/QhF9iXk.png",
  "This is an Ecommerce made with React.js, Next.js and TailwindCSS, with multiple features like PWA, User Authentication, Product Filtering, and much more!",
  "https://reactify-nextjs.vercel.app/",
  "https://github.com/Lenoxo/reactify-nextjs"
);
projectsData.push(Reactify);

const EcommerceDashboard = new Project(
  "Ecommerce Dashboard",
  "https://imgur.com/fvwZUTi.png",
  "This is Reactify's dashboard made with React.js, Next.js and TailwindCSS, it allows you to add, edit, delete and see useful data of the products in the Platzi Fake Store API. It also has User Authentication.",
  "https://react-ecommerce-dashboard.vercel.app/",
  "https://github.com/Lenoxo/react-ecommerce-dashboard"
);
projectsData.push(EcommerceDashboard);

const Taskit = new Project(
  "Taskit",
  "https://imgur.com/3oqApvY.png",
  "Taskit is a task management and organization application built with Create React App.",
  "https://lenoxo.github.io/Taskit/",
  "https://github.com/Lenoxo/Taskit"
);
projectsData.push(Taskit);

const PlatziTravel = new Project(
  "Platzi Travel",
  "https://imgur.com/VzRa2yR.png",
  "It is a landing page to view images of tourist sites, built with HTML and CSS in conjunction with Tailwind CSS. It is 100% responsive and features integrated Dark Mode.",
  "https://lenoxo.github.io/platzi-travel/",
  "https://github.com/Lenoxo/platzi-travel"
);
projectsData.push(PlatziTravel);

const AsyncLanding = new Project(
  "Async Landing",
  "https://imgur.com/6znt4Hc.png",
  "Landing page for practicing the use of async functions and promises, consuming YouTube API and IMDb API from Rapid API.",
  "https://lenoxo.github.io/async-landing/",
  "https://github.com/Lenoxo/async-landing"
);
projectsData.push(AsyncLanding);

const Mokepon = new Project(
  "Mokepon",
  "https://imgur.com/Ys2PHD8.png",
  "Small video-game like Pokemon, made with pure HTML, CSS and JavaScript. Also, uses a nodejs local server. It's made for 2 players.",
  "",
  "https://github.com/Lenoxo/Mokepon-project"
);
projectsData.push(Mokepon);

const EmanuelDev = new Project(
  "EmanuelDev",
  "image",
  "Is this website, built using Next.js",
  "",
  "https://github.com/Lenoxo/emanueldev",
)
projectsData.push(EmanuelDev)

export default projectsData;
