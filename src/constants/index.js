export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Monsoon was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Monsoon. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Monsoon was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title:
      "The Wild Oasis Dashboard - Beautiful dashboard for hotel with charts and stats",
    desc: "The Wild Oasis Dashboard is a dynamic and responsive application built with React+Vite. Leveraging the Context API for efficient state management and React Query for seamless data fetching and caching, it delivers a smooth and modern user experience. Perfect for managing and visualizing real-time data with minimal performance overhead.",
    subdesc:
      "The Wild Oasis Dashboard combines the power of the Context API and React Query to provide efficient state management and real-time data updates, all within a fast and responsive Vite application.",
    href: "https://the-wild-oasis-dashboard-ivory.vercel.app",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/the-wild-oasis-dashboard.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Styled Components",
        path: "assets/styled-component.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      // {
      //   id: 4,
      //   name: "Framer Motion",
      //   path: "/assets/framer.png",
      // },
    ],
  },
  {
    title: "Fast React Pizza - Pizza Ordering App",
    desc: "Fast React Pizza, pizza ordering app is built with React, Vite, and Redux Toolkit, offering an efficient and modern solution for managing state. The app likely allows users to browse a menu, add pizzas to their cart, and place orders seamlessly, leveraging Redux Toolkit's features for global state management and Vite's fast development environment for optimal performance.",
    subdesc:
      "A sleek and efficient pizza ordering app utilizing React for dynamic UI, Vite for fast builds, and Redux Toolkit for streamlined state management, delivering a smooth ordering experience.",
    href: "https://react-pizza-wt94.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "🍕",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "The Wild Oasis Website - Beautiful website created with Nextjs",
    desc: "The Wild Oasis website is a beautifully crafted platform developed using Next.js and Tailwind CSS, ensuring top-notch performance and visually stunning design. It incorporates the Context API for efficient state management, enabling smooth user interactions across the site.",
    subdesc:
      "A sleek and modern website built with Next.js, Tailwind CSS, and Context API, offering exceptional performance, stunning design, and an intuitive user experience.",
    href: "https://the-wild-oasis-website-ivory-iota.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/the-wild-oasis-website.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "React.js",
        path: "/assets/react.svg",
      },
    ],
  },
  {
    title: "WorldWise - A travel tracking app",
    desc: "WorldWise is an engaging travel companion app developed with React and Vite, designed to help users document their journeys by adding cities they've visited. The app leverages geolocation technology, ensuring accurate and effortless tracking of travel locations. Whether you're a globe-trotter or a casual explorer, WorldWise is the perfect tool to log your adventures.",
    subdesc:
      "Track and relive your travels with WorldWise, a React-powered app that uses geolocation to let you log cities you've explored.",
    href: "https://travel-tracking-4364.vercel.app/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/worldwise.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      // {
      //   id: 3,
      //   name: "TypeScript",
      //   path: "/assets/typescript.png",
      // },
      // {
      //   id: 4,
      //   name: "Framer Motion",
      //   path: "/assets/framer.png",
      // },
    ],
  },
  // {
  //   title: "Imaginify - AI Photo Manipulation App",
  //   desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
  //   subdesc:
  //     "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
  //   href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
  //   texture: "/textures/project/project5.mp4",
  //   logo: "/assets/project-logo5.png",
  //   logoStyle: {
  //     backgroundColor: "#1C1A43",
  //     border: "0.2px solid #252262",
  //     boxShadow: "0px 0px 60px 0px #635BFF4D",
  //   },
  //   spotlight: "/assets/spotlight5.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
