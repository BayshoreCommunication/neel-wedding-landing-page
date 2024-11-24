import CountdownTimer from "@/components/Countdown";
import HeroSection from "@/components/HeroSection";
import OurStory from "@/components/OurStory";
import Schedule from "@/components/Schedule";
import WeddingParty from "@/components/WeddingParty";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection />
      <CountdownTimer />
      <OurStory />
      <Schedule />
      <WeddingParty />
    </main>
  );
}
