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

import { BeakerIcon, SunIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oneiros</title>
        <meta name="description" content="Oneiros" />
      </Head>
      <Header />
      <main className="overflow-hidden">
        <div className=" flex justify-center items-center border-y border-black py-10 lg:py-5 text-white h-screen bg-landing ">
          {/* <div className="pl-28 space-y-5 w-2/4 flex flex-col items-center font-Montserrat font-medium ">
            <div className="w-auto -translate-x-28 translate-y-14">
              <Image
                src={oneiros22}
                className="hidden md:inline-flex lg:h-full "
                alt="oneiros background"
              />
            </div>
            <div className="uppercase w-40 h-6 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 rounded-full backdrop-brightness-125 flex justify-center items-center p-4">
              Register
            </div>
          </div> */}
        </div>
        {/* bg-gradient-to-t from-transparent via-black to-transparent */}
        <div className="w-full h-96 grad -translate-y-96 z-30 absolute shadow-inner "></div>

        <div className="max-w-4xl flex flex-col mx-auto justify-center items-center gap-9 pt-10 h-screen">
          <Image
            src={abouteventono}
            alt="What is oneiros"
            width={600}
            className=""
          />
          <div>
            <p className="font-Montserrat justify-center text-center font-medium max-w-2xl">
              The term Oneiros was officially used to personify dreams by
              ancient Greeks. However, Manipal University Jaipur takes the
              mediocrity of this word and gives a picture that shines too bright
              for reality. A fest that portrays grandeur and proudly boasts of
              exceptional events; from the highs of adrenaline to the floodgates
              of opportunities; Oneiros encapsulates it all.
            </p>
            <p className="font-Montserrat justify-center text-center font-medium mt-4 max-w-2xl">
              Continuing to be one of the biggest attractions for academies
              throughout Rajasthan and gracefully honouring the legacy of its
              predecessors, this gallant fiesta is the highlight of the year.
            </p>
          </div>
          {/* <button
              type="button"
              class="flex max-w-sm  bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white uppercase font-bold shadow-md rounded-full py-3 px-4 text-center"
            >
              Register Now
            </button> */}
        </div>

        <div className="flex flex-col justify-around items-center max-w-7xl mx-auto mt-20">
          <div className="max-w-5xl mb-24 flex flex-col items-center">
            <span
              className="font-stolzl uppercase mb-10 text-xl pl-8"
              style={{ letterSpacing: '1.3vw' }}
            >
              History of oneiros
            </span>
            <Image src={reviveono} className="" />
          </div>
          <div>
            <Image src={onoprev} className="" />
          </div>
        </div>
        <div className=" flex flex-col justify-start items-start mt-60 max-w-7xl mx-auto">
          <div className="max-w-xs">
            <Image src={onoevents} />
          </div>
        </div>
        <div className="grid grid-cols-3 grid-flow-row gap-y-10 gap-x-5 overflow-hidden mx-20">
          {landingPageEvents.map((eventname, _i) => (
            <div key={_i} className=" mx-10  ">
              <div className="relative bg-black mb-5 hover:scale-125 transition ease-in-out duration-300 group ">
                <Image
                  src={eventname.image}
                  height={450}
                  width={360}
                  className="absolute group-hover:brightness-50 duration-75 ease-in"
                />
                <div className="absolute z-10 bg-black w-4 h-4"></div>
                <div className="hidden absolute z-20 bottom-0 group-hover:flex items-start justify-center flex-col font-Montserrat px-4 pb-8 transition group-hover:animate-fade cursor-pointer">
                  <span className="capitalize text-base">{eventname.name}</span>
                  <span className="text-2xs font-extralight  ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rem cumque minima consequuntur labore exercitationem nemo
                    animi inventore ipsa iste officia!
                  </span>
                </div>
              </div>
              <div className="w-full h-20">
                <div className="text-white font-Montserrat">
                  {`${eventname.name}`}
                </div>
                <div className="text-grey1 font-Montserrat">
                  {eventname.date}
                  <span>{` | ${eventname.time}`}</span>
                </div>
              </div>
            </div>
          ))}
          <Link href={'/events'}>
            <button className="uppercase mr-auto mt-6 bg-white bg-opacity-20 py-2 px-4 cursor-pointer mx-auto place-self-center col-span-3">
              Explore Events
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
