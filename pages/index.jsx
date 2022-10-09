import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import oneirosLogo from '../assets/images/OneirosLogo.png';
import onoback from '../assets/svgs/onoback.svg';
import whatisono from '../assets/svgs/whatisono.svg';
import abouteventono from '../assets/svgs/abouteventono.svg';
import reviveono from '../assets/svgs/reviveono.svg';
import onoprev from '../assets/svgs/onoprev.svg';
import onoevents from '../assets/images/onoevents.png';
import onoLogo from '../assets/svgs/onoLogo.svg';
import ono16 from '../assets/svgs/ono16.svg';
import ono17 from '../assets/svgs/ono17.svg';
import ono18 from '../assets/svgs/ono18.svg';
import ono19 from '../assets/svgs/ono19.svg';
import oneiros22 from '../assets/images/Oneiros22.png';

import { BeakerIcon, SunIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oneiros</title>
        <meta name="description" content="Oneiros" />
      </Head>
      <Header />
      <main>
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
          <div className="max-w-5xl mb-24">
            <Image src={reviveono} className="" />
          </div>
          <div>
            <Image src={onoprev} className="" />
          </div>
          {/* <div className="flex flex-col justify-center items-center">
              <h2 className="text-9xl font-Montserrat font-extrabold">
                Revive
              </h2>
              <Image src={onoLogo} width={300} height={50} alt="oneiros logo" />
            </div>
            <div className="h-20 w-full grid grid-cols-4 space-x-10">
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-3xl font-Montserrat font-extrabold">
                  Melange
                </h3>
                <Image src={ono19} alt="oneiros19 logo" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-3xl font-Montserrat font-extrabold">
                  Reverie
                </h3>
                <Image src={ono18} alt="oneiros18 logo" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-3xl font-Montserrat font-extrabold">
                  ReLive
                </h3>
                <Image src={ono17} alt="oneiros17 logo" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-3xl font-Montserrat font-extrabold">
                  BlendIn
                </h3>
                <Image src={ono16} alt="oneiros16 logo" />
              </div>
            </div> */}
        </div>
        <div className=" flex flex-col justify-start items-start mt-60 h-screen max-w-7xl mx-auto">
          <div className="max-w-xs">
            <Image src={onoevents} />
          </div>
          <div className="flex overflow-x-auto p-4 h-2/3 w-full mt-3 gap-3">
            <div className="bg-red-700 h-full w-72"></div>
            <div className="bg-red-700 h-full w-[180px]"></div>
            <div className="bg-red-700 h-full w-[180px]"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
