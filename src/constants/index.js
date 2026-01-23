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

export const ABOUT_TEXT = {
  summary: "I am a dedicated software engineer specializing in backend architecture, AI systems, and scalable full-stack applications. My work focuses on building robust, production-grade solutions that bridge the gap between complex backend logic and seamless user experiences.",
  pillars: [
    {
      title: "The Backend Architect",
      description: "Expertise in NestJS, Node.js, and TypeScript. Designing scalable microservices, RESTful APIs, and robust data schemas with MongoDB, MySQL, and PostgreSQL."
    },
    {
      title: "The AI Systems Explorer",
      description: "Integrating LLMs, RAG, and Computer Vision (OpenCV/YOLO) into production pipelines. Bridging machine learning models with scalable backend infrastructure."
    },
    {
      title: "The Visionary Full-Stack",
      description: "Crafting modern interfaces with React and Next.js, while maintaining deep control over DevOps, CI/CD, and containerized deployments with Docker."
    }
  ],
  fullBio: "My engineering journey is driven by a deep curiosity for how complex systems interact. Beyond just writing code, I focus on the entire lifecycle—from architecting secure and maintainable database schemas to deploying containerized applications on Linux-based servers and cloud platforms like AWS and DigitalOcean. \n\nI thrive on solving technical challenges that require a blend of logical backend thinking and creative problem-solving, particularly in the fields of AI-driven automation and offline-first systems. I am committed to continuous learning and building technology that is not only functional but also secure and highly scalable for real-world impact."
};

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
