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
  news: "/news/",
  notFound: "*",
};

export const navItems = [
  {
    name: "Test",
    path: "/tests",
  },
  {
    name: "How this works",
    path: "/how-this-works",
  },
  {
    name: "About us",
    path: "/about-us",
  },
  {
    name: "News",
    path: "/news",
  },
  {
    name: "Jobs",
    path: "/jobs",
  },
];

export const footerItems = {
  menu: [
    {
      name: "Sign up for Testing",
      path: "/sign-up",
    },
    {
      name: "Request information",
      path: "/request-information",
    },
    {
      name: "How this works",
      path: "/how-this-works",
    },
    {
      name: "About us",
      path: "/about-us",
    },
    {
      name: "News",
      path: "/news",
    },
    {
      name: "Jobs",
      path: "/jobs",
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
