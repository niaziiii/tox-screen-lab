import { CarouselResponsiveOption } from "primereact/carousel";

export const responsiveOptions: CarouselResponsiveOption[] = [
  {
    breakpoint: "1580px",
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
      path: "/sign-up",
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

export const howItWorksData = [
  {
    title: "Buy a lab test & schedule an appointment",
    description:
      "No doctor visit required for purchase. Book a visit to one of 2000+ Quest locations.",
    path: "/",
    name: "Schedule an appointment",
  },
  {
    title: "Visit Quest for sample collection",
    description:
      "Complete your test sample collection during your scheduled appointment.",
  },
  {
    title: "Get fast results online",
    description: "Access results online as soon as they’re available.",
    path: "/",
    name: "View result",
  },
  {
    title: "Get physician support",
    description:
      "Discuss your results with an independent physician at no extra cost.",
  },
];

export const testSuppliesData = [
  {
    title: "Comprehensive Health Profile - Men's",
    price: 349,
    url: "/tests/",
    imageSrc: "/supplies/image-1.png",
  },
  {
    title: "Comprehensive Health Profile - Men's",
    price: 349,
    url: "/tests/",
    imageSrc: "/supplies/image-2.png",
  },
  {
    title: "Comprehensive Health Profile - Men's",
    price: 349,
    url: "/tests/",
    imageSrc: "/supplies/image-3.png",
  },
];
