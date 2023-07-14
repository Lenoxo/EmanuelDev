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
  "https://github.com/Lenoxo/react-ecommerce-dashboard"
);
projectsData.push(EcommerceDashboard);

const Taskit = new Project(
  "Taskit",
  "https://camo.githubusercontent.com/1f19274b5fe37c14e9f3b6640e48e151f75c0c65de2a6ec5f1465b0dd2f9c303/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784d544d7a4e7a45334d544e6c5a6d466c4e545a695a57566d4d4752694f54646d4e6d4a6a4d47557a593246694d4459344d7a55795a535a6c634431324d563970626e526c636d35686246396e61575a7a583264705a6b6c6b4a6d4e305057632f4f6b7a7744794f5a4b4c42683333646334492f67697068792e676966",
  "Taskit is a task management and organization application built with Create React App.",
  "https://lenoxo.github.io/Taskit/",
  "https://github.com/Lenoxo/Taskit"
);
projectsData.push(Taskit);

const PlatziTravel = new Project(
  "Platzi Travel",
  "https://camo.githubusercontent.com/426c7b43851e4b2ebaae92aa3be4249562412eed04720a719be7bab4289b6abb/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f32394f457247563053697a37366f6f4c65382f67697068792e676966",
  "It is a landing page to view images of tourist sites, built with HTML and CSS in conjunction with Tailwind CSS. It is 100% responsive and features integrated Dark Mode.",
  "https://lenoxo.github.io/platzi-travel/",
  "https://github.com/Lenoxo/platzi-travel"
);
projectsData.push(PlatziTravel);

const AsyncLanding = new Project(
  "Async Landing",
  "image",
  "Landing page for practicing the use of async functions and promises, consuming YouTube API and IMDb API from Rapid API.",
  "https://lenoxo.github.io/async-landing/",
  "https://github.com/Lenoxo/async-landing"
);
projectsData.push(AsyncLanding);

const Mokepon = new Project(
  "Mokepon",
  "image",
  "Small video-game like Pokemon, made with pure HTML, CSS and JavaScript. Also, uses a nodejs local server. It's made for 2 players.",
  "",
  "https://github.com/Lenoxo/Mokepon-project"
);
projectsData.push(Mokepon);

export default projectsData;
