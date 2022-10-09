import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Header from '../components/Header';
import { minorevents } from '../data/events';
import './../styles//events.module.css';

const data = [
  {
    source: 'majorEvents/cosmos.png',
    title: 'COSMOS',
    club: 'COSMOS',
    date: '14',
    time: '7:20PM',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore adipisci quod, aliquid repudiandae veritatis sint sed quos quidem? Pariatur quae, magnam',
  },
  {
    source: 'majorEvents/destival.png',
    title: 'DESTIVAL',
    club: 'COREOGRAFIA',
    date: '15',
    time: '7:20PM',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore adipisci quod, aliquid repudiandae veritatis sint sed quos quidem? Pariatur quae, magnam',
  },
  {
    source: 'majorEvents/requiem.png',
    title: 'REQUIEM',
    club: 'THE MUSIC CLUB',
    date: '15',
    time: '7:20PM',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore adipisci quod, aliquid repudiandae veritatis sint sed quos quidem? Pariatur quae, magnam',
  },
];

export default function Events() {
  const [major, setMajor] = useState(false);
  const [minor, setMinor] = useState(false);

  return (
    <div>
      <Header />
      {/* <nav className="fixed h-full w-1/4 text-black font-Montserrat text-center shadow-sm shadow-primaryWhite bg-secondaryWhite">
        <h1 className="text-6xl pt-40 font-extrabold ">EVENTS</h1>
        <ul className="mt-12 flex flex-col items-center cursor-pointer">
          <h2 className="font-bold text-3xl" onClick={() => setMajor(!major)}>
            Major Events
          </h2>
          <ul className={major ? '' : 'hidden'}>
            <li className="flex flex-row justify-center items-center transition ease-in delay-75">
              <ChevronRightIcon height={10} width={10} />
              <span>Cosmos</span>
            </li>
            <li className="flex flex-row justify-center items-center transition ease-in delay-1000">
              <ChevronRightIcon height={10} width={10} />
              <span>Cosmos</span>
            </li>
            <li className="flex flex-row justify-center items-center">
              <ChevronRightIcon height={10} width={10} />
              <span>Cosmos</span>
            </li>
          </ul>
          <li class="hov">
            <span className="font-bold text-3xl pt-5 font-Montserrat">
              Major Events
            </span>
            <ul class="main font-Montserrat font-medium ">
              <li className="flex transition ease-in-out justify-center items-center hover:scale-110">
                <Link href="/MajorEvents">
                  <a className="items-center mx-2 inline-flex cursor-pointer">
                    <span>Destival</span>
                  </a>
                </Link>
              </li>
              <li className="flex justify-center items-center">
                <span>Destival</span>
              </li>
              <li className="flex justify-center items-center">
                <span>Destival</span>
              </li>
              <li className="flex justify-center items-center">
                <span>Destival</span>
              </li>
            </ul>
          </li>
          <h2
            className="font-bold text-3xl pt-32"
            onClick={() => setMinor(!minor)}
          >
            Minor Events
          </h2>
          <ul className={minor ? 'transition ease-out delay-75' : 'hidden'}>
            <li className="flex flex-row justify-center items-center">
              <ChevronRightIcon height={10} width={10} />
              <span>Destival</span>
            </li>
            <li className="flex flex-row justify-center items-center">
              <ChevronRightIcon height={10} width={10} />
              <span>Destival</span>
            </li>
            <li className="flex flex-row justify-center items-center">
              <ChevronRightIcon height={10} width={10} />
              <span>Destival</span>
            </li>
          </ul>
        </ul>
      </nav>
      <main className="w-3/4 grid grid-cols-4 h-full float-right items-center pt-24 gap-y-10 gap-x-5">
        {minorevents.payload.map((minorevent, _i) => (
          <>
            <div className="text-4xl col-span-4 place-self-start font-Montserrat uppercase font-semibold ml-8">
              {minorevent.name}
            </div>

            {minorevent.eventNames.map((eventname, _i) => (
              <div key={_i} className="flex justify-center items-center mx-10">
                <div className="relative bg-black mb-20 hover:scale-125 transition ease-in-out duration-300 group ">
                  <Image
                    src={eventname.image}
                    height={450}
                    width={360}
                    className="absolute group-hover:brightness-50 duration-75 ease-in"
                  />
                  <div className="absolute z-10 bg-black w-4 h-4"></div>
                  <div className="hidden absolute z-20 bottom-0 group-hover:flex items-start justify-center flex-col font-Montserrat px-4 pb-8 transition group-hover:animate-fade cursor-pointer">
                    <span className="capitalize text-base">
                      {eventname.eventName}
                    </span>
                    <span className="text-2xs font-extralight  ">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Rem cumque minima consequuntur labore exercitationem nemo
                      animi inventore ipsa iste officia!
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </>
        ))}
      </main> */}
      <br />
      <br />
      <Image src="/EventsIntro.png" width={1920} height={314} />
      <div
        style={{
          width: '10vw',
          padding: '10px 30px 10px 30px',
          backgroundColor: '#06101C',
        }}
      >
        <div>
          <h2 style={{ color: '#3EDCF2', fontWeight: '800' }}>
            MAJOR
            <br />
            EVENTS
          </h2>
          <hr />
          <ul>
            <li>Cosmos</li>
            <li>Destival</li>
            <li>Requiem</li>
            <li>DJ Night</li>
            <li>Prabhdeep</li>
            <li>Lifafa</li>
          </ul>
        </div>
        <div>
          <h2 style={{ color: '#3EDCF2', fontWeight: '800' }}>
            MINOR
            <br />
            EVENTS
          </h2>
          <hr />
          <ul>
            <li>Aperture</li>
            <li>Cinefilia</li>
            <li>Convergence</li>
            <li>Coreografia</li>
            <li>D-Club</li>
            <li>Estrella</li>
            <li>Glitch</li>
            <li>Rotaract</li>
            <li>LearnIT</li>
            <li>Litmus</li>
            <li>The Music Club</li>
            <li>Scribbles</li>
          </ul>
        </div>
      </div>
      <div>
        {data.map((item) => (
          <div style={{ float: 'right' }}>
            <img src={item.source}></img>
            <h1>{item.title}</h1>
            <h3>Event by {item.club}</h3>
            <h4>{item.info}</h4>
            <h1>
              {item.date}
              <span style={{ verticalAlign: 'super' }}>th</span> OCT
            </h1>
            <h2>{item.time}</h2>
            <button
              className="hover: bg-white hover:text-black"
              style={{
                borderColor: 'white',
                borderWidth: '2px',
                backgroundColor: 'rgb(4,7,19)',
                color: 'white',
                padding: '10px 40px',
                fontSize: '170%',
                fontWeight: '600',
              }}
            >
              REGISTER
            </button>
          </div>
        ))}
      </div>
      <main className="w-3/4 grid grid-cols-4 h-full float-right items-center pt-24 gap-y-10 gap-x-5">
        {minorevents.payload.map((minorevent, _i) => (
          <>
            <div className="text-4xl col-span-4 place-self-start font-Montserrat uppercase font-semibold ml-8">
              {minorevent.name}
            </div>

            {minorevent.eventNames.map((eventname, _i) => (
              <div key={_i} className="flex justify-center items-center mx-10">
                <div className="relative bg-black mb-20">
                  <Image
                    src={eventname.image}
                    height={450}
                    width={360}
                    className=""
                  />
                  <div className=" z-10 bg-black w-4 h-4"></div>
                  <div className=" z-20 bottom-0 ">
                    <span className="capitalize text-base">
                      {eventname.eventName}
                    </span>
                    <br />
                    <span className="text-2xs font-extralight  ">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Rem cumque minima consequuntur labore exercitationem nemo
                      animi inventore ipsa iste officia!
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </>
        ))}
      </main>
    </div>
  );
}
