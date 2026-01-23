import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import todo_app from "../assets/projects/todo_app.png";
import port_folio from "../assets/projects/port-folio.png";

export const HERO_CONTENT =
  `
I am a backend-focused full-stack software engineer with a strong passion for designing scalable, production-grade systems. My core strength lies in building robust APIs, backend services, and system architectures that are reliable, secure, and easy to maintain. I primarily work with NestJS, Node.js, TypeScript, MongoDB, MySQL, and Docker to deliver high-performance applications that can scale with real-world usage.

Beyond backend engineering, I have hands-on experience across full-stack development, DevOps workflows, and cloud-based deployments. I actively work with CI/CD pipelines, containerized environments, and Linux-based servers to take applications from development to production with confidence and stability.

I also work with AI-driven and computer-vision–based systems, integrating machine learning models into backend services for real-world problem solving. My experience includes building end-to-end pipelines where AI models, APIs, databases, and infrastructure work together seamlessly.

I focus on writing clean, well-structured code, designing thoughtful system flows, and continuously improving performance and reliability. I enjoy solving complex engineering challenges and building systems that are practical, scalable, and ready for real-world deployment.
`;

export const ABOUT_TEXT = `
I am a dedicated and versatile software engineer with a strong focus on backend development, system architecture, and scalable application design. My core expertise lies in building RESTful APIs, backend services, and data-driven systems using NestJS, Node.js, TypeScript, MongoDB, MySQL, and PostgreSQL, with solid experience in Docker-based deployments and CI/CD pipelines.

Alongside backend engineering, I have worked across full-stack environments using React, Next.js, PHP, Laravel, and Electron, enabling me to understand complete application lifecycles from frontend interaction to backend processing and infrastructure. I am comfortable working in monorepo architectures, microservice-ready designs, and offline-first systems.

I also have hands-on experience in computer vision and AI-driven projects, working with OpenCV, CNN-based models, ResNet-50, YOLO, and ML pipelines for real-world image analysis and automation tasks. This allows me to bridge the gap between machine-learning models and production-grade backend systems.

My engineering journey is driven by curiosity, continuous learning, and a strong interest in building reliable systems that scale. I enjoy solving complex technical problems, optimizing performance, and deploying applications that are secure, maintainable, and impactful in real-world environments.
`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Backend Developer",
    company: "Infact Solutions (PVT) Ltd.",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Nest.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "Nest.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Full Stack Developer",
    company: "Orient-soft Sri lanaka",
    description: `Designed and developed user interfaces for web applications using HTML/CSS.
     Worked closely with backend developers to integrate frontend components Laravel APIs. 
     Implemented responsive designs and optimized frontend performance.
`,
    technologies: ["HTML", "CSS", "php", "mySQL", "Laravel"],
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

export const RESEARCH = [
  {
    title: "AI-Driven Backend Scalability in Microservices",
    description: "A comprehensive research project exploring the integration of machine learning models for dynamic resource allocation and load balancing in NestJS-based microservice architectures. The study focuses on predictive scaling and reducing latency in high-traffic production environments.",
    link: "#", // Placeholder for PDF link
    technologies: ["AI Systems", "NestJS", "Microservices", "Python"],
  },
];

export const CONTACT = {
  address: "Horana, Western Province, Sri lanka",
  phoneNo: "+94 705 140 790",
  email: "prabashanapubudu@gmail.com",
};
