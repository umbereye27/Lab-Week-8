import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-20">
      <div className="h-1 bg-orange-500 w-24 mx-auto lg:mx-0 lg:ml-6"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12">
          <div className="mb-8 lg:mb-0">
            <Link href={'/'} className="text-2xl font-bold lowercase tracking-wider">
              audiophile
            </Link>
          </div>
          <nav className="mb-8 lg:mb-0">
            <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 text-sm font-bold tracking-widest uppercase">
              <li>
                <Link href="/" className="hover:text-orange-500 transition-colors duration-300">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/headphones" className="hover:text-orange-500 transition-colors duration-300">
                  HEADPHONES
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-orange-500 transition-colors duration-300">
                  SPEAKERS
                </Link>
              </li>
              <li>
                <Link href="/earphones" className="hover:text-orange-500 transition-colors duration-300">
                  EARPHONES
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          <div>
            <p className="text-gray-400 font-light">
              Audiophile is an all in one stop to fulfill your audio needs. We are a small team of 
              music lovers and sound specialists who are devoted to helping you get the most 
              out of personal audio. Come and visit our demo facility  we are open 7 days a 
              week.
            </p>
          </div>

          <div className="flex justify-start lg:justify-end items-start">
            <div className="flex gap-4">
              <Link 
                href="#" 
                className="hover:text-orange-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </Link>
              <Link 
                href="#" 
                className="hover:text-orange-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </Link>
              <Link 
                href="#" 
                className="hover:text-orange-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-gray-500 text-sm">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;