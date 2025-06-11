// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import SparkradixTechnologies from "./assets/company_logo/SparkradixTechnologies.png";

// Education Section Logo's
import Centurion_University_of_Technology_and_Management_Logo from "./assets/education_logo/Centurion_University_of_Technology_and_Management_Logo.svg";
import clgLogo from "./assets/education_logo/clgLogo.jpeg";

// Project Section Logo's
import WanderlustLogo from "./assets/work_logo/wanderlustLogo.png";
import zoomLogo from "./assets/work_logo/zoomLogo.png";
import instaLogo from "./assets/work_logo/instaLogo.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: SparkradixTechnologies,
    role: "MERN Stack Developer",
    company: "Sparkradix Technologies",
    date: "January 2025 - April 2025",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Express JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      ,
    ],
  },
];

export const education = [
  {
    id: 0,
    img: Centurion_University_of_Technology_and_Management_Logo,
    school:
      "Centurion University of Technology & Management, Bhubaneswar (CUTM)",
    date: "Sept 2023 - April 2025",
    grade: "8.51 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from Centurion University of Technology & Management, Bhubaneswar (CUTM). During my time at Centurion University of Technology & Management, Bhubaneswar (CUTM), I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Centurion University of Technology & Management, Bhubaneswar (CUTM) has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: clgLogo,
    school: "Udayanath Autonomous College Of Science & Technology (Adaspur)",
    date: "Sept 2019 - Aug 2022",
    grade: "7.56 CGPA",
    desc: "I completed my Bachelor's degree in Chemistry Honours (B.Sc.) from Udayanath Autonomous College Of Science & Technology (Adaspur). During this time, I developed a strong foundation in core chemistry subjects such as Organic, Inorganic, and Physical Chemistry. My academic journey included hands-on laboratory work, analytical techniques, and research-based assignments that enhanced my scientific reasoning and experimental skills. This experience nurtured my attention to detail, problem-solving ability, and structured thinking — qualities that I now apply to every professional and technical challenge I take on.",
    degree: "Bachelor of Science - BSC (Chemistry Honours)",
  },
  {
    id: 2,
    img: clgLogo,
    school: "Udayanath Autonomous College Of Science & Technology (Adaspur)",
    date: "Apr 2017 - March 2019",
    grade: "70%",
    desc: "I completed my class 12 education from Udayanath Autonomous College Of Science & Technology (Adaspur), under the CHSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Biology.",
    degree: "CHSE(XII) - PCM with Biology",
  },
];

export const projects = [
  {
    id: 0,
    title: "Full-Stack Traveling Website – Wanderlust",
    description:
      "Wanderlust is a full-featured travel booking web application built using HTML, CSS, JavaScript, Express.js, Bootstrap, and EJS templating. The app enables users to explore destinations, view detailed listings, and make bookings through a clean and responsive interface. With server-side rendering powered by EJS and dynamic routing via Express.js, Wanderlust delivers a smooth, intuitive, and visually appealing experience—perfect for travelers planning their next adventure.",
    image: WanderlustLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Express JS",
      "Bootstrap",
      "EJS",
      "API",
    ],
    github: "https://github.com/Debaraj-Behera/MAJORPROJECT",
    webapp: "https://a-visiting-website.onrender.com/listings",
  },
  {
    id: 1,
    title: "ZoomClone – Real-Time Video Conferencing Web App",
    description:
      "ZoomClone is a real-time video conferencing application built with WebRTC, Socket.IO, and JavaScript, offering seamless peer-to-peer communication. Users can create or join virtual meeting rooms, enabling high-quality video/audio streaming, screen sharing, and live chat. With a responsive and intuitive interface, ZoomClone replicates the core functionality of modern video meeting platforms, making it ideal for remote collaboration, interviews, and online discussions.",
    image: zoomLogo,
    tags: [
      "React JS",
      "Node.js",
      "Express JS",
      "Socket.IO",
      "WebRTC",
      "JavaScript",
      "HTML",
      "CSS",
      "Video Conferencing",
      "Real-Time Communication",
      "Peer-to-Peer",
      "Screen Sharing",
      "Chat Functionality",
    ],
    github: "https://github.com/Debaraj-Behera/zoom-clone",
    webapp: "https://zoom-clone-xefg.onrender.com",
  },
  {
    id: 2,
    title: "InstaClone – A Full-Stack Social Media Web App",
    description:
      "InstaClone is a full-stack social media application inspired by Instagram, built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can sign up, log in, share photos, like and comment on posts, and follow other users. Featuring real-time updates, responsive design, and secure authentication using JWT, InstaClone delivers a smooth and engaging experience that closely mirrors the functionality of modern photo-sharing platforms.",
    image: instaLogo,
    tags: [
      "React JS",
      "Node.js",
      "Express JS",
      "MongoDB",
      "JavaScript",
      "Tailwind css",
      "Redux",
      "REST API",
      "Image Upload in Cloud",
    ],

    github: "https://github.com/Debaraj-Behera/instagramclone",
    webapp: "https://instagramclone-2-jfjk.onrender.com",
  },
];
