import { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Next Pizza",
    subtitle: "Web application for ordering pizza",
    description:
      "Developed an online store for desktop. Designed the database architecture using PostgreSQL, integrated the YooKassa payment system, configured address autofill with Dadata, and set up email notifications via Resend. Implemented a user-friendly interface with efficient form data processing and modern UI components.",
    href: "https://next-pizza-dun-two.vercel.app/",
    image: "/assets/projects/next-pizza.jpg",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/techs/nextjs.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/techs/ts.svg",
      },
      {
        id: 3,
        name: "Zustand",
        path: "/assets/techs/zustand.svg",
      },
      {
        id: 4,
        name: "TalwindCSS",
        path: "/assets/techs/tailwindcss.svg",
      },
      {
        id: 5,
        name: "ShadCN",
        path: "/assets/techs/shadcn.svg",
      },
      {
        id: 6,
        name: "Prisma",
        path: "/assets/techs/prisma.svg",
      },
      {
        id: 7,
        name: "PostgreSQL",
        path: "/assets/techs/postgresql.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Soty",
    subtitle: "Music web application",
    description:
      "Built a digital music service integrated with the Spotify API, providing access to millions of songs. Implemented user authentication, an audio player, a search system, a favorites system, navigation, smooth content loading, visual effects, and a notification system. Also configured CI/CD for automatic application deployment.",
    href: "https://sadmearise.github.io/soty/",
    image: "/assets/projects/soty.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/techs/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/techs/ts.svg",
      },
      {
        id: 3,
        name: "React Router",
        path: "/assets/techs/rrouter.svg",
      },
      {
        id: 4,
        name: "Redux",
        path: "/assets/techs/redux.svg",
      },
      {
        id: 5,
        name: "TalwindCSS",
        path: "/assets/techs/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Kratkoe",
    subtitle: "E-commerce clothing store",
    description:
      "Developed an e-commerce application as a team lead of a 3-person team. Introduced the SCRUM methodology, integrated the Commercetools API, and conducted code reviews. Implemented key features such as routing, product cards, cart management, filtering, sorting, search, category navigation, and pagination, ensuring a convenient and functional user interface.",
    href: "https://sadmearise.github.io/eCommerce-Application/",
    image: "/assets/projects/kratkoe.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/techs/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/techs/ts.svg",
      },
      {
        id: 3,
        name: "React Router",
        path: "/assets/techs/rrouter.svg",
      },
      {
        id: 4,
        name: "Redux",
        path: "/assets/techs/redux.svg",
      },
      {
        id: 5,
        name: "Sass",
        path: "/assets/techs/sass.svg",
      },
      {
        id: 6,
        name: "Material UI",
        path: "/assets/techs/mui.svg",
      },
      {
        id: 7,
        name: "Jest",
        path: "/assets/techs/jest.svg",
      },
    ],
  },
  {
    id: 4,
    title: "CSS Selectors",
    subtitle: "CSS practice simulator",
    description:
      "Developed a simulator for practicing CSS, featuring a level and hint system, a code editor, an HTML preview window, level navigation, syntax highlighting, progress saving after page reload, and other functionalities.",
    href: "https://sadmearise.github.io/css-selectors/",
    image: "/assets/projects/css-selectors.jpg",
    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/techs/ts.svg",
      },
      {
        id: 2,
        name: "Sass",
        path: "/assets/techs/sass.svg",
      },
      {
        id: 3,
        name: "HTML",
        path: "/assets/techs/html5.svg",
      },
      {
        id: 4,
        name: "Jest",
        path: "/assets/techs/jest.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Minesweeper",
    subtitle: "Classic Minesweeper game",
    description:
      "Developed a classic Minesweeper game with customizable game board settings, game state preservation after reload, a leaderboard, sound effects, statistics, color themes, and more. A key feature of the project is HTML generation directly via JavaScript.",
    href: "https://sadmearise.github.io/minesweeper/",
    image: "/assets/projects/minesweeper.jpg",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/techs/javascript.svg",
      },
      {
        id: 2,
        name: "Sass",
        path: "/assets/techs/sass.svg",
      },
      {
        id: 3,
        name: "HTML",
        path: "/assets/techs/html5.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Virtual Keyboard",
    subtitle: "Interactive keyboard emulator",
    description:
      "Developed a virtual keyboard that mimics the behavior of a real keyboard. Implemented an input field with editing capabilities, language switching, case toggling, visual key press display, and other features. A key feature of the project is HTML generation directly via JavaScript.",
    href: "https://sadmearise.github.io/virtual-keyboard/",
    image: "/assets/projects/virtual-keyboard.jpg",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/techs/javascript.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/techs/css3.svg",
      },
      {
        id: 3,
        name: "HTML",
        path: "/assets/techs/html5.svg",
      },
    ],
  },
  {
    id: 7,
    title: "Antitela",
    subtitle: "Music band website",
    description:
      "Developed a multi-page website featuring components such as a Swiper.js-based slider, an audio player, content filtering, and a burger menu. Implemented smooth anchor transitions, cross-browser compatibility, and a responsive design.",
    href: "https://sadmearise.github.io/antytila/dist/",
    image: "/assets/projects/antytila.jpg",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/techs/javascript.svg",
      },
      {
        id: 2,
        name: "Sass",
        path: "/assets/techs/sass.svg",
      },
      {
        id: 3,
        name: "HTML",
        path: "/assets/techs/html5.svg",
      },
    ],
  },
];
