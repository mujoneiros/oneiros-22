import Image from 'next/image';
import React from 'react';
import Header from '../components/Header';
import { ArrowUpIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import reviveono from '../assets/images/reviveono.png';
import CustomCarousel from '../components/CustomCarousel';
import Link from 'next/link';
import Head from 'next/head';
export default function Artist() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="">
      <Head>
        <title>Artists</title>
      </Head>
      <Header />

      <div className="">
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
              src="/darshanrawal.jpg"
              alt="banner 3"
            />
            <div className="absolute bottom-0 w-full h-60 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 backdrop-brightness-50 items-center">
              <div className="mx-auto flex flex-row justify-center items-center mt-16 space-x-28">
                <div className=" flex flex-col items-center justify-center">
                  <div className=" flex flex-col text-6xl font-stolzl mx-32">
                    Darshan Rawal
                    <span className="uppercase text-xl w-full inline-block text-accent tracking-[0.26vw] text-center pl-1">
                      16TH October
                    </span>
                  </div>
                </div>
                <div className="hidden w-3/4 md:flex flex-col justify-center">
                  <div className="w-3/4 font-Jost font-light text-left text-xl">
                    Darshan Raval, a pehnomenal singer, songwriter and composer,
                    has made a position for himself in in the bollywood music
                    industry. He has given some of the most beautiful songs and
                    not only won numerous awards, but also people&apos;s hearts.
                    With a huge fan following, and his songs loved all round
                    India, Darshan Raval has become one of the most well known
                    singers of the nation.
                  </div>
                  {/* <div className="uppercase mr-auto mt-6 bg-white bg-opacity-20 py-2 px-4 cursor-pointer hover:">
                    View Artist
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className=" md:w-screen md:h-screen">
            <Image
              layout="fill"
              objectFit="cover"
              loading="lazy"
              src="/aerreo3.jpg"
              alt="banner 3"
            />
            <div className="absolute bottom-0 w-full h-60 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 backdrop-brightness-50 items-center">
              <div className="mx-auto flex flex-row justify-center items-center mt-16 space-x-28">
                <div className=" flex flex-col items-center justify-center">
                  <div className=" flex flex-col text-6xl font-stolzl mx-32">
                    AERREO
                    <span className="uppercase text-xl w-full inline-block text-accent tracking-[0.26vw] text-center pl-1">
                      14TH October
                    </span>
                  </div>
                </div>
                <div className="hidden w-3/4 md:flex flex-col justify-center">
                  <div className="w-3/4 font-Jost font-light text-left md:text-xl">
                    Indian DJ/Producer signed on Armada Music, Cr2 Records,
                    Starter Records And one of the very few Indian DJs to have
                    played at the renowned Ministry of Sound Club, London.
                    Played at the World&apos;s biggest and No.1 ranked Festival
                    in the world - Ultra Music Festival, Miami Worked at one of
                    the top dance music labels in the industry - Enhanced music
                  </div>
                  {/* <div className="uppercase mr-auto mt-6 bg-white bg-opacity-20 py-2 px-4 cursor-pointer hover:">
                    View Artist
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-screen h-screen">
            <Image
              layout="fill"
              objectFit="cover"
              loading="lazy"
              src="/navjot.jpg"
              alt="banner 3"
            />
            <div className="absolute bottom-0 w-full h-60 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 backdrop-brightness-50 items-center">
              <div className="mx-auto flex flex-row justify-center items-center mt-16 space-x-28">
                <div className=" flex flex-col items-center justify-center">
                  <div className=" flex flex-col text-6xl font-stolzl mx-32">
                    NAVJOT AHUJA
                    <span className="uppercase text-xl w-full inline-block text-accent tracking-[0.26vw] text-center pl-1">
                      14TH October
                    </span>
                  </div>
                </div>
                <div className="hidden w-3/4 md:flex flex-col justify-center">
                  <div className="w-3/4 font-Jost font-light text-left text-2xl">
                    A talented vocalist and guitarist with a powerful voice
                    making waves in the local music scene.
                  </div>
                  {/* <div className="uppercase mr-auto mt-6 bg-white bg-opacity-20 py-2 px-4 cursor-pointer hover:">
                    View Artist
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </Carousel>

        <div className="bg-artist">
          <div className=" h-screen flex flex-col items-center justify-around pt-20">
            <span className="inline-block text-8xl font-freak">3 DAYS</span>
            <span
              className="inline-block text-4xl md:text-8xl font-freak"
              style={{ letterSpacing: '2vw' }}
            >
              20+ ARTISTS
            </span>
            {/* <div className="uppercase bg-white bg-opacity-20 py-2.5 px-8 cursor-pointer text-md">
              View Artist
            </div> */}
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
        <CustomCarousel />
        <footer className="h-1/4 w-full bg-transparent bg-opacity-30 flex justify-around items-center absolute">
          <div className="hidden md:block">
            <Image
              src={'/onorevive1416.png'}
              height={100}
              width={200}
              alt="revive"
              className=""
            />
          </div>
          <div className="h-40 w-40 flex flex-col justify-center items-center text-sm md:text-base">
            <div
              className="rounded-full h-10 w-10 bg-primaryBlack flex justify-center items-center "
              onClick={goToTop}
            >
              <ArrowUpIcon className="text-accent h-5 w-5" />
            </div>
            GO TO TOP
          </div>
          <div className="font-Montserrat">
            <h3 className="hidden md:inline text-lg font-bold">
              Latest updates on
            </h3>
            <div className=" h-5 w-20 text-sm ">
              <a
                href="https://www.instagram.com/mujoneiros/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <Image src={'/insta.png'} height={20} width={20} alt="insta" />
                <span className="hidden md:inline cursor-pointer">
                  /mujoniros
                </span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
