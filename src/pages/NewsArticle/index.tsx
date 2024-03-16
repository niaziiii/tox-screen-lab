import NewCard from "../../common/NewsCard";
import uniqid from "uniqid";
import { newsData } from "../News/utils";

const NewsArticle = () => {
  return (
    <div className=" w-[85%]  mx-auto mt-24 mb-28 lg:mb-48 flex flex-col gap-28 text-dark ">
      <div className="lg:flex  space-x-0 lg:space-x-10 mb-0">
        <div className="mb-4 lg:mb-0   lg:p-0 w-full lg:w-8/12 relative rounded block">
          <img
            src="/news/image-5.png"
            className="rounded-2xl object-cover w-full h-96"
          />

          <h1 className="text-lightBlue text-2xl  md:text-3xl lg:text-4xl font-bold mt-10 mb-2 leading-tight">
            Tox Screen Labs Revolutionizes Healthcare Testing!
          </h1>
          <p className="font-medium tex-dark mt-6 mb-3">Author: Adam Smith</p>
          <p className="font-medium tex-dark mb-6">
            Published date: 12/03/2024
          </p>
          <p className=" text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat at quam vitae posuere. Aenean sit amet malesuada elit, et
            porttitor nibh. Vivamus condimentum porttitor lectus, a vulputate
            enim interdum ut. Nulla purus arcu, dapibus non justo in, rutrum
            lobortis massa. Sed malesuada vehicula diam at iaculis. Quisque a
            nulla tellus. Nulla accumsan eget felis et bibendum. In consectetur
            erat nunc, vitae suscipit magna semper et. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Donec leo ex, rutrum sed enim ut, tincidunt eleifend nibh. Ut eu
            elit sollicitudin, sagittis nunc a, rhoncus metus. Quisque eleifend
            risus eget mauris elementum fringilla. Praesent quam dui, tempus ac
            dui non, maximus ullamcorper erat. Nulla porttitor tortor sed lorem
            lacinia, sed commodo est pulvinar.
          </p>
          <p className=" text-lg mb-4">
            Phasellus dolor ex, convallis id ante non, aliquet rutrum ante.
            Morbi at tempor odio. Suspendisse nec vulputate nunc. Aliquam
            imperdiet pretium lorem, in euismod nisi varius eu. Suspendisse
            fringilla turpis ut lectus venenatis, vel laoreet turpis
            pellentesque. Mauris hendrerit eros pellentesque, elementum est in,
            pellentesque libero. Mauris eget sem efficitur, placerat lorem a,
            pretium tellus. Pellentesque semper et velit sed imperdiet. Vivamus
            ut risus gravida, cursus neque vitae, imperdiet turpis. Pellentesque
            congue orci non mauris varius cursus venenatis eu eros. Aenean
            consectetur leo tincidunt, accumsan sapien quis, tempor sapien. Nunc
            facilisis blandit massa eget feugiat. Duis quis nulla fringilla
            mauris congue accumsan vitae sollicitudin lacus.
          </p>
          <p className=" text-lg mb-4">
            Integer aliquam mollis arcu at placerat. Sed vitae erat massa. Nunc
            nec neque diam. Donec interdum, orci at malesuada laoreet, mauris
            est tincidunt lacus, eget facilisis metus arcu non turpis. In
            tempor, magna ut varius dictum, arcu felis gravida enim, in eleifend
            tellus ante et ipsum. Praesent placerat velit vel augue volutpat
            blandit. Nam sed varius velit. Nullam at ligula sed ipsum suscipit
            accumsan nec vitae ex. Nam at urna purus. In ut aliquet eros, ut
            aliquet urna. Proin at euismod elit. Phasellus id dolor at quam
            egestas vehicula. Nulla auctor vulputate nisi, lacinia dictum turpis
            dignissim vel. Nam a libero vitae eros vehicula interdum et sagittis
            ipsum. Fusce hendrerit vitae elit at vulputate.
          </p>
          <p className=" text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat at quam vitae posuere. Aenean sit amet malesuada elit, et
            porttitor nibh. Vivamus condimentum porttitor lectus, a vulputate
            enim interdum ut. Nulla purus arcu, dapibus non justo in, rutrum
            lobortis massa. Sed malesuada vehicula diam at iaculis. Quisque a
            nulla tellus. Nulla accumsan eget felis et bibendum. In consectetur
            erat nunc, vitae suscipit magna semper et. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Donec leo ex, rutrum sed enim ut, tincidunt eleifend nibh. Ut eu
            elit sollicitudin, sagittis nunc a, rhoncus metus. Quisque eleifend
            risus eget mauris elementum fringilla. Praesent quam dui, tempus ac
            dui non, maximus ullamcorper erat. Nulla porttitor tortor sed lorem
            lacinia, sed commodo est pulvinar.
          </p>
        </div>

        <div className="w-full  lg:w-4/12">
          <h2 className="text-darkBlue font-semibold text-2xl mb-10">
            Related Topic
          </h2>
          <div className="grid lg:grid-cols-1 md:grid-cols-2 gap-8">
            {newsData.slice(0, 3).map((news) => {
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
    </div>
  );
};

export default NewsArticle;
