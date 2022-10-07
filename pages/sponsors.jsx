import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import Header from '../components/Header';
import { sponsors } from '../data/sponsors';
import Link from 'next/link';



export default function Sponsors() {
  return (
    <div className="">
      <Header />
      <nav className="fixed h-full w-1/3 text-white text-center shadow-sm shadow-primaryWhite">
        <h1 className="text-6xl pt-40 ">Sponsors</h1>
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
        {sponsors.map((sponsor, _i) => (
          <div key={_i} className="flex justify-center items-center">
            <div className="rounded-full h-40 w-40 relative hover:bg-primaryWhite hover:transition ease-in-out delay-150 ">
           
            <Link href={sponsor.link}>
             <a target={"_blank"}>
             <Image
                src={sponsor.image}
                layout="fill"
                objectFit="contain"
                alt="sponsor image"
              />
             </a>
             
             </Link>
             
             
             
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
