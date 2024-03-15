import AppHeading from "../../common/Heading";
import HowItsWorkCard from "../../common/HowItsWorkCard";
import { howItWorksData } from "./utils";
import uniqid from "uniqid";

export default function HowThisWorks() {
  return (
    <div className="h-full w-full">
      <div className="h-full w-[95%] md:w-[85%] m-auto mt-6 md:mt-12 pb-10">
        <div className="flex justify-center w-full">
          <AppHeading title="How it's work?" className=" md:!text-5xl" />
        </div>
        <div className="mt-8 md:mt-16 ">
          <AppHeading
            title="In Person"
            className="!text-xl md:!text-3xl !mb-4 "
          />
          <div className="grid md:grid-cols-2 grid-cols-1">
            {howItWorksData.map((work, i) => (
              <div
                className="w-full m-auto flex items-center justify-center h-full"
                key={uniqid()}
              >
                <HowItsWorkCard data={work} number={i + 1} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 ">
          <AppHeading
            title="Home collection kit"
            className="!text-xl md:!text-3xl !mb-4 "
          />
          <div className="grid md:grid-cols-2 grid-cols-1">
            {howItWorksData.map((work, i) => (
              <div
                className="w-full m-auto flex items-center justify-center h-full"
                key={uniqid()}
              >
                <HowItsWorkCard data={work} number={i + 1} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 ">
          <AppHeading
            title="At-home test"
            className="!text-xl md:!text-3xl !mb-4 "
          />
          <div className="grid md:grid-cols-2 grid-cols-1">
            {howItWorksData.map((work, i) => (
              <div
                className="w-full m-auto flex items-center justify-center h-full"
                key={uniqid()}
              >
                <HowItsWorkCard data={work} number={i + 1} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 ">
          <AppHeading
            title="At-home test"
            className="!text-xl md:!text-3xl !mb-4 "
          />
          <div className="grid md:grid-cols-2 grid-cols-1 items-start justify-start h-full">
            {howItWorksData.map((work, i) => (
              <div
                className="w-full m-auto flex items-start justify-start h-full"
                key={uniqid()}
              >
                <HowItsWorkCard data={work} number={i + 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
