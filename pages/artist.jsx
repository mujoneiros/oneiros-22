import Image from 'next/image';
import React from 'react';
import Header from '../components/Header';
import jubin from '../assets/images/artists/jubin.jpg';
import { ArrowUpIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import reviveono from '../assets/images/reviveono.png';
import onoLogo from '../assets/images/onoLogo.jpg';
import CustomCarousel from '../components/CustomCarousel';
import Link from 'next/link';
import Logo from "../assets/svgs/OneirosLogo.svg"
import {Helmet} from 'react-helmet'
export default function Artist() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="">
      <Helmet>
        <title>Artists</title>
      </Helmet>
      <Header />
      <Image
        src={"/OneirosLogo.png"}
        layout = "fill"
        className='-z-10 opacity-5 sd:opacity-0'
        alt="major event image"
      />
      <div className='text-center align-middle'>
      <h1 className='text-center object-center text-8xl mt-60 font-extrabold font-stolzl'>Coming Soon</h1>
      </div>
      
      {/* <Carousel
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
              alt={reviveono}
            />
          </div>
        </div>
      </div>
      <div>
        
      </div>
      <CustomCarousel />
      <footer className="bg-footer relative">
        <div className="w-full h-screen bg-opacity-10 flex flex-col items-center justify-center backdrop-blur-sm ">
          <div className="relative w-[60rem] h-96 ">
            <Image
              src={'/comeandexperience.png'}
              layout="fill"
              objectFit="contain"
              alt="come and experience"
            />
          </div>

          <Link href={'/events'}>
            <button className="uppercase mr-auto mt-6 bg-white bg-opacity-40 py-4 px-8 cursor-pointer mx-auto place-self-center col-span-3">
              Explore Events
            </button>
          </Link>
        </div>
        <div className="h-1/4 w-full bg-transparent bg-opacity-30  flex justify-around items-center absolute">
          <Image
            src={'/onorevive1416.png'}
            height={100}
            width={200}
            alt="revive"
          />
          <div className="h-40 w-40 flex flex-col justify-center items-center">
            <div
              className="rounded-full h-10 w-10 bg-primaryBlack flex justify-center items-center"
              onClick={goToTop}
            >
              <ArrowUpIcon className="text-accent h-5 w-5" />
            </div>
            GO TO TOP
          </div>
          <div className="font-Montserrat">
            <h3 className="text-lg font-bold">Latest updates on</h3>
            <div className="h-5 w-5 text-sm">
              instagram
              <span className="">/mujoniros</span>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
