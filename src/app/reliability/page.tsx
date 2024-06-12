import Hero from "@/components/Hero";
import ReliabilityImg from "/public/reliability.jpg";

export default function ScalePage() {
  return (
    <Hero
      title="Rely on us like you rely on your mom"
      imgAlt="hero img"
      imgdata={ReliabilityImg}
    />
  );
}
