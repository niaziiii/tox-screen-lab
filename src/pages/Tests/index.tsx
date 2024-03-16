import uniqid from "uniqid";
import Card from "../../common/Card";
import { testCardsData, inPersonTestsCardData, supplyData } from "./utils";

export default function Tests() {
  return (
    <div className=" w-[85%]  mx-auto mt-24 mb-64 flex flex-col gap-28 ">
      <section>
        <h1 className="text-3xl text-darkBlue font-bold pb-12">Tests</h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:gap-16  gap-10">
          {testCardsData.map((card, index) => (
            <Card
              imageSrc={card.imageSrc}
              key={index}
              title={card.title}
              price={card.price}
              url={`${card.url}/${uniqid()}`}
            />
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-3xl text-darkBlue font-bold pb-12">
          In-person Tests
        </h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:gap-16  gap-10">
          {inPersonTestsCardData.map((card, index) => (
            <Card
              imageSrc={card.imageSrc}
              key={index}
              title={card.title}
              price={card.price}
              url={card.url}
            />
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-3xl text-darkBlue font-bold pb-12">
          At Home Tests
        </h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:gap-16  gap-10">
          {inPersonTestsCardData.map((card, index) => (
            <Card
              imageSrc={card.imageSrc}
              key={index}
              title={card.title}
              price={card.price}
              url={card.url}
            />
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-3xl text-darkBlue font-bold pb-12">Supplies</h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:gap-16  gap-10">
          {supplyData.map((card, index) => (
            <Card
              imageSrc={card.imageSrc}
              key={index}
              title={card.title}
              price={card.price}
              url={card.url}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
