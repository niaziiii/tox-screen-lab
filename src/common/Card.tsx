interface CardPropsI {
  title: string;
  price: number;
  url: string;
  imageSrc: string;
}
const Card = ({ title, price, url, imageSrc }: CardPropsI) => {
  return (
    <div className="   flex justify-center items-center  w-full">
      <div className="container flex justify-center">
        <div className="bg-white relative shadow-md hover:shadow-xl transition duration-500 rounded-lg">
          <img
            className="rounded-t-3xl h-40 w-full object-cover"
            src={imageSrc}
            alt={`${title}-image`}
          />{" "}
          {/* Use imageSrc prop for src attribute */}
          <div className="py-8 px-8 rounded-lg bg-white">
            <h1 className="text-black font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
              {title}
            </h1>
            <div className="font-bold text-lightBlue bg-white rounded-lg">
              <span className="text-lg">${price}.00</span>
            </div>
            <a
              href={url}
              className="mt-6 py-2 w-full px-4 bg-lightBlue text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 block text-center"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
