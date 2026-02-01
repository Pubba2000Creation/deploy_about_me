
import cakehubImg from "../assets/projects/cakehub/cakehub.png";
import ecommerceImg from "../assets/projects/ecommrece/webview.png";
import egarageImg from "../assets/projects/egarge/egarge.png";
import backendDoc from "../assets/projects/ecommrece/backend_doc.pdf";
import databaseDoc from "../assets/projects/ecommrece/database_doc.pdf";
import frontendDoc from "../assets/projects/ecommrece/frontend_doc.pdf";
import overallDoc from "../assets/projects/ecommrece/overall_doc.pdf";
import wallDamageImg from "../assets/projects/wallDamage/postman.png";
import wallDamageResearchDoc from "../assets/projects/wallDamage/Technical_Research_Report_Wall_Damage_AI.pdf";
import wallDamageBackendDoc from "../assets/projects/wallDamage/Wall_Damage_Detection_Backend_Documentation.pdf";
import wallDamageThesis from "../assets/research/AI Framework For Wall Damage Analysis/thesis.pdf";
import wallDamageDetectionPaper from "../assets/research/AI Framework For Wall Damage Analysis/Wall Damage Detection and Cost Estimation System.pdf";

export const HERO_CONTENT =
  `
I am a backend-focused full-stack software engineer with a strong passion for designing scalable, production-grade systems. My core strength lies in building robust APIs, backend services, and system architectures that are reliable, secure, and easy to maintain. I primarily work with NestJS, Node.js, TypeScript, MongoDB, MySQL, and Docker to deliver high-performance applications that can scale with real-world usage.

Beyond backend engineering, I have hands-on experience across full-stack development, DevOps workflows, and cloud-based deployments. I actively work with CI/CD pipelines, containerized environments (Docker & Kubernetes), and Linux-based servers to take applications from development to production with confidence and stability.

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
      description: "Crafting modern interfaces with React and Next.js, while maintaining deep control over DevOps, CI/CD, and container orchestration with Docker and Kubernetes."
    }
  ],
  fullBio: "My engineering journey is driven by a deep curiosity for how complex systems interact. Beyond just writing code, I focus on the entire lifecycle—from architecting secure and maintainable database schemas to deploying containerized applications on Linux-based servers and cloud platforms like AWS and DigitalOcean. \n\nI thrive on solving technical challenges that require a blend of logical backend thinking and creative problem-solving, particularly in the fields of AI-driven automation and offline-first systems. I am committed to continuous learning and building technology that is not only functional but also secure and highly scalable for real-world impact."
};

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Freelance Backend / Full-Stack Engineer",
    company: "Independent",
    description: `Working as an independent software engineer delivering complete, production-ready solutions for clients. Responsible for system design, backend architecture, API development, database modeling, deployment, and project coordination.

Key Projects:
• CakeHub Web System – Designed and developed backend architecture, REST APIs, authentication flows, role-based access control, and integrations including Google Maps, Amazon S3, and WebSockets.
• E-Garage Web & Mobile Backend – Developed backend services, APIs, database schemas, and system logic supporting web and mobile applications.

