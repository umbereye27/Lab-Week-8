import CategoryCard from "@/components/CategoryCard";
import SpeakerHome from "@/components/SpeakerHome";
import Button from "@/components/Button";
import ProductShowcase from "@/components/ProductShowcase ";
import AudioGearAbout from "@/components/AudioGearAbout";

const HomePage = () => {
  return (
    <>
      <section className="relative bg-black text-white py-20 lg:py-26 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/image-hero.jpeg')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            <div>
              <p className="text-gray-500 tracking-[7px] uppercase text-xs sm:text-sm font-medium mb-4">
                New Product
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                XX99 Mark II
                <br />
                Headphones
              </h1>
              <p className="text-gray-200 text-base sm:text-lg mb-8 leading-relaxed">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button text="See Product" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CategoryCard />
      <SpeakerHome />
      <ProductShowcase />
      <AudioGearAbout />
    </>
  );
};

export default HomePage;
