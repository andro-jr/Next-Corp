import Hero from "@/components/Hero";
import PerformanceImg from "/public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      title="We serve high performance applications"
      imgAlt="hero img"
      imgdata={PerformanceImg}
    />
  );
}
