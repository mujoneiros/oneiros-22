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
    </div>
  );
}
