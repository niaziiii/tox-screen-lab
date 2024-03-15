import { useState } from "react";
import AppHeading from "../../common/Heading";
import { howItWorksData } from "./utils";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  const hows = [
    "In-person",
    "Home collection kit",
    "At-home test",
    "In home simple collection",
  ];
  return (
    <div className=" py-20 bg-lightGray ">
      <div className="w-[85%] mx-auto">
        <AppHeading title="How it’s work?" className="text-center" />
        <div className="mt-8 w-full">
          <div className="flex gap-4 w-full flex-wrap">
            {hows.map((how, i) => {
              return (
                <button
                  onClick={() => setActive(i)}
                  className={`px-4 py-1 rounded-[15px] border-2 border-darkBlue text-darkBlue font-semibold hover:bg-darkBlue transition-all hover:text-white ${
                    active == i ? "bg-darkBlue text-white" : ""
                  }`}
                  key={how}
                >
                  {how}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {howItWorksData.map((data, i) => {
              return (
                <div
                  key={i}
                  className="w-full flex items-center justify-center"
                >
                  <div className="p-4 w-[540px] h-full bg-white rounded-[15px] flex flex-col justify-center">
                    <div className="mx-auto my-4 h-[50px] w-[50px] rounded-full bg-lightBlue flex items-center justify-center font-semibold text-white">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-darkBlue text-lg md:text-xl text-center">
                      {data.title}
                    </h3>
                    <p className=" text-center text-xs mt-2">
                      {data.description}
                    </p>
                    {data.name && data.path && (
                      <div className="mt-3 text-center pb-3">
                        <Link
                          className="text-lightBlue border-b border-lightBlue"
                          to={data.path}
                        >
                          {data.name}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
