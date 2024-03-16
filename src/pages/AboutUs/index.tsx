import AppButton from "../../common/Button";
import AboutUsCard from "./AboutUsCard";
import { aboutUsData } from "./utils";

export default function AboutUs() {
  return (
    <div className="mt-8 w-full">
      <div className="w-[95%] md:w-[85%] m-auto lg:px-10">
        <div className=" relative rounded-[20px] overflow-hidden">
          <img
            src="/aboutus/img-bg.png"
            alt="about us cover"
            className=" blur-[1px] min-h-[15rem] lg:min-h-[20rem] xl:min-h-[25rem] w-full min-w-[100%]"
          />
          <div
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className="text-white absolute text-center w-full"
          >
            <h2
              className="text-2xl lg:text-4xl font-bold mb-2 md:mb-8"
              style={{ textShadow: "0 0 3px black" }}
            >
              About Us
            </h2>
            <p
              className="w-[100%] sm:w-[80%] m-auto text-sm lg:w-[785px] lg:text-xs"
              style={{ textShadow: "0 0 3px black" }}
            >
              Welcome to Tox Screen Labs, where innovation, precision, and
              compassion converge to redefine your approach to health and
              well-being. Established with a mission to empower individuals on
              their unique health journeys, we pride ourselves on being at the
              forefront of the healthcare revolution.
            </p>
          </div>
        </div>
        <div className="my-[4rem] flex flex-col gap-y-[4rem] md:gap-y-[10rem] gap-x-8">
          {aboutUsData.map((data, i) => (
            <AboutUsCard data={data} key={i} />
          ))}
        </div>
        <div className="w-full my-[4rem] md:my-[8rem]">
          <div className="w-full bg-lightBlue rounded-[15px] py-10">
            <div className="lg:w-[750px] m-auto">
              <h2 className="text-lg sm:text-2xl md:text-4xl text-white text-center font-[500]  ">
                Find your nearest lab location and schedule an appointment for
                test.
              </h2>
              <div className="mt-6 m-auto w-full flex items-center justify-center">
                <AppButton
                  title="Find Lab"
                  className="bg-transparent !text-whtie   hover:bg-transparent hover:!text-white/80"
                  style={{ border: "1px solid white" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
