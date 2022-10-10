import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import { minorevents, majorEvents } from '../data/events';
import './../styles//events.module.css';

export default function Events() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behaviour: 'smooth' });
  };

  const scrollDown = (el) => {
    document.getElementById('blueScroll').scrollTo({
      top: document.getElementById(el).offsetTop - 250,
      behaviour: 'smooth',
    });
  };
  return (
    <div>
      <Header />
      <div className="w-full h-40 relative mt-14">
        <Image src="/3days.png" layout="fill" objectFit="cover" />
      </div>
      <nav className="-translate-y-1.5 fixed h-[30rem] w-1/4 font-Montserrat text-center bg-secondary text-white flex flex-col items-start pl-10 overflow-y-scroll pb-10 ">
        <div className="w-24 border-b-[1px] border-b-white">
          <h2 className=" pt-10 font-extrabold font-stolzl text-tertiary text-left tracking-widest">
            MAJOR EVENTS
          </h2>
        </div>
        <ul className="text-grey1 text-left cursor-pointer">
          {majorEvents.map((eventname, _i) => (
            <li className="mt-1" onClick={() => scrollDown(eventname.name)}>
              {eventname.name}
            </li>
          ))}
        </ul>
        <div className="w-24 border-b-[1px] border-b-white pt-10">
          <h2 className=" font-extrabold font-stolzl text-tertiary text-left tracking-widest">
            MINOR EVENTS
          </h2>
        </div>
        <ul className="text-grey1 text-left cursor-pointer">
          {minorevents.payload.map((eventname, _i) => (
            <li className="mt-1" onClick={() => scrollDown(eventname.name)}>
              {eventname.name}
            </li>
          ))}
        </ul>
      </nav>
      <main
        className="h-[30rem] overflow-y-scroll flex flex-col items-end w-3/4 float-right"
        id="blueScroll"
      >
        <div className=" text-white mr-auto ml-20">
          <h2 className="font-stolzl text-accent text-5xl pb-5">
            MAJOR EVENTS
          </h2>
          <h4 className="text-grey1 pb-6">6 Events</h4>
          <div className="w-full">
            {majorEvents.map((majorEvent, _i) => (
              <div className="flex mb-5">
                <div className="" id={majorEvent.name}>
                  <Image
                    src={majorEvent.image}
                    height={450 * 1.5}
                    width={360 * 1.5}
                  />
                </div>
                <div className="flex flex-col items-start pl-5 pr-40 justify-between">
                  <h2 className="font-stolzl text-5xl uppercase">
                    {majorEvent.name}
                  </h2>
                  <h2>
                    Event by{' '}
                    <span className="font-bold">{majorEvent.eventby}</span>
                  </h2>
                  <h4 className="text-grey1">{majorEvent.description}</h4>
                  <div className="text-accent text-5xl font-stolzl">
                    {majorEvent.date}
                  </div>
                  <div className="text-grey1 text-3xl font-stolzl">
                    {majorEvent.time}
                  </div>
                  <a href={majorEvent.link} className="inline-block w-full">
                    <button className="w-full h-20 p-5 border-2 border-white mb-3 hover:bg-white hover:text-black flex items-center justify-center">
                      Register
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" text-white mr-auto ml-20">
          <h2 className="font-stolzl text-accent text-5xl pb-5">
            MINOR EVENTS
          </h2>
          <h4 className="text-grey1 ">6 Events</h4>
          <div className=" float-right pt-10">
            {minorevents.payload.map((minorevent, _i) => (
              <a
                href="https://unstop.com/p/octaves-western-solo-singing-competition-oneiros-22-revive-manipal-university-mu-jaipur-454353"
                key={_i}
              >
                <div
                  className="text-4xl w-3/4 place-self-center font-Montserrat uppercase font-semibold ml-8"
                  id={minorevent.name}
                >
                  {minorevent.name}
                </div>
                <div className="grid grid-cols-3 grid-flow-row gap-y-10 gap-x-5 overflow-hidden pt-10">
                  {minorevent.eventNames.map((eventname, _i) => (
                    <div key={_i} className="mx-10">
                      <div className="relative bg-secondary mb-5 hover:scale-125 transition ease-in-out duration-300 group  ">
                        <Image
                          src={eventname.image}
                          height={450}
                          width={360}
                          className="absolute group-hover:brightness-50 duration-75 ease-in z-20"
                        />
                        <div className="hidden absolute z-20 bottom-0 group-hover:flex items-start justify-center flex-col font-Montserrat px-4 pb-8 transition group-hover:animate-fade cursor-pointer">
                          <span className="capitalize text-base">
                            {eventname.eventName}
                          </span>
                          <span className="text-2xs font-extralight  ">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Rem cumque minima consequuntur labore
                            exercitationem nemo animi inventore ipsa iste
                            officia!
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-20">
                        <div className="text-white font-Montserrat">
                          {`${eventname.eventName}`}
                        </div>
                        <div className="text-grey1 font-Montserrat">
                          {eventname.date}
                          <span>{` | ${eventname.time}`}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      {/* <br />
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
      </div> */}
    </div>
  );
}
