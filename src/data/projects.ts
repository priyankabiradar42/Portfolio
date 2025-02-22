import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "Fintech & CRM Integration",
    title: "Fintech & CRM Integration",
    description:
      "Integrated multiple applications into Zoho CRM for seamless customer and payment management. Developed custom scripts and APIs using Zoho Client Scripts, Node.js, and Deluge to automate workflows and improve system efficiency.",
    icon: "/skills/zoho.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["Node JS", "ClientScript", "Deluge"],
  },
  {
    id: "C48 Collections",
    title: "Banking & Legal Management",
    description:
      "Developed a Litigation and Legal Management System for banks to manage legal cases related to overdue payments. Implemented features for case tracking, bankruptcy searches, real-time notifications, and legal document management.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["React.js", "Redux", "Material UI", "Node Js","AWS Jenkins"],
  },
  {
    id: "Hospitality Management",
    title: "Hospitality Management",
    description:
      "Built a web-based application for managing hostels, including property administration, organization mapping, and guest bookings. Integrated role-based access control and secure authentication to streamline operations.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/video-calling-app-flutter",
    url: "https://github.com/nixrajput/video-calling-app-flutter/releases",
    tags: ["React", "Node JS", "Postgressql", "GCP Cloud","Express JS","JavaScript"],
  },
  {
    id: "Credit Management & Finance",
    title: "Credit Management & Finance",
    description:
      "Developed a platform for credit management services, enabling businesses to manage invoices, overdue payments, and legal notices. Integrated CMS functionality, notification modules (SMS, IVR, Email), and API-based automation for streamlined operations.",
    icon: "/skills/angular.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/social-media-api-nodejs",
    tags: ["Node.js", "Express.js", "Sql Server","Angular","JavaScript","Devops"],
  },
  {
    id: "Education & E-Learning",
    title: "Education & E-Learning",
    description:
      "Built an online learning platform for students, offering video courses, case discussions, and certification programs. Integrated user authentication, subscription plans, and payment processing for a smooth learning experience.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/grocery-list-maker-flutter",
    url: "https://github.com/nixrajput/grocery-list-maker-flutter/releases/latest",
    tags: ["React Js", "Redux", "Node Js", "Express Js", "MongoDB","GCP"],
  },
  {
    id: "Fintech & Payment Processing",
    title: "intech & Payment Processing",
    description:
      " Developed a multi-bank payment processing platform with features like transaction monitoring, omni-channel payment acquisition, and terminal management for secure financial transactions.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/ecommerce-api-nodejs",
    tags: ["Node.js", "Express.js", "Mongoose", "React JS","AWS","PUG"],
  },
  {
    id: "Global Relocation & Moving Services",
    title: "Flutter Carousel Widget Package",
    description:
      "Worked on data processing for international relocation and moving services. Developed APIs for handling sales, expense revenue, and financial data while contributing to data migration and system integration.",
    icon: "/skills/angular.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["Angular", "SQL Server", "Node Js"],
  },
  {
    id: "Commercial Pharma & Market Research",
    title: "Commercial Pharma & Market Research",
    description:
      "Assisted in market-specific data analysis for pharmaceutical companies by integrating sales data into a centralized data warehouse, enabling business intelligence and forecasting.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["Node JS", "MY SQL"],
  }
];
export default projects;
