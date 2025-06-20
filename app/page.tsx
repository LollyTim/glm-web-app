import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import UpcomingPgSection from "./components/UpcomingPgSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <UpcomingPgSection />
    </div>
  );
}
