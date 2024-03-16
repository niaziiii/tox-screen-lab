import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";
import TestCard from "../assets/testcard.png";
import TestingCup from "../assets/Testing-Cup.png";
import Gloves from "../assets/gloves.png";
import Sphygmomanometer from "../assets/Sphygmomanometer.png";
import TestingUniform from "../assets/Testing-uniform.png";
import Stethoscope from "../assets/Stethoscope.png";

export const APP_ROUTES = {
  home: "/",
  signUp: "sign-up",
  tests: "/tests",
  reqForInfo: "/request-information",
  howThisWorks: "/how-this-works",
  notFound: "*",
  news: "/news",
  jobs: "/jobs",
  apply: "/apply",
};
export const navItems = [
  {
    name: "Test",
    path: APP_ROUTES.tests,
  },
  {
    name: "How this works",
    path: APP_ROUTES.howThisWorks,
  },
  {
    name: "About us",
    path: APP_ROUTES.notFound,
  },
  {
    name: "News",
    path: APP_ROUTES.news,
  },
  {
    name: "Jobs",
    path: APP_ROUTES.jobs,
  },
];

export const footerItems = {
  menu: [
    {
      name: "Sign up for Testing",
      path: APP_ROUTES.signUp,
    },
    {
      name: "Request information",
      path: "/request-information",
    },
    {
      name: "How this works",
      path: APP_ROUTES.howThisWorks,
    },
    {
      name: "About us",
      path: "/About-us",
    },
    {
      name: "News",
      path: APP_ROUTES.news,
    },
    {
      name: "Jobs",
      path: APP_ROUTES.jobs,
    },
  ],
  legal: [
    {
      name: "Privacy Policy",
      path: "/Privacy-Policy",
    },
    {
      name: "Copyright Information",
      path: "/Copyright-Information",
    },
    {
      name: "Cookie Policy",
      path: "/Cookie-Policy",
    },
  ],
  getInTouch: [
    {
      path: "/",
      icon: FaFacebook,
    },
    {
      path: "/",
      icon: BsTwitterX,
    },
    {
      path: "/",
      icon: TfiYoutube,
    },
    {
      path: "/",
      icon: FaLinkedin,
    },
  ],
};

export const testCardsData = [
  {
    title: "Comprehensive Health Profile - Men's",
    price: 349,
    url: APP_ROUTES.tests,
    imageSrc: TestCard,
  },
  {
    title: "Comprehensive Health Profile - Men's",
    price: 349,
    url: APP_ROUTES.tests,
    imageSrc: TestCard,
  },
  {
    title: "Comprehensive Health Profile - Men's",
    price: 349,
    url: APP_ROUTES.tests,
    imageSrc: TestCard,
  },
  {
    title: "Comprehensive Health Profile - Men's",
    price: 349,
    url: APP_ROUTES.tests,
    imageSrc: TestCard,
  },
  {
    title: "Comprehensive Health Profile - Men's",
    price: 349,
    url: APP_ROUTES.tests,
    imageSrc: TestCard,
  },
  {
    title: "Comprehensive Health Profile - Men's",
    price: 349,
    url: APP_ROUTES.tests,
    imageSrc: TestCard,
  },
  {
    title: "Comprehensive Health Profile - Men's",
    price: 349,
    url: APP_ROUTES.tests,
    imageSrc: TestCard,
  },
];

export const inPersonTestsCardData = [
  {
    title: "Comprehensive Health Profile - Men's",
    price: 349,
    url: APP_ROUTES.tests,
    imageSrc: TestCard,
  },
  {
    title: "Comprehensive Health Profile - Men's",
    price: 349,
    url: APP_ROUTES.tests,
    imageSrc: TestCard,
  },
];

export const supplyData = [
  {
    title: "Testing cups",
    price: 49.0,
    url: "#",
    imageSrc: TestingCup,
  },
  {
    title: "Medical Gloves",
    price: 49.0,
    url: "#",
    imageSrc: Gloves,
  },
  {
    title: "Testing Uniforms",
    price: 49.0,
    url: "#",
    imageSrc: TestingUniform,
  },
  {
    title: "Sphygmomanometer",
    price: 49.0,
    url: "#",
    imageSrc: Sphygmomanometer,
  },
  {
    title: "Stethoscope, fontal, Pinard",
    price: 49.0,
    url: "#",
    imageSrc: Stethoscope,
  },
];
