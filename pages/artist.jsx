import Image from 'next/image';
import React from 'react';
import Header from '../components/Header';
import jubin from '../assets/images/artists/jubin.jpg';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

export default function Artist() {
  const artists = [
    {
      name: 'Jubin Nautiyal',
      image: '/artists/jubin.jpg',
      instaLink: 'https://www.instagram.com/jubin_nautiyal/',
    },
    {
      name: 'Jubin Nautiyal',
      image: '/artists/jubin.jpg',
      instaLink: 'https://www.instagram.com/jubin_nautiyal/',
    },
  ];
  return (
    <div className="">
      <Header />
      <nav className="fixed h-full w-1/3 text-white text-center shadow-sm shadow-primaryWhite">
        <h1 className="text-6xl pt-40 ">Artists</h1>
        <p className="pt-4 mx-14">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          repellat sed, explicabo culpa odit cumque reiciendis enim aliquam
          dolorum quasi quia consequuntur, itaque vitae illum. Iure, est?
          Voluptatem deserunt rem architecto ex atque nam perferendis officia
          sunt, dolorum enim nihil maiores placeat inventore, quis nostrum ipsum
          consequuntur blanditiis harum adipisci!
        </p>
      </nav>
      <main className="w-2/3 h-full float-right flex flex-col items-center">
        <div className="mt-40 ">
          {artists.map((artist, _i) => (
            <div
              key={_i}
              className=" h-96 w-[45vw] ml-10 bg-white mb-28 col-span-3 place-self-center flex flex-col items-center border-2 border-black shadow-2xl"
            >
              <div className="relative h-40 w-40 rounded-full z-10 -translate-y-20">
                <Image
                  src={artist.image}
                  layout="fill"
                  objectFit="cover"
                  className=" rounded-full "
                  alt="artist image"
                />
              </div>
              <h2 className="text-2xl -translate-y-10 text-blue-600 font-medium">
                {artist.name}
              </h2>
              <p className="text-black max-w-xl text-xs">
                Lorem ipsum dolor sit, amet consectetur loda elit. Maiores
                doloremque beatae tempora corrupti vel, quae est saepe accusamus
                asperiores consequuntur officiis architecto, vitae voluptate
                nihil blanditiis ipsa non quia hic! Sapiente dolorum praesentium
                saepe laborum harum illo reprehenderit veniam, repellat quis
                minus nemo, temporibus iusto cum, assumenda eligendi facere at
                quo asperiores impedit? Sit eveniet, temporibus veniam mollitia
                nemo accusamus neque dolor dolorem recusandae assumenda tenetur,
                cumque optio illum omnis commodi amet blanditiis magnam, magni
              </p>
              <div className="flex w-full justify-around px-40">
                <button className="flex text-xs bg-green-500 rounded-full border border-black mt-5 items-center justify-center text-black px-14 py-2 shadow-black shadow-sm ">
                  <a>Listen on Spotify</a>
                  <ArrowUpRightIcon className="h-4 w-4" />
                </button>
                <button className="flex text-xs bg-black rounded-full border border-black mt-5 items-center justify-center text-white px-14 py-2 shadow-black shadow-sm ">
                  <a href={artist.instaLink}>Check Instagram</a>
                  <ArrowUpRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="h-10 w-10 ml-10 bg-red-600 mt-36 "></div>
        <div className="h-10 w-10 ml-10 bg-red-600 mt-36 "></div>
        <div className="h-10 w-10 ml-10 bg-red-600 mt-36 "></div>
      </main>
    </div>
  );
}
