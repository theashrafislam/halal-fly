import Image from "next/image";
import HeroSection from "./Components/HeroSection/HeroSection";
import CardSection from "./Components/CardSection/CardSection";
import FindTraval from "./Components/FindTraval/FindTraval";
import Destinations from "./Components/Destinations/Destinations";

export default function Home() {
  return (
    <div>
      {/* hero section  */}
      <HeroSection />

      {/* card section  */}
      <CardSection />

      {/* FindTraval */}
      <FindTraval />

      {/* Destinations */}
      <Destinations />
    </div>
  );
}
