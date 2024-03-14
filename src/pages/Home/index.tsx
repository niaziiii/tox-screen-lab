import HeroSection from "./HeroSection";
import Info from "./Info";
import PopularTest from "./PopularTest";
import TestFromTox from "./TestFromTox";
import Supplies from "./Supplies";
import HowItWorks from "./HowItWorks";
import OurClient from "./OurClient";
import News from "./New";

export default function HomePage() {
  return (
    <div className="w-full ">
      <HeroSection />
      <Info />
      <TestFromTox />
      <PopularTest />
      <Supplies />
      <HowItWorks />
      <OurClient />
      <News />
    </div>
  );
}
