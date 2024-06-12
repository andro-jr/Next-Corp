import Hero from "@/components/Hero";
import ScaleImg from "/public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero title="Scale it to the moon" imgAlt="hero img" imgdata={ScaleImg} />
  );
}
