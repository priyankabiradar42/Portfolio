import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      }
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
      {
        title: "SASS",
        level: SkillLevel.Intermediate,
        icon: "/skills/sass.svg",
      },
      {
        title: "Redux Toolkit",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },
      {
        title: "Angular",
        level: SkillLevel.Expert,
        icon: "/skills/angular.png",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      },
      {
        title: "Socket.io",
        level: SkillLevel.Intermediate,
        icon: "/skills/socket-io.png",
      },
      {
        title: "GraphQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/graphql.png",
      }
    ],
  },
  // {
  //   title: "Mobile App Development",
  //   items: [
  //     {
  //       title: "Flutter",
  //       level: SkillLevel.Expert,
  //       icon: "/skills/flutter.svg",
  //     },
  //     {
  //       title: "GetX",
  //       level: SkillLevel.Expert,
  //       icon: "/skills/getx.png",
  //     },
  //   ],
  // },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
      {
        title: "SQL Server",
        level: SkillLevel.Beginner,
        icon: "/skills/sql.png",
      },
      {
        title: "Redis",
        level: SkillLevel.Beginner,
        icon: "/skills/redis.svg",
      }
    ],
  },
  {
    title: "DevOps/VCS",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Beginner,
        icon: "/skills/docker.png",
      },
      {
        title: "AWS",
        level: SkillLevel.Intermediate,
        icon: "/skills/aws.svg",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },      
      {
        title: "Google Cloud",
        level: SkillLevel.Expert,
        icon: "/skills/gcloud.png",
      },
    ],
  },
  // {
  //   title: "Miscellaneous",
  //   items: [
  //     {
  //       title: "Firebase",
  //       level: SkillLevel.Intermediate,
  //       icon: "/skills/firebase.svg",
  //     },
  //     {
  //       title: "Ubuntu",
  //       level: SkillLevel.Intermediate,
  //       icon: "/skills/ubuntu.png",
  //     },
  //   ],
  // },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
  {
    title: "Others",
    items: [
      {
        title: "VS Code",
        level: SkillLevel.Expert,
        icon: "/images/vscode.jpeg",
      },
      {
        title: "Postman",
        level: SkillLevel.Expert,
        icon: "/images/postman.jpeg",
      },
      {
        title: "Figma",
        level: SkillLevel.Expert,
        icon: "/images/figma.png",
      },
    ],
  },
];

export default skills;
