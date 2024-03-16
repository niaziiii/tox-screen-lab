import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";

export const APP_ROUTES = {
  home: "/",
  signUp: "sign-up",
  tests: "/tests",
  reqForInfo: "/request-information",
  howThisWorks: "/how-this-works",
  aboutUs: "/about-us",
  notFound: "*",
  news: "/news",
  jobs: "/jobs",
  apply: "/apply",
  payment: "/payment",
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
    path: APP_ROUTES.aboutUs,
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
      path: APP_ROUTES.aboutUs,
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
