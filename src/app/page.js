import Image from "next/image";
import HeroSection from "./Components/HeroSection/HeroSection";
import CardSection from "./Components/CardSection/CardSection";

export default function Home() {
  return (
    <div>
      {/* hero section  */}
      <HeroSection />

      {/* card section  */}
      <CardSection />
    </div>
  );
}
