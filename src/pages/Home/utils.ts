import { CarouselResponsiveOption } from "primereact/carousel";
import { classNames } from "primereact/utils";

export const responsiveOptions: CarouselResponsiveOption[] = [
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1299px",
    numVisible: 1,
    numScroll: 1,
  },
];
export const carouselItems = [
  {
    title: "Test from Tox-Screen Lab",
    description:
      " Testing options like solid tissue biopsies and blood-based testing alternatives help clear the path to better outcomes for patients.",
    photo: "/doctors/consult.png",
  },
  {
    title: "BIOPHARMA",
    description:
      "Our global lab footprint, vast clinical data and scientific expertise help accelerate the drug development process.",
    photo: "/doctors/consult.png",
  },
];

export const HomePageAssest = {
  infos: [
    {
      name: "Sign up for Testing",
      img: "/icons/document.png",
      path: "/",
    },
    {
      name: "Request information",
      img: "/icons/receipt-search.png",
      path: "/",
    },
    {
      name: "Shop for Tests",
      img: "/icons/bag.png",
      path: "/",
    },
  ],
};
