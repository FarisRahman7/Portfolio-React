import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  portfoliophoto,
  focus,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React/Redux Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Programmer - C++/Python",
    icon: creator,
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

export const experiences = [
  {
    title: "Netaji Subhas University of Technology",
    company_name: "Bachelor of Technology",
    icon: starbucks,
    link: "http://nsut.ac.in/en/home",
    iconBg: "#383E56",
    date: "Aug 2020 - May 2024",
    points: [
      "Computer Science and Engineering with specialisation in Mathematics",
    ],
  },
  {
    title: "SAH - Jamia Millia Islamia",
    company_name: "Senior Secondary School Certification",
    icon: tesla,
    link: "https://jmi.ac.in/",
    iconBg: "#E6DEDD",
    date: "Aug 2017 - May 2019",
    points: [
      "Science - PCM",
    ],
  },
  {
    title: "Minto Circle - Aligarh Muslim University",
    company_name: "High School",
    icon: shopify,
    link: "https://www.amu.ac.in/",
    iconBg: "#383E56",
    date: "Aug 2015 - May 2017",
    points: [
      "General",
    ],
  },
  {
    title: "Blooming Buds Co. Ed. School",
    company_name: "Primary School",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2006 - 2015",
    points: [
      "General",
    ],
  },
];
export const testimonials = [
  {
    testimonial:
      "Captained the Volleyball winning team during the 2023 winter sports",
    name: "Volleyball Team",
    designation: "",
    company: " Captain/2023",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Active member at JUNOON , the Photography club at NSUT.",
    name: "JUNOON",
    designation: "",
    company: "Member/2022-2024",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export const projects = [
  {
    name: "Leetcode Profile",
    description:
      "Web-based platform for practicing and improving coding skills through various coding challenges and competitions. It helps users prepare for technical interviews by solving problems in different programming languages.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Contests",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://leetcode.com/u/FarisRehman/",
  },
  {
    name: "GFG Profile",
    description:
      "A web application that provides resources for computer science and programming students. It includes articles, tutorials, and coding problems to help users learn algorithms, data structures, and various programming concepts.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Contests",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.geeksforgeeks.org/user/farisug20/",
  },
  {
    name: "Image Search App",
    description:
      "An application that allows users to search for images using keywords. It leverages image search APIs to fetch and display relevant images based on user input, providing a visual search experience.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://image-search-app-rouge-sigma.vercel.app/",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website created using React, Vite, and Three.js. It showcases projects, skills, and experiences in an interactive and visually appealing manner.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      
    ],
    image: portfoliophoto,
    source_code_link: "https://portfolio-react-topaz-zeta.vercel.app/",
  },
  {
    name: "Classification of Depression on Social Media",
    description:
      "A machine learning project that analyzes social media posts to classify and detect signs of depression. It uses natural language processing (NLP) techniques to evaluate sentiment and token patterns in user posts.",
    tags: [
      {
        name: "twitter",
        color: "blue-text-gradient",
      },
      {
        name: "sentiment",
        color: "green-text-gradient",
      },
      {
        name: "token",
        color: "pink-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://github.com/FarisRahman7/Twitter-Depression-Classification",
  },
  {
    name: "FOCUS",
    description:
      "A ALL-IN-ONE application that enables you to be on top of your Timetable and Tasks.",
    tags: [
      {
        name: "Coming soon",
        color: "white-text-gradient",
      },
      
    ],
    image: focus,
    source_code_link: "",
  },
];
