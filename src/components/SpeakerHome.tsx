import Image from "next/image";
import Button from "@/components/Button";

const SpeakerHome = () => {
  return (
    <div className="bg-[#d87d4a] rounded-xl mx-4 sm:mx-6 lg:mx-32 my-10 lg:my-20 overflow-hidden relative">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 sm:p-12 lg:px-24 min-h-[400px]">
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/image-speaker-zx9.png"
            alt="ZX9 Speaker"
            width={320}
            height={480}
            className="object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 w-[70%] sm:w-[60%] lg:w-auto"
          />
        </div>

        {/* Text */}
        <div className="text-white text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl tracking-wider leading-tight">
            ZX9
            <br />
            <span className="block">SPEAKER</span>
          </h1>
          <p className="text-gray-300 py-4 font-light max-w-md mx-auto lg:mx-0 text-base sm:text-lg">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <div className="pt-2 flex justify-center lg:justify-start">
            <Button
              text="See Product"
              className="bg-black hover:bg-gray-800 transition-colors duration-300 hover:scale-105 transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerHome;
