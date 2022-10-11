import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import oneirosLogo from '../assets/images/OneirosLogo.png';
import onoback from '../assets/svgs/onoback.svg';
import whatisono from '../assets/svgs/whatisono.svg';
import abouteventono from '../assets/svgs/abouteventono.svg';
import reviveono from '../assets/images/reviveono.png';
import onoprev from '../assets/svgs/onoprev.svg';
import onoevents from '../assets/images/onoevents.png';
import { landingPageEvents } from '../data/events';
import { ArrowUpIcon, BeakerIcon, SunIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import CustomCarousel from '../components/CustomCarousel';

export default function Home() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <Head>
        <title>Oneiros</title>
        <meta name="description" content="Oneiros" />
      </Head>
      <Header />

      <div className="md:hidden mt-20">
        <Image
          src={'/bg-landing-ono.png'}
          width={700}
          height={360}
          className=""
          alt="image ono"
        />
      </div>
      <main className="overflow-hidden">
        <div className="hidden md:flex justify-center items-center border-y border-black py-10 lg:py-5 text-white h-screen bg-landing w-full"></div>

        <div className="hidden md:block w-full h-96 grad -translate-y-96 z-30 absolute shadow-inner "></div>
        <div className="pt-5 max-w-4xl flex flex-col mx-auto justify-center items-center gap-9 md:pt-10 md:first-letter:h-screen">
          <Image
            src={abouteventono}
            alt="What is oneiros"
            width={600}
            className=""
          />
          <div>
            <p className="text-2xs md:text-base mx-10 font-Montserrat justify-center text-center font-medium md:max-w-2xl ">
              The term Oneiros was officially used to personify dreams by
              ancient Greeks. However, Manipal University Jaipur takes the
              mediocrity of this word and gives a picture that shines too bright
              for reality. A fest that portrays grandeur and proudly boasts of
              exceptional events; from the highs of adrenaline to the floodgates
              of opportunities; Oneiros encapsulates it all.
            </p>
            <p className="text-2xs mx-10 md:text-base font-Montserrat justify-center text-center font-medium mt-4 md:max-w-2xl">
              Continuing to be one of the biggest attractions for academies
              throughout Rajasthan and gracefully honouring the legacy of its
              predecessors, this gallant fiesta is the highlight of the year.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-around items-center max-w-7xl mx-auto mt-20">
          <div className="max-w-5xl mb-24 flex flex-col items-center mx-5 md:mx-0">
            <span
              className="font-stolzl uppercase mb-10 md:text-xl pl-8 "
              style={{ letterSpacing: '1.3vw' }}
            >
              History of oneiros
            </span>
            <Image src={reviveono} className="" alt="image" />
          </div>
          <div className="mx-5 md:mx-0">
            <Image src={onoprev} className="" alt="image" />
          </div>
        </div>
        <div className=" flex flex-col justify-start items-start mt-10 md:mt-60 max-w-7xl mx-auto">
          <div className="mx-auto mb-4 md:mx-0 max-w-[5rem] md:max-w-xs">
            <Image src={onoevents} alt="image" />
          </div>
        </div>
        <div className="h-screen md:grid md:grid-cols-3 grid-flow-row gap-y-10 gap-x-5 overflow-hidden mx-20 pb-10 overflow-y-scroll md:overflow-hidden">
          {landingPageEvents.map((eventname, _i) => (
            <div key={_i} className=" md:mx-10 ">
              <div className="relative bg-secondary md:mb-5 hover:scale-125 transition ease-in-out duration-300 group ">
                <Image
                  src={eventname.image}
                  height={450}
                  width={360}
                  className="absolute group-hover:brightness-50 duration-75 ease-in"
                  alt="event image"
                />
                {/* <div className="absolute z-10 bg-black w-4 h-4"></div> */}
                <div className="hidden absolute z-20 bottom-0 group-hover:flex items-start justify-center flex-col font-Montserrat px-4 pb-8 transition group-hover:animate-fade cursor-pointer">
                  <span className="capitalize text-base">{eventname.name}</span>
                  <span className="text-2xs font-extralight  ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rem cumque minima consequuntur labore exercitationem nemo
                    animi inventore ipsa iste officia!
                  </span>
                </div>
              </div>
              <div className="w-full md:h-20 text-center md:text-left mb-3">
                <div className="text-white font-Montserrat">
                  {`${eventname.name}`}
                </div>
                <div className="hidden md:block text-grey1 font-Montserrat">
                  {eventname.date}
                  <span>{` | ${eventname.time}`}</span>
                </div>
              </div>
            </div>
          ))}
          <Link href={'/events'}>
            <button className="uppercase mr-auto mt-6 bg-white bg-opacity-20 py-2 px-4 cursor-pointer ml-6 md:mx-auto place-self-center col-span-3">
              Explore Events
            </button>
          </Link>
        </div>
        <CustomCarousel />
        <div className="bg-footer relative ">
          <div className="hidden md:flex w-full h-20 md:h-screen bg-opacity-10 flex-col items-center justify-center backdrop-blur-sm ">
            <div className="relative w-24 h-52 md:w-[60rem] md:h-96 ">
              <Image
                src={'/comeandexperience.png'}
                layout="fill"
                objectFit="contain"
                alt="experience"
              />
            </div>

            <Link href={'/events'}>
              <button className="uppercase mr-auto mt-6 bg-white bg-opacity-40 py-4 px-8 cursor-pointer mx-auto place-self-center col-span-3">
                Explore Events
              </button>
            </Link>
          </div>
        </div>
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
              <Image src={'/insta.png'} height={20} width={20} alt="insta" />
              <span className="hidden md:inline">/mujoniros</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