Handled client communication, technical decision-making, delivery timelines, and deployment responsibilities.`,
    technologies: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Docker",
      "AWS S3",
      "WebSockets",
      "REST APIs",
      "JWT",
      "DigitalOcean",
      "Kubernetes"
    ],
  },
  {
    year: "2023 - 2024",
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
    id: "ecommerce",
    title: "E-Commerce Platform",
    image: ecommerceImg,
    description: "A scalable e-commerce architecture supporting high-volume transactions, inventory management, and secure payments.",
    fullDescription: "This project is a full-featured e-commerce platform built for scalability and performance. It includes a microservices-ready backend, a responsive storefront, and a comprehensive admin dashboard. The system supports complex product variants, real-time inventory checks, and diverse payment gateway integrations, ensuring a seamless shopping experience.",
    features: [
      "Product Management: Support for variants, categories, and tags.",
      "Cart & Checkout: Optimized checkout flow with guest options.",
      "Secure Payments: Integration with Stripe and PayPal.",
      "Order History: User dashboard for tracking past orders.",
      "Admin Analytics: Sales reports and user behavior insights."
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe API"],
    role: "Full Stack Developer",
    video: "https://res.cloudinary.com/djrw4gbk9/video/upload/v1769365216/ecommercevideo_qgiujx.mp4",
    documents: [
      { title: "Overall Architecture", src: overallDoc },
      { title: "Backend Documentation", src: backendDoc },
      { title: "Frontend Documentation", src: frontendDoc },
      { title: "Database Schema", src: databaseDoc },
    ]
  },
  {
    id: "cakehub",
    title: "CakeHub Web System",
    image: cakehubImg,
    description: "A comprehensive platform for managing customized cake orders with real-time tracking and delivery integration.",
    fullDescription: "CakeHub is a sophisticated web system designed to streamline the operations of a custom cake bakery. It handles everything from order customization and scheduling to inventory management and delivery tracking. The system features a robust backend for managing complex order states and a user-friendly frontend for customers to design their dream cakes.",
    features: [
      "Custom Cake Builder: Interactive tool for customers to design cakes.",
      "Order Management: Real-time dashboard for bakery staff.",
      "Delivery Integration: Google Maps integration for delivery tracking.",
      "Inventory Tracking: Automated stock deduction based on orders.",
      "Role-Based Access: Secure panels for admins, bakers, and drivers."
    ],
    technologies: ["NestJS", "Next.js", "MongoDB", "AWS S3", "Google Maps API", "WebSockets"],
    role: "Full Stack Engineer"
  },
  {
    id: "e-garage",
    title: "E-Garage System",
    image: egarageImg,
    description: "A complete garage management solution integrating mobile and web platforms for service booking and inventory.",
    fullDescription: "E-Garage is an all-in-one platform for automotive service centers. It connects vehicle owners with garages through mobile and web applications. The system facilitates service booking, real-time status updates, inventory management for spare parts, and automated billing. It aims to digitize the traditional garage workflow for efficiency and transparency.",
    features: [
      "Online Booking: Appointment scheduling with slot management.",
      "Real-time Updates: Push notifications for service status.",
      "Inventory Management: Track spare parts and reorder levels.",
      "Billing & Invoicing: Automated PDF invoice generation.",
      "Mobile App: Dedicated app for customers to track vehicle history."
    ],
    technologies: ["NestJS", "React", "Mobile (Flutter/React Native)", "PostgreSQL", "Docker", "Redis"],
    role: "Backend Architect"
  },
  {
    id: "wall-damage-backend",
    title: "Wall Damage AI Backend",
    image: wallDamageImg,
    description: "An end-to-end AI-driven backend for automated wall damage detection, classification, and repair estimation.",
    fullDescription: "A high-performance hybrid system combining YOLOv8 for precise damage localization and ResNet-50 for context-aware texture classification. The system features a custom 'Voter Algorithm' to reconcile model predictions and integrates Google Gemini 1.5 Pro to generate actionable remediation steps and material estimates. Built with a scalable NestJS orchestrator and Python-based AI inference pipeline.",
    features: [
      "Hybrid ML Pipeline: Ensemble strategy using YOLOv8 and ResNet-50 for superior accuracy.",
      "Cost & Material Estimation: Integrated logic for calculating repair extents and costs.",
      "GenAI Integration: Automated repair instructions generated via Gemini 1.5 Pro.",
      "High-Performance IPC: Low-latency bridge between NestJS and Python using child processes.",
      "Forensic Logging: Detailed audit trails of the AI decision-making process."
    ],
    technologies: ["Python", "YOLOv8", "ResNet-50", "NestJS", "Google Gemini API", "PyTorch", "TensorFlow"],
    role: "Lead AI & Backend Engineer",
    video: "https://res.cloudinary.com/djrw4gbk9/video/upload/v1769853543/wall_Damage_backend_mweknk.mp4",
    documents: [
      { title: "Technical Research Report", src: wallDamageResearchDoc },
      { title: "Backend Documentation", src: wallDamageBackendDoc },
    ]
  },
];

export const RESEARCH = [
  {
    id: "wall-damage-research",
    title: "AI Framework for Automated Wall Damage Analysis & Detection",
    description: "A comprehensive thesis exploring the application of ensemble deep learning models (YOLOv8 & ResNet-50) for structural health monitoring. This research details a hybrid architecture for high-precision defect identification, localization, and automated repair cost estimation.",
    papers: [
      { title: "Research Thesis", src: wallDamageThesis },
      { title: "Technical Paper", src: wallDamageDetectionPaper }
    ],
    technologies: ["Deep Learning", "YOLOv8", "ResNet-50", "Computer Vision", "Python", "PyTorch"],
    metrics: {
      resnet: [
        { title: "Loss Curve", url: "https://res.cloudinary.com/djrw4gbk9/image/upload/v1769931806/resnet50_v3_loss_fdnc17.png" },
        { title: "Learning Rate", url: "https://res.cloudinary.com/djrw4gbk9/image/upload/v1769931805/resnet50_v3_learning_rate_xtyfix.png" },
        { title: "Accuracy Curve", url: "https://res.cloudinary.com/djrw4gbk9/image/upload/v1769931803/resnet50_v3_accuracy_es0wvc.png" }
      ],
      yolo: [
        { title: "R-Curve", url: "https://res.cloudinary.com/djrw4gbk9/image/upload/v1769931775/R_curve_w49kno.png" },
        { title: "PR-Curve", url: "https://res.cloudinary.com/djrw4gbk9/image/upload/v1769931773/PR_curve_wzbvsr.png" },
        { title: "P-Curve", url: "https://res.cloudinary.com/djrw4gbk9/image/upload/v1769931772/P_curve_zgwynl.png" },
        { title: "Confusion Matrix", url: "https://res.cloudinary.com/djrw4gbk9/image/upload/v1769931771/confusion_matrix_normalized_dcdbz7.png" },
        { title: "F1-Curve", url: "https://res.cloudinary.com/djrw4gbk9/image/upload/v1769931772/F1_curve_f8xegr.png" }
      ],
      training: [
        { title: "Validation Preds", url: "https://res.cloudinary.com/djrw4gbk9/image/upload/v1769931982/val_batch2_pred_k91s4u.jpg" },
        { title: "Validation Labels", url: "https://res.cloudinary.com/djrw4gbk9/image/upload/v1769931979/val_batch2_labels_nssf73.jpg" },
        { title: "Train Batch 0", url: "https://res.cloudinary.com/djrw4gbk9/image/upload/v1769931967/train_batch0_yk4bgh.jpg" },
        { title: "Train Batch 1", url: "https://res.cloudinary.com/djrw4gbk9/image/upload/v1769931970/train_batch1_m820ao.jpg" },
        { title: "Labels Correlogram", url: "https://res.cloudinary.com/djrw4gbk9/image/upload/v1769931938/labels_correlogram_oqyoyp.jpg" },
        { title: "Labels Distribution", url: "https://res.cloudinary.com/djrw4gbk9/image/upload/v1769931882/labels_celxax.jpg" }
      ]
    }
  },
];

export const CONTACT = {
  address: "Horana, Western Province, Sri lanka",
  phoneNo: "+94 705 140 790",
  email: "prabashanapubudu@gmail.com",
};
