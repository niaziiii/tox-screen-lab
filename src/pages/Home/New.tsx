import uniqid from "uniqid";
import AppHeading from "../../common/Heading";
import NewsCard from "../../common/NewsCard";
import { newsData } from "../News/utils";

function News() {
  return (
    <div className="py-20">
      <div className="w-[85%] mx-auto">
        <AppHeading title="News" className="text-center" />
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => {
            return (
              <NewsCard
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

export default News;
