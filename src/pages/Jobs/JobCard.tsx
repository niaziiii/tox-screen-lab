import { Link } from "react-router-dom";
import AppHeading from "../../common/Heading";
const JobCard = () => {
  return (
    <Link to="/">
      <div className=" p-6 rounded-[10px] shadow-md flex-col  flex justify-between items-start hover:bg-gray-100">
        <AppHeading
          title="Top Performing Offers"
          className="!text-xs lg:!text-2xl"
        />
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          ante vel libero eleifend cursus. Vestibulum auctor
        </p>
      </div>
    </Link>
  );
};

export default JobCard;
