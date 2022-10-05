import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useState } from 'react';
import Header from '../components/Header';
import { minorevents } from '../data/events';

export default function Events() {
  const [major, setMajor] = useState(false);
  const [minor, setMinor] = useState(false);

  return (
    <div>
      <Header />
      <nav className="fixed h-full w-1/3 text-black font-Montserrat text-center shadow-sm shadow-primaryWhite bg-secondaryWhite">
        <h1 className="text-6xl pt-40 font-extrabold ">EVENTS</h1>
        <ul className="mt-12 flex flex-col items-center cursor-pointer">
          {/* <h2 className="font-bold text-3xl" onClick={() => setMajor(!major)}>
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
          </ul> */}
          <li class="hov">
            <span className="font-bold text-3xl pt-5 font-Montserrat">
              Major Events
            </span>
            <ul class="main font-Montserrat font-medium ">
              <li className="flex transition ease-in-out justify-center items-center hover:scale-110">
                <span>Destival</span>
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
      <main className="w-2/3 grid grid-cols-3 h-full float-right items-center pt-24 gap-y-10 gap-x-5">
        {minorevents.payload.map((minorevent, _i) => (
          <>
            <div className="text-5xl col-span-3 place-self-center font-Montserrat uppercase font-semibold">
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
                  {/* <div className="absolute z-10 bg-black w-4 h-4"></div> */}
                  <div className="hidden absolute z-20 bottom-0 group-hover:flex items-start justify-center flex-col font-Montserrat px-4 pb-8 transition group-hover:animate-fade">
                    <span className="capitalize text-base">
                      {eventname.eventName}
                    </span>
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
