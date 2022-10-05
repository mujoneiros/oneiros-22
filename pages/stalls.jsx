import Image from 'next/image';
import React from 'react';
import Header from '../components/Header';
import { stalls } from '../data/stalls';

export default function Stalls() {
  return (
    <div className="">
      <Header />
      <nav className="fixed h-full w-1/3 text-white text-center shadow-sm shadow-primaryWhite">
        <h1 className="text-6xl pt-40 ">Stalls</h1>
        <p className="pt-8 mx-14">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          repellat sed, explicabo culpa odit cumque reiciendis enim aliquam
          dolorum quasi quia consequuntur, itaque vitae illum. Iure, est?
          Voluptatem deserunt rem architecto ex atque nam perferendis officia
          sunt, dolorum enim nihil maiores placeat inventore, quis nostrum ipsum
          consequuntur blanditiis harum adipisci!
        </p>
      </nav>
      <main className="w-2/3 grid grid-cols-3 h-full float-right items-center pt-24">
        {stalls.map((stall, _i) => (
          <div key={_i} className="flex justify-center items-center">
            <div className="rounded-full h-40 w-40 relative hover:bg-primaryWhite hover:transition ease-in-out delay-150 ">
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
