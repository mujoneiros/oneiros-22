import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import SponsorImage from '../components/SponsorImage';
import { sponsors } from '../data/sponsors';
import Link from 'next/link';

export default function Sponsors() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <Image src="/introImage.png" width={1920} height={314} />
      <div className="title_sponsors">
        <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6">
          TITLE SPONSORS
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {sponsors.map((sponsor, _i) =>
            sponsor.type === 'title' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
      </div>
      <div className="associate_sponsors">
        <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6">
          ASSOCIATE SPONSORS
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {sponsors.map((sponsor, _i) =>
            sponsor.type === 'associate' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
      </div>
      <div className="co_sponsors">
        <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6">
          CO-SPONSORS
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {sponsors.map((sponsor, _i) =>
            sponsor.type === 'co' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ) : (
              ''
            )
          )}
        </main>
      </div>
    </div>
  );
}
