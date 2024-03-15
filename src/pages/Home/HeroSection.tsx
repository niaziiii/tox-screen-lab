import AppButton from "../../common/Button";

export default function HeroSection() {
  return (
    <div className="relative h-[86vh] overflow-hidden flex items-center">
      <img
        src="/background.png"
        alt="background image"
        className=" w-full absolute top-0 left-0 z-0 min-h-[86vh] blur-[1px]"
      />
      <div className="w-[85%] m-auto">
        <div className="z-10 relative">
          <h1
            style={{ textShadow: "0px 0px 16px white" }}
            className="text-3xl lg:text-5xl lg:leading-[4rem] font-bold text-darkBlue lg:w-[35rem]"
          >
            Transforming Tests into Triumphs for Your Health and Well-Being!
          </h1>
          <p className=" text-2xs lg:w-[40rem] mt-4">
            At Tox Screen Labs, we are committed to providing cutting-edge
            testing services to empower individuals on their journey to optimal
            health.
          </p>
          <div className="flex mt-6 justify-start">
            <AppButton title="About Our Test" />
          </div>
        </div>
      </div>
    </div>
  );
}
