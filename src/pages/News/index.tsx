import AppHeading from "../../common/Heading";
import { newsData } from "./utils";
import NewCard from "../../common/NewsCard";
import uniqid from "uniqid";

export default function News() {
  return (
    <div className="h-full w-full">
      <div className="h-full w-[95%] md:w-[85%] m-auto mt-6 md:mt-14 pb-10">
        <div className="flex justify-center w-full">
          <AppHeading title="News" className=" md:!text-5xl text-center" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-10 mb-20">
          {newsData.map((news) => {
            return (
              <NewCard
                key={`${news.title} ${uniqid()}`}
                title={news.title}
                description={news.description}
                img={news.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
