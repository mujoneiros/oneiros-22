import Image from 'next/image';
import React from 'react';
import Header from '../components/Header';
import jubin from '../assets/images/artists/jubin.jpg';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import reviveono from '../assets/images/reviveono.png';
import onoLogo from '../assets/images/onoLogo.jpg';
import CustomCarousel from '../components/CustomCarousel';

export default function Artist() {
  const artists = [
    {
      name: 'Jubin Nautiyal',
      image: '/artists/jubin.jpg',
      instaLink: 'https://www.instagram.com/jubin_nautiyal/',
    },
    {
      name: 'Jubin Nautiyal',
      image: '/artists/jubin.jpg',
      instaLink: 'https://www.instagram.com/jubin_nautiyal/',
    },
  ];
  return (
    <div className="">
      <Header />

      <Carousel
        autoPlay
        infiniteLoop
        interval="4000"
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        <div className="w-screen h-screen">
          <Image
            layout="fill"
            objectFit="cover"
            loading="lazy"
            src="/placeholder-artist.jpg"
            alt="banner 3"
          />
          <div className="absolute bottom-0 w-full h-60 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 backdrop-brightness-50 items-center">
            <div className="mx-auto flex flex-row justify-center items-center mt-16 space-x-28">
              <div className=" flex flex-col items-center justify-center">
                <div className=" flex flex-col text-6xl font-stolzl mx-32">
                  LIFAFA
                  <span className="uppercase text-xl w-full inline-block text-accent tracking-[0.26vw] text-center pl-1">
                    14TH October
                  </span>
                </div>
              </div>
              <div className="hidden w-3/4 md:flex flex-col justify-center">
                <div className="w-3/4 font-Jost font-light text-left text-2xl">
                  The term Oneiros was officially used to personify dreams by
                  ancient Greeks. However, Manipal University Jaipur takes the
                </div>
                <div className="uppercase mr-auto mt-6 bg-white bg-opacity-20 py-2 px-4 cursor-pointer hover:">
                  View Artist
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen">
          <Image
            layout="fill"
            objectFit="cover"
            loading="lazy"
            src="/placeholder-artist.jpg"
            alt="banner 3"
          />
          <div className="absolute bottom-0 w-full h-60 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 backdrop-brightness-50 items-center">
            <div className="mx-auto flex flex-row justify-center items-center mt-16 space-x-28">
              <div className=" flex flex-col items-center justify-center">
                <div className=" flex flex-col text-6xl font-stolzl mx-32">
                  LIFAFA
                  <span className="uppercase text-xl w-full inline-block text-accent tracking-[0.26vw] text-center pl-1">
                    14TH October
                  </span>
                </div>
              </div>
              <div className="hidden w-3/4 md:flex flex-col justify-center">
                <div className="w-3/4 font-Jost font-light text-left text-2xl">
                  The term Oneiros was officially used to personify dreams by
                  ancient Greeks. However, Manipal University Jaipur takes the
                </div>
                <div className="uppercase mr-auto mt-6 bg-white bg-opacity-20 py-2 px-4 cursor-pointer hover:">
                  View Artist
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>

      <div className="bg-artist">
        <div className=" h-screen flex flex-col items-center justify-around pt-20">
          <span className="inline-block text-8xl font-freak">3 DAYS</span>
          <span
            className="inline-block text-8xl font-freak"
            style={{ letterSpacing: '2vw' }}
          >
            20+ ARTISTS
          </span>
          <div className="uppercase bg-white bg-opacity-20 py-2.5 px-8 cursor-pointer text-md">
            View Artist
          </div>
          <div className="h-40 w-80 relative">
            <Image
              className=""
              layout="fill"
              objectFit="contain"
              src={reviveono}
            />
          </div>
        </div>
      </div>
      <div>
        {/* <div className="flex flex-col justify-start items-start my-20 max-w-7xl mx-auto ">
          <div>
            <div className="max-w-[10rem] relative">
              <Image
                src={onoLogo}
                width={200}
                height={30}
                layout="fixed"
                objectFit="cover"
              />
            </div>
            <span className="uppercase text-6xl text-accent font-stolzl pl-1.5 tracking-widest">
              Major Artists
            </span>
          </div>
        </div> */}
      </div>
      <CustomCarousel />
    </div>
  );
}
