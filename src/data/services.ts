import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  // {
  //   id: 1,
  //   title: "Mobile App Development",
  //   icons: [
  //     "/skills/socket-io.png",
  //     "/skills/dart.svg",
  //     "/skills/flutter.svg",
  //     "/skills/getx.png",
  //     "/skills/firebase.svg",
  //   ],
  //   shortDescription:
  //     "I create engaging mobile applications for your audience.",
  //   description:
  //     "I create captivating mobile apps from concept to deployment for iOS and Android. Using cutting-edge technologies, I ensure seamless performance, intuitive interfaces, and robust functionality that align with your business goals. Enjoy a flawless user experience and outstanding results.",
  // },
  {
    id: 2,
    title: "Web Development",
    icons: [
      "/skills/redux.svg",
      "/skills/react.svg",
      "/skills/angular.png",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "I create responsive, user-friendly, and SEO-optimized websites, from custom designs to e-commerce platforms, ensuring a seamless and high-performing online presence.",
    description:
    "I design and build easy-to-use, attractive websites to help you stand out online. Whether you need a basic site or a full e-commerce platform, I create custom solutions using the latest technology. My websites are fast, responsive, and SEO-friendly, ensuring a smooth experience for your visitors.",
      servicesProvided: [
        "Custom Website Development – Tailored solutions to meet unique business needs.",
        "Responsive Design – Ensuring websites look great on all devices.",
        "E-Commerce Development – Secure and scalable online stores.",
        "SEO Optimization – Improving visibility and search rankings.",
        "Web Performance Optimization – Enhancing speed and efficiency.",
        "CMS Integration – Easy content management with WordPress, Headless CMS, and more.",
        "API Development & Integration – Connecting with third-party services seamlessly.",
        "Maintenance & Support – Ongoing updates and technical support."
      ]
  },
  {
    id: 3,
    title: "Backend Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/docker.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "I provide backend development services to build secure, fast, and scalable applications. From creating APIs to managing databases, I ensure smooth communication between the frontend and backend. Using technologies like Node.js, Express.js, and various databases, I develop reliable and efficient systems that power your applications.",
      servicesProvided:[]
  },
  {
    id: 4,
    title: "Product Strategy",
    icons: [
      "/skills/git.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
      "/skills/ubuntu.png",
    ],
    shortDescription:
      "I define goals, target audiences, and roadmap for success.",
    description:
      "I offer product strategy services to help you turn ideas into successful digital solutions. From market research to planning and execution, I ensure your product meets business goals and user needs. By defining clear roadmaps, optimizing features, and leveraging the latest technology, I help create scalable and competitive products.",
      servicesProvided:[]

  },
  {
    id: 5,
    title: "DevOps",
    icons: [
      "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/jenkins.svg",
      "/skills/gcloud.png",
    ],
    shortDescription: "I streamline development and operations processes.",
    description:
      "I streamline development and operations processes through effective DevOps practices. I implement continuous integration and deployment pipelines, manage cloud infrastructure, and use containerization to ensure efficient, reliable, and scalable software delivery. Improve your workflow with DevOps solutions.",
      servicesProvided:[]

  },
  {
    id: 6,
    title: "Database Management",
    icons: [
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/redis.svg",
      "/skills/sql.png",
    ],
    shortDescription: "I manage and optimize your database systems.",
    description:
      "I manage and optimize your database systems for performance, reliability, and scalability. With expertise in SQL and NoSQL databases, I design schemas, write complex queries, and implement best practices for data integrity and security. Ensure your data is managed effectively and efficiently.",
      servicesProvided:[]

  },
];

export default services;
