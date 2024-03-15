import { Link } from "react-router-dom";

export default function HowItsWorkCard({
  number,
  data,
}: {
  number: number;
  data: any;
}) {
  return (
    <div className="w-full flex items-center justify-center h-[100%]">
      <div className="p-4 w-[540px] h-[100%] bg-white rounded-[15px] flex flex-col justify-start">
        <div className="mx-auto my-4 h-[50px] w-[50px] rounded-full bg-lightBlue flex items-center justify-center font-semibold text-white">
          {number}
        </div>
        <h3 className="font-bold text-darkBlue text-lg md:text-xl text-center">
          {data.title}
        </h3>
        <p className=" text-center text-xs mt-2">{data.description}</p>
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
}
