import Hero from "@/components/Hero";
import { Sphere } from "@react-three/drei";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Tech enthusiast with a passion for development and Data Engineering.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on Data Engineering Project",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Full-Stack Flashcard Web Application",
    des: "Collaborate with team of 4 to create a flashcard web application containerized using Docker. Utilized Github Action for CI. Practicing Agile methodology for the software engineering process. Creating Tests using Jest to test both functionalities and UI, and using Postman to test APIs. Implement the flashcard app like Quizle",
    img: "/flashcard.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/dock.svg",
      "/nodejs.svg",
      "/express.svg",
      "/mongodb.svg",
    ],
    link: "https://www.dropbox.com/scl/fi/gloubcfhi6924uerce7y5/COSC310-project-jpbns.mp4?rlkey=fff6j79eh433lxkz2b7f8g7d0&st=g5rq2b6y&dl=0",
  },
  {
    id: 2,
    title: "ML Food Waste Management Recognition",
    des: "Collaborated in a team of 5 members to create an image detection software for a pantry management application to reduce food wasted by notifying users of items expirations. And we are trying to give out recipes for those near-expired food using Roboflow and Yolo v8. Using HTML5, CSS3, and Bootstrap 4 for front-end. Built the backend using Python, implemented a structured SQLite database for inventory management, and connected the front-end and back-end using Flask. Attained an accuracy of 80% for item recognition in real time using ML and built a REST API for data manipulation.",
    img: "/ml-waste.png",
    iconLists: [
      "/html.svg",
      "/css.svg",
      "/bootstrap.svg",
      "/python.svg",
      "/flask.svg",
    ],
    link: "https://devpost.com/software/pantry_sidekick",
  },
  {
    id: 3,
    title: "Full-Stack Sneaker E-commerce Web App",
    des: "An e-commerce application that enables both shopping and administrative functions online. Customers can browse, review, and purchase products, while administrators can manage inventory and sales data. Deployed on Heroku with Docker Image. Auto Deployment whenever main branch updated. Achieve Database Web Development Award for being the top web dev project (minimum 90% score)",
    img: "/304.png",
    iconLists: [
      "/html.svg",
      "/css.svg",
      "/js.svg",
      "/mysql.svg",
      "/nodejs.svg",
    ],
    link: "https://docs.google.com/document/d/1no1-ON6vnDkrIJMDnQANWzKcdUVZYkYyTeE8BzDpHl8/edit?usp=sharing",
  },
  {
    id: 4,
    title: "Sphere Platformer Game",
    des: "Create a simple game using UNITY and C# with built-in physical logic",
    img: "/unity-game.png",
    iconLists: ["/c-sharp.svg", "unity.svg"],
    link: "https://github.com/billvo2212/SpherePlatformerGame.git",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Summer Student Software Developer @ UBCO",
    desc: "Utilized Typescript to collaborate with a Professor on developing web application that aids student in planning their degree",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern @ WhiteSpace Inc.",
    desc: "Worked on a team to develop a web application using React and Node.js, enhancing user experience and performance. Training OCR using PaddleOCR to improve accuracy.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/billvo2212",
  },
  {
    id: 2,
    img: "/linkedin.svg",
    href: "https://www.linkedin.com/in/bill-vo-867251296/",
  },
  // {
  //   id: 3,
  //   img: "/link.svg",
  // },
];
