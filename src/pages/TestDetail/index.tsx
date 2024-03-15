import { Button } from "primereact/button";
import TestDetailImage from "../../assets/testcard.png";
import FAQ from "../../common/FAQ";
const TestDetail = () => {
  return (
    <div className=" w-[85%]  mx-auto mt-24 mb-64 flex flex-col gap-28 ">
      <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
        <a
          className="relative  group flex items-start justify-start  h-full"
          href="#"
        >
          <img
            className=" w-full h-full object-cover rounded-lg "
            src={TestDetailImage}
            width="540"
            height="303"
            alt="Blog post"
          />
        </a>
        <div className=" h-full flex flex-col gap-8">
          <header className="">
            <div className="mb-3">
              <h1 className="text-3xl font-bold text-dark">
                Comprehensive Health Profile — Men's
              </h1>
            </div>
            <h2 className="text-xl lg:text-xl text-lightBlue font-bold leading-tight mb-2">
              $349.00
            </h2>
          </header>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl text-darkBlue font-semibold">Details</h3>
            <p className="text-lg text-dark  flex-grow">
              The tests your healthcare provider recommends for an annual health
              check are now at your fingertips. From hormone testing for men to
              screening for diabetes, heart disease and more—you’ll get the
              insights you need to work towards a healthier future.
            </p>
          </div>

          <footer className="flex mt-4">
            <Button
              label="Purchase"
              className=" bg-lightBlue text-white px-20 py-4 text-lg rounded-lg hover:bg-darkBlue duration-300 ease-in transition-all"
              size="large"
            />
          </footer>
        </div>
      </article>

      <section className="md:w-8/12 mx-auto flex flex-col gap-16">
        <FAQ />
      </section>
    </div>
  );
};

export default TestDetail;
