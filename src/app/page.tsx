import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute -z-10 inset-0">
      <Image
        src="/home.jpg"
        alt="Car factory"
        fill
        style={{ objectFit: "cover" }}
      ></Image>
    </div>
  );
}
