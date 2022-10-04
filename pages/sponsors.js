import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import Header from '../components/Header';

export default function sponsors() {
  const sponsors = [
    {
      image: '/sponsors/image1.png',
    },
    {
      image: '/sponsors/image2.png',
    },
    {
      image: '/sponsors/image3.png',
    },
    {
      image: '/sponsors/image4.png',
    },
    {
      image: '/sponsors/image5.png',
    },
    {
      image: '/sponsors/image6.png',
    },
    {
      image: '/sponsors/image7.png',
    },
    {
      image: '/sponsors/image8.png',
    },
    {
      image: '/sponsors/image9.png',
    },
    {
      image: '/sponsors/image10.png',
    },
    {
      image: '/sponsors/image11.png',
    },
    {
      image: '/sponsors/image12.png',
    },
    {
      image: '/sponsors/image13.png',
    },
    {
      image: '/sponsors/image14.png',
    },
    {
      image: '/sponsors/image15.png',
    },
    {
      image: '/sponsors/image16.png',
    },
    {
      image: '/sponsors/image17.png',
    },
    {
      image: '/sponsors/image18.png',
    },
    {
      image: '/sponsors/image19.png',
    },
    {
      image: '/sponsors/image20.png',
    },
    {
      image: '/sponsors/image21.png',
    },
    {
      image: '/sponsors/image22.png',
    },
    {
      image: '/sponsors/image23.png',
    },
    {
      image: '/sponsors/image24.png',
    },
    {
      image: '/sponsors/image25.png',
    },
    {
      image: '/sponsors/image26.png',
    },
    {
      image: '/sponsors/image27.png',
    },
    {
      image: '/sponsors/image28.png',
    },
    {
      image: '/sponsors/image29.png',
    },
    {
      image: '/sponsors/image30.png',
    },
    {
      image: '/sponsors/image31.png',
    },
    {
      image: '/sponsors/image32.png',
    },
    {
      image: '/sponsors/image33.png',
    },
    {
      image: '/sponsors/image34.png',
    },
    {
      image: '/sponsors/image35.png',
    },
    {
      image: '/sponsors/image36.png',
    },
    {
      image: '/sponsors/image37.png',
    },
    {
      image: '/sponsors/image38.png',
    },
    {
      image: '/sponsors/image39.png',
    },
    {
      image: '/sponsors/image40.png',
    },
    {
      image: '/sponsors/image41.png',
    },
    {
      image: '/sponsors/image42.png',
    },
    {
      image: '/sponsors/image43.png',
    },
    {
      image: '/sponsors/image44.png',
    },
    {
      image: '/sponsors/image45.png',
    },
    {
      image: '/sponsors/image46.png',
    },
    {
      image: '/sponsors/image47.png',
    },
    {
      image: '/sponsors/image48.png',
    },
    {
      image: '/sponsors/image49.png',
    },
  ];
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
          <div className="flex justify-center items-center">
            <div className="rounded-full h-40 w-40 relative hover:bg-primaryWhite hover:transition ease-in-out delay-150 ">
              <Image src={sponsor.image} layout="fill" objectFit="contain" />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
