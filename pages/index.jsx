import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import oneirosLogo from '../assets/images/OneirosLogo.png';
import onoback from '../assets/svgs/onoback.svg';
import whatisono from '../assets/svgs/whatisono.svg';
import onoLogo from '../assets/svgs/onoLogo.svg';
import ono16 from '../assets/svgs/ono16.svg';
import ono17 from '../assets/svgs/ono17.svg';
import ono18 from '../assets/svgs/ono18.svg';
import ono19 from '../assets/svgs/ono19.svg';
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
        <div
          className="flex justify-between items-center border-y border-black py-10 lg:py-5 text-white h-screen "
          id="bg-landing"
        >
          <div className="pl-28 space-y-5 w-1/2 flex flex-col left-0 items-start font-Montserrat font-medium">
            <Image
              src={onoback}
              className="hidden md:inline-flex lg:h-full -translate-x-4"
            />

            <h2 className="text-lg max-w-md -translate-y-6">
              Manipal University Jaipur is organizing the annual cultural fest-
              Oneiros (14-16 Oct. 2022) which is an amalgamation of art and
              cultural activities.
            </h2>
            <div className="flex flex-col border border-b-2 py-4 w-56 items-center">
              <h3 className="text-xl font-extrabold">Loremipsumdolor</h3>
              <h4>14-16 OCT | JAIPUR</h4>
            </div>
          </div>
        </div>
        <div className="h-screen flex flex-col items-center">
          <div className="max-w-4xl flex flex-col items-center gap-5 pt-10">
            <Image src={whatisono} alt="What is oneiros" width={600} />
            <p className="font-Montserrat justify-center text-center font-medium">
              The term Oneiros was officially used to personify dreams by
              ancient Greeks. However, Manipal University Jaipur takes the
              mediocrity of this word and gives a picture that shines too bright
              for reality. A fest that portrays grandeur and proudly boasts of
              exceptional events; from the highs of adrenaline to the floodgates
              of opportunities; Oneiros encapsulates it all. Continuing to be
              one of the biggest attractions for academies throughout Rajasthan
              and gracefully honouring the legacy of its predecessors, this
              gallant fiesta is the highlight of the year.
            </p>
            {/* <button
              type="button"
              class="flex max-w-sm  bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white uppercase font-bold shadow-md rounded-full py-3 px-4 text-center"
            >
              Register Now
            </button> */}
          </div>
          {/* <div className="mt-36 flex flex-col justify-center items-center">
            <h2 className="text-4xl max-w-xl font-serif pb-6 decoration-white decoration-4 underline">
              Why you should attend
            </h2>
            <div className="flex justify-between space-x-10">
              <div className="w-40 h-40 relative">
                <div className="w-full h-full absolute top-0 left-0 bg-gray-300 z-10 flex flex-col justify-center items-center px-2">
                  <SunIcon className="h-5 w-5 mx-auto text-black" />
                  <p className="text-black text-sm pt-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem, aliquid!
                  </p>
                </div>
                <div className="w-full h-full absolute top-0 left-0  m-2 bg-slate-800"></div>
              </div>
              <div className="w-40 h-40 relative">
                <div className="w-full h-full absolute top-0 left-0 bg-gray-300 z-10"></div>
                <div className="w-full h-full absolute top-0 left-0  m-2 bg-slate-800"></div>
              </div>
              <div className="w-40 h-40 relative">
                <div className="w-full h-full absolute top-0 left-0 bg-gray-300 z-10"></div>
                <div className="w-full h-full absolute top-0 left-0  m-2 bg-slate-800"></div>
              </div>
              <div className="w-40 h-40 relative">
                <div className="w-full h-full absolute top-0 left-0 bg-gray-300 z-10"></div>
                <div className="w-full h-full absolute top-0 left-0  m-2 bg-slate-800"></div>
              </div>
            </div>
          </div> */}
          <div className="mt-60 flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-9xl font-Montserrat font-extrabold">
                Revive
              </h2>
              <Image src={onoLogo} width={300} height={50} />
            </div>
            <div className="h-20 w-full grid grid-cols-4 space-x-10">
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-3xl font-Montserrat font-extrabold">
                  Melange
                </h3>
                <Image src={ono19} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-3xl font-Montserrat font-extrabold">
                  Reverie
                </h3>
                <Image src={ono18} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-3xl font-Montserrat font-extrabold">
                  ReLive
                </h3>
                <Image src={ono17} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-3xl font-Montserrat font-extrabold">
                  BlendIn
                </h3>
                <Image src={ono16} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
