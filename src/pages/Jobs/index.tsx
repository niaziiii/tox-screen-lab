import AppHeading from "../../common/Heading";
import AppButton from "../../common/Button";
import JobCard from "./JobCard";

export default function Job() {
  return (
    <div className="h-full w-full">
      <div className="h-full w-[95%] md:w-[65%] m-auto mt-6 md:mt-14 pb-10">
        <div className="flex justify-center w-full">
          <AppHeading
            title="Welcome to the Tox- Screen Job Program"
            className=" md:!text-5xl text-center"
          />
        </div>
        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 md:gap-y-20 ">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <div className="mt-8 md:mt-16 mb-8 p-2 flex items-center justify-center">
          <AppButton
            title="Apply"
            className="bg-transparent !text-lightBlue  hover:bg-transparent hover:!text-lightBlue/70 w-[140px]"
            style={{ border: "1px solid #41BFDD", borderRadius: "15px" }}
          />
        </div>
      </div>
    </div>
  );
}
