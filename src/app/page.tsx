import Hero from "@/components/hero";
import homeImage from "public/home.jpg";

export default function Home() {
  return (
    <div>
      <Hero
        imgData={homeImage}
        imgAlt="Professional Cloud Hosting"
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
