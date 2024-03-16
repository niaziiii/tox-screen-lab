import { Link } from "react-router-dom";
import AppHeading from "../../common/Heading";
import AppButton from "../../common/Button";

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

const JobCard = () => {
  return (
    <div className=" p-6 rounded-[10px] shadow-md flex-col  flex justify-between items-start">
      <Link to="/">
        <AppHeading
          title="Top Performing Offers"
          className="!text-xs lg:!text-2xl"
        />
      </Link>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante
        vel libero eleifend cursus. Vestibulum auctor
      </p>
    </div>
  );
};
