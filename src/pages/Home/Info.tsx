import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HomePageAssest } from "./utils";

export default function Info() {
  const { infos } = HomePageAssest;
  return (
    <div className="w-[85%] m-auto py-16">
      <div className="flex w-full justify-center md:justify-between flex-wrap gap-x-4 gap-y-8 ">
        {infos.map((info) => {
          return (
            <div
              key={info.name}
              className=" w-[300px] p-6 rounded-[10px] shadow-md flex justify-between items-center"
            >
              <div>
                <img src={info.img} className="h-[32px] w-[32px]" />
                <p className="mt-4 font-semibold">{info.name}</p>
              </div>
              <Link
                key={info.name}
                to={info.path}
                className="text-3xl hover:text-dark/80 text-dark"
              >
                <MdKeyboardArrowRight />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
