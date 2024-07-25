import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import todo_app from "../assets/projects/todo_app.png";
import port_folio from "../assets/projects/port-folio.png";

export const HERO_CONTENT = 
`I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PHP, JavaScript, and MongoDB. I am also proficient in API development using Nest.js and have experience with Laravel. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated, versatile full-stack developer passionate about creating efficient, user-friendly web applications. I have worked with a range of technologies, including React, Next.js, Node.js, MySQL, PHP, Nest.js, and MongoDB. Additionally, I have experience working with Laravel. My journey in web development began with a deep curiosity about how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.

I hold a degree in Software Engineering and have a strong affinity for backend development, particularly in developing APIs and working with databases. 
`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Backend Developer",
    company: "Infact Solutions (PVT) Ltd.",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Nest.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js","Nest.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Full Stack Developer",
    company: "Orient-soft Sri lanaka",
    description: `Designed and developed user interfaces for web applications using HTML/CSS.
     Worked closely with backend developers to integrate frontend components Laravel APIs. 
     Implemented responsive designs and optimized frontend performance.
`,
    technologies: ["HTML", "CSS", "php", "mySQL","Laravel"],
  },
 
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "expense app",
    image: project2,
    description:
      "An acompleted API's for managing tasks with features such as  creation, Update, Delete, and tracking.",
    technologies: ["Nest framework", "express", "JavaScript", "typeScript"],
  },
  {
    title: "uniconnect website",
    image: project3,
    description: "a web platform for managing and advatising the event and other in the university ",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
  },
  {
    title: "Portfolio Website",
    image: port_folio,
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
  },
  {
    title: "todo_application",
    image: todo_app,
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Nest framework", "express", "JavaScript", "node"],
  },
  
  {
    title: "Pharmacy-system",
    image: project4,
    description:
      " A comprehensive platform for managing and selling pharmacy products both online and in physical stores. The application facilitates inventory management, online sales, and seamless integration with the physical shop's operations. .",
    technologies: ["HTML", "CSS", "Php", "mySQL"],
  },
];

export const CONTACT = {
  address: "Horana, Western Province, Sri lanka",
  phoneNo: "+94 705 140 790",
  email: "prabashanapubudu@gmail.com",
};
