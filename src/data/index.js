class Project {
  constructor(title, image, description, deploy, repository) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.deploy = deploy;
    this.repository = repository;
  }
}

let projectsData = [];

const Reactify = new Project(
  "Reactify",
  "https://camo.githubusercontent.com/f7a94d0143863d4b0684b1a6e9f38d7d0de42d21855fbec7744e49c97e7b2ce3/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784d7a55335a474d7a4d6a45334e6d59354d47557a4d5441314e7a6b344f5759314f444d334e325a6a5954417a4d7a4a694d4467304f435a6c634431324d563970626e526c636d35686246396e61575a7a583264705a6b6c6b4a6d4e305057632f556e7945757335324665636b6462364e53482f67697068792e676966",
  "This is an Ecommerce made with React.js, Next.js and TailwindCSS, with multiple features like PWA, User Authentication, Product Filtering, and much more!",
  "https://reactify-nextjs.vercel.app/",
  "https://github.com/Lenoxo/reactify-nextjs"
);
projectsData.push(Reactify);

const EcommerceDashboard = new Project(
  "Ecommerce Dashboard",
  "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "This is an Ecommerce made with React.js, Next.js and TailwindCSS, with multiple features like PWA, User Authentication, Product Filtering, and much more!",
  "https://react-ecommerce-dashboard.vercel.app/",
  "https://github.com/Lenoxo/react-ecommerce-dashboard",
);
projectsData.push(EcommerceDashboard);

export default projectsData;
