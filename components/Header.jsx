import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import oneirosLogo from '../assets/images/OneirosLogo.png';
import onoLogo from '../assets/images/onoLogo.png';

export default function Header() {
  // const navItems = [{ name: 'Events', link: '/events' }];
  return (
    <div>
      <header className="fixed top-0 flex sm:px-4 min-w-full bg-black  text-white z-1 justify-between items-center h-14 z-50">
        <div className="relative flex z-2 ml-20 h-10 ">
          <Link href="/" passHref={true}>
            <a>
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
        </div>
        <div className="flex justify-between pr-10 w-2/5">
          <Link href="/artist">
            <a className="items-center mx-2 inline-flex cursor-pointer">
              <h3 className="ml-2 hidden flex-1 lg:inline-flex">Artists</h3>
            </a>
          </Link>
          <Link href="/events">
            <a className="items-center mx-2 inline-flex cursor-pointer">
              <h3>Events</h3>
            </a>
          </Link>
          <Link href="/sponsors">
            <a className="items-center mx-2 inline-flex cursor-pointer">
              <h3>Sponsors</h3>
            </a>
          </Link>
          <Link href="/stalls">
            <a className="items-center mx-2 inline-flex cursor-pointer">
              <h3>Stalls</h3>
            </a>
          </Link>
          <Link href="/clubs">
            <a className="items-center mx-2 inline-flex cursor-pointer">
              <h3>Clubs</h3>
            </a>
          </Link>
          <Link href="/teams">
            <a className="items-center mx-2 inline-flex cursor-pointer">
              <h3>Teams</h3>
            </a>
          </Link>
          <Link href="/faqs">
            <a className="items-center mx-2 inline-flex cursor-pointer">
              <h3>FAQs</h3>
            </a>
          </Link>
        </div>
      </header>
    </div>
  );
}
