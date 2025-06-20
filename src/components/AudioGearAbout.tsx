import Image from "next/image";

const AudioGearAbout = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8 text-center lg:text-left">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              BRINGING YOU THE <span className="text-orange-500">BEST</span>
              <br className="hidden sm:block" />
              AUDIO GEAR
            </h4>
            <p className="text-gray-600 text-base sm:text-lg font-extralight max-w-xl mx-auto lg:mx-0">
              Located at the heart of New York City, Audiophile is the premier store for
              high-end headphones, earphones, speakers, and audio accessories. We
              have a large showroom and luxury demonstration rooms available for
              you to browse and experience a wide range of our products. Stop by our
              store to meet some of the fantastic people who make Audiophile the
              best place to buy your portable audio equipment.
            </p>
          </div>

          <div>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="relative aspect-square w-full">
                <Image
                  src="/image-best-gear (1).jpeg"
                  alt="Person enjoying high-quality audio with premium headphones"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                  }}
                ></div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-transparent rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioGearAbout;
