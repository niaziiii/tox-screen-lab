import AppHeading from "../../common/Heading";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Card from "../../common/Card";
import { testSuppliesData } from "./utils";

export default function Supplies() {
  return (
    <div className="w-[85%] mx-auto">
      <div className="flex items-center justify-between ">
        <AppHeading title="Supplies" />
        <div className="flex items-center gap-6">
          <div className="h-[3rem] w-[3rem] text-3xs rounded-full bg-darkGray text-white cursor-pointer flex items-center justify-center">
            <IoIosArrowBack />
          </div>
          <div className="h-[3rem] w-[3rem] text-3xs rounded-full bg-darkBlue text-white cursor-pointer flex items-center justify-center">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-12">
        <div>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {testSuppliesData.slice(0, 3).map((card, index) => (
              <Card
                imageSrc={card.imageSrc}
                key={index}
                title={card.title}
                price={card.price}
                url={`/`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
