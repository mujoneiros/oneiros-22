import { InformationCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import oneirosLogo from '../assets/images/OneirosLogo.png';
import onoLogo from '../assets/images/onoLogo.jpg';

export default function Header() {
  // const navItems = [{ name: 'Events', link: '/events' }];
  return (
    <div>
      <header className="fixed top-0 flex sm:px-4 min-w-full bg-transparent text-white z-1 justify-between md:justify-around items-center h-14 z-50 pt-4 px-4">
        <div className="relative z-2 h-10 pt-2 ">
          <Link href="/" passHref={true}>
            <a className="hidden md:inline-block">
              <Image
                src={onoLogo}
                width={200}
                height={30}
                layout="fixed"
                objectFit="cover"
                alt="oneiros"
              />
            </a>
          </Link>
          <Link href="/" passHref={true}>
            <a className="inline-block md:hidden">
              <Image
                src={oneirosLogo}
                width={50}
                height={20}
                layout="fixed"
                objectFit="cover"
                alt="oneiros"
              />
            </a>
          </Link>
        </div>
        <div className="flex justify-between md:w-2/5">
          <Link href="/events">
            <a className="items-center mx-2 inline-flex cursor-pointer text-2xs md:text-base">
              <h3>Events</h3>
            </a>
          </Link>
          <Link href="/artist">
            <a className="items-center mx-2 inline-flex cursor-pointer text-2xs md:text-base">
              <h3>Artists</h3>
            </a>
          </Link>
          <Link href="/sponsors">
            <a className="items-center mx-2 inline-flex cursor-pointer text-2xs md:text-base">
              <h3>Sponsors</h3>
            </a>
          </Link>
          {/* <Link href="/stalls">
            <a className="items-center mx-2 inline-flex cursor-pointer text-2xs md:text-base">
              <h3>Stalls</h3>
            </a>
          </Link> */}
          {/* <Link href="/teams">
            <a className="items-center mx-2 inline-flex cursor-pointer">
              <h3>Teams</h3>
            </a>
          </Link> */}
          <Link href="/faqs">
            <a className="items-center mx-2 inline-flex cursor-pointer text-2xs md:text-base">
              <h3>FAQs</h3>
            </a>
          </Link>
        </div>
        <InformationCircleIcon height={15} width={15} className="md:hidden" />
        <a href="https://linktr.ee/mujoneiros" target="_blank" rel="noreferrer">
          <div className="hidden md:block uppercase text-accent cursor-pointer neonText ">
            Register Now
          </div>
        </a>
      </header>
    </div>
  );
}
