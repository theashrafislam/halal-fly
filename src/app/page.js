import Image from "next/image";
import HeroSection from "./Components/HeroSection/HeroSection";
import CardSection from "./Components/CardSection/CardSection";
import FindTraval from "./Components/FindTraval/FindTraval";
import Destinations from "./Components/Destinations/Destinations";
import Review from "./Components/Review/Review";
import Video from "./Components/Video/Video";
import Total from "./Components/Total/Total";
import Blog from "./Components/Blog/Blog";
import Subscribe from "./Components/SubScribe/Subscribe";
import AllTotal from "./Components/Total/AllTotal";

export default function Home() {
  return (
    <div>
      {/* hero section  */}
      <HeroSection />

      {/* card section  */}
      <CardSection />

      {/* FindTraval */}
      <FindTraval />

      {/* All total  */}
      {/* <AllTotal /> */}

      {/* Destinations */}
      <Destinations />

      {/* review  */}
      <Review />

      {/* total  */}
      <Total />

      {/* video  */}
      <Video />

      {/* Blogs  */}
      <Blog />

      {/* subscribe  */}
      <Subscribe />
    </div>
  );
}
