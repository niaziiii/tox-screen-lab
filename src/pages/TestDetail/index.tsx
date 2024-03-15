import { Button } from "primereact/button";
import TestDetailImage from "../../assets/testcard.png";
import FAQ from "../../common/FAQ";
const TestDetail = () => {
  return (
    <div className=" w-[85%]  mx-auto mt-24 mb-64 flex flex-col gap-28 ">
      <article className=" mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
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
      <section className=" shadow-black/15 shadow-2xl  grid  lg:grid-cols-2  p-10 rounded-xl lg:divide-x-2 divide-dark">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <h3 className="font-semibold text-lightBlue">Sample Type:</h3>
            <p>Blood & Urine</p>
          </div>
          <div className="flex gap-2">
            <h3 className="font-semibold text-lightBlue">Age:</h3>
            <p>18+</p>
          </div>
          <div className="flex gap-2">
            <h3 className="font-semibold text-lightBlue">HSA/FSA:</h3>
            <p>Accepted</p>
          </div>

          <div className="flex gap-2">
            <h3 className="font-semibold text-lightBlue">Collection Method:</h3>
            <p>In Person at a hospital</p>
          </div>
          <div className="flex gap-2">
            <h3 className="font-semibold text-lightBlue">Result:</h3>
            <p>1 day from when your sample arrives at our lab</p>
          </div>
          <p>Test must be taken by purchaser</p>
        </div>

        <div className="lg:px-10 py-10 lg:py-0 ">
          <p>
            <span className="font-semibold  text-lightBlue">Preparation:</span>{" "}
             Fast for 12 hours (no food or drink, except water) before sample
            collection. If you’re taking a supplement containing biotin (also
            called vitamin B7 or B8, vitamin H, or coenzyme R), commonly found
            in products promoting nail, skin and hair health, it is recommended
            that you wait at least 72 hours from your last dose before sample
            collection.
          </p>
        </div>
      </section>

      <section className="md:w-8/12 mx-auto flex flex-col gap-16">
        <FAQ />
      </section>
    </div>
  );
};

export default TestDetail;
