import { useState } from "react";
import { Carousel } from "primereact/carousel";
import { carouselItems, responsiveOptions } from "./utils";
import AppButton from "../../common/Button";
import { classNames } from "primereact/utils";
import AppHeading from "../../common/Heading";
import uniqid from "uniqid";

interface IItems {
  title: string;
  description: string;
  photo: string;
}

export default function TestFromTox() {
  const [products] = useState<IItems[]>([
    ...carouselItems,
    ...carouselItems,
    ...carouselItems,
  ]);

  return (
    <div className="card">
      <div className=" py-20 bg-lightGray ">
        <div className="w-[95%] md:w-[85%] mx-auto">
          <AppHeading
            title=" Test from Tox-Screen Lab"
            className="text-center"
          />
          <Carousel
            value={products}
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            className="custom-carousel"
            //   circular
            itemTemplate={ItemTemplate}
            pt={Tailwind.carousel}
          />
        </div>
      </div>
    </div>
  );
}

const ItemTemplate = (item: IItems) => {
  return (
    <div className="lg:w-[800px] my-14 mx-auto bg-white  flex flex-col-reverse md:flex-row items-center  xl:!mr-6 rounded-[15px] px-4 py-6">
      <div className="md:pl-6 md:pr-2 mt-5 md:mt-0">
        <h3 className="text-2xs text-darkBlue font-bold">{item.title}</h3>
        <p className="mt-4 text-[15px]">{item.description}</p>
        <div className="mt-4">
          <AppButton
            title="Learn more"
            className="bg-transparent !text-lightBlue  hover:bg-transparent hover:!text-lightBlue/70 w-[140px]"
            style={{ border: "1px solid #41BFDD" }}
            link
            path={`/tests/${uniqid()}`}
          />
        </div>
      </div>
      <div className="max-h-[310px] flex items-center justify-center">
        <img
          src={item.photo}
          alt="consult"
          className=" md:min-h-[200px] rounded-[10px] w-[550px] min-w-[200px]"
        />
      </div>
    </div>
  );
};

const Tailwind = {
  carousel: {
    root: {
      className: "flex flex-col",
    },
    content: { className: "flex flex-col overflow-auto" },
    container: ({ props }: { props: any }) => ({
      className: classNames("flex", {
        "flex-row": props.orientation !== "vertical",
        "flex-col": props.orientation == "vertical",
      }),
    }),
    previousbutton: {
      className: classNames(
        "flex justify-center items-center self-center overflow-hidden relative shrink-0 grow-0",
        "w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mx-2"
      ),
    },
    itemscontent: { className: "overflow-hidden w-full" },
    itemscontainer: ({ props }: { props: any }) => ({
      className: classNames("flex ", {
        "flex-row": props.orientation !== "vertical",
        "flex-col h-full": props.orientation == "vertical",
      }),
    }),
    item: ({ props }: { props: any }) => ({
      className: classNames("flex shrink-0 grow", {
        "w-1/3": props.orientation !== "vertical",
        "w-full": props.orientation == "vertical",
      }),
    }),
    indicators: {
      className: classNames("flex flex-row justify-center flex-wrap"),
    },
    indicator: {
      className: "mr-2 mb-2",
    },
    indicatorbutton: ({ context }: { context: any }) => ({
      className: classNames(
        "w-8 h-2 transition duration-200 rounded-0",
        "focus:outline-none focus:outline-offset-0 ",
        {
          "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600":
            !context.active,
          "bg-lightBlue hover:bg-lightBlue/50": context.active,
        }
      ),
    }),
  },
};
