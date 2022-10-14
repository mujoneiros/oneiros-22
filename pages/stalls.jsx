import Image from 'next/image';
import React from 'react';
import Header from '../components/Header';
// import { stalls } from '../data/stalls';
import { Helmet } from 'react-helmet';
export default function Stalls() {
  const stalls = [
    {
      image: '/stalls/burgerkohinoor.png',
    },
    {
      image: '/stalls/hyderabadidumbiryani.png',
    },
    {
      image: '/stalls/themomosstory.png',
    },
    {
      image: '/stalls/gameoftaste.png',
    },
    {
      image: '/stalls/belgianwaffle.png',
    },
    {
      image: '/stalls/bistro57.png',
    },
    {
      image: '/stalls/subway.png',
    },
    {
      image: '/stalls/anandamrasoi.png',
    },
    {
      image: '/stalls/jaipurbookmarket.png',
    },
    {
      image: '/stalls/mamamia.png',
    },
    {
      image: '/stalls/thejuiceshop.png',
    },
    {
      image: '/stalls/burrels.png',
    },
    {
      image: '/stalls/lighthouse.png',
    },
  ];
  return (
    
    <div className="">
      <Helmet>
        <title>Stalls</title>
      </Helmet>
      <Header />
      {/* <nav className="fixed h-full w-1/3 text-white text-center shadow-sm shadow-primaryWhite">
        <h1 className="text-6xl pt-40 ">Stalls</h1>
        <p className="pt-8 mx-14">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          repellat sed, explicabo culpa odit cumque reiciendis enim aliquam
          dolorum quasi quia consequuntur, itaque vitae illum. Iure, est?
          Voluptatem deserunt rem architecto ex atque nam perferendis officia
          sunt, dolorum enim nihil maiores placeat inventore, quis nostrum ipsum
          consequuntur blanditiis harum adipisci!
        </p>
      </nav> */}
      <h1 style={{ color: '#A5C1D1' }} className="pt-40 text-center mt-6 text-6xl">
        Stalls
      </h1>
      <main className=" pt-20 grid grid-cols-3 flex justify-center wrap flex-wrap">
        {stalls.map((stall, _i) => (
          <div key={_i} className="flex justify-center items-center">
            <div className="rounded-full h-40 w-40 relative hover:bg-primaryWhite hover:transition ease-in-out delay-150">
              <Image
                src={stall.image}
                layout="fill"
                objectFit="contain"
                alt="stall image"
              />
            </div>
          </div>
          ))} 
          </main>
      
    </div>
  );
}
