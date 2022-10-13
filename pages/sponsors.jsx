import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import SponsorImage from '../components/SponsorImage';
import { sponsors } from '../data/sponsors';
import {Helmet} from 'react-helmet'
export default function Sponsors() {
  const currentSpons = [ {
    image: '/sponsors/ubon.png',
    type: 'title-sponsor',
    link: 'https://www.fernhotels.com/',
  },
  {
    image: '/sponsors/ohi.png',
    type: 'registration',
    link: ' https://www.radissonhotels.com/en-us/hotels/radisson-jaipur-city-center?facilitatorId=GOOGLECHAP&cid=a:ps+b:ggl+c:apac+i:brand+e:rad+d:ind+r:brt+f:en-US+g:ho+h:INRJJAICTR+v:cf&gclsrc=ds&gclsrc=ds',
  },

  {
    image: '/sponsors/coke.png',
    type: 'beverage',
    link: 'https://www.dell.com/en-in',
  },

  {
    image: '/sponsors/sas.png',
    type: 'entertainment',
    link: 'dulux.in',
  },
  {
    image: '/sponsors/tribevibe.png',
    type: 'festival',
    link: 'https://www.elitetechnogroups.com/',
  },
  {
    image: '/sponsors/redbull.png',
    type: 'energy-drink',
    link: 'https://www.heromotocorp.com/en-in/homepage.html',
  },
  {
    image: '/sponsors/dhampur.png',
    type: 'powered-by',
    link: 'https://www.ambashakti.com/',
  },
  {
    image: '/sponsors/moodindigo.png',
    type: 'talent-showcase',
    link: 'https://www.ambashakti.com/',
  },
  {
    image: '/sponsors/punjabibynature.png',
    type: 'powered-by',
    link: 'http://youvaworld.com/',
  },
  {
    image: '/sponsors/songdew.png',
    type: 'talent',
    link: 'http://themoneyteam.com/',
  },
  {
    image: '/sponsors/anandan.png',
    type: 'hospitality',
    link: 'https://www.lakmeindia.com/',
  },
  {
    image: '/sponsors/thelordpizza.png',
    type: 'hospitality',
    link: 'https://www.airtel.in/',
  },
  {
    image: '/sponsors/tattootatva.png',
    type: 'arts-and-ent',
    link: 'https://www.airtel.in/',
  },
  {
    image: '/sponsors/rocky.png',
    type: 'virtual-gaming',
    link: 'https://www.airtel.in/',
  },]
  return (
    // <div className="">
    //   <Header />
    //   <nav className="fixed h-full w-1/3 text-white text-center shadow-sm shadow-primaryWhite">
    //     <h1 className="text-6xl pt-40 ">Sponsors</h1>
    //     <p className="pt-8 mx-14">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
    //       repellat sed, explicabo culpa odit cumque reiciendis enim aliquam
    //       dolorum quasi quia consequuntur, itaque vitae illum. Iure, est?
    //       Voluptatem deserunt rem architecto ex atque nam perferendis officia
    //       sunt, dolorum enim nihil maiores placeat inventore, quis nostrum ipsum
    //       consequuntur blanditiis harum adipisci!
    //     </p>
    //   </nav>
    //   <main className="w-2/3 grid grid-cols-3 h-full float-right items-center pt-24">
    //     {sponsors.map((sponsor, _i) => (
    //       <div key={_i} className="flex justify-center items-center">
    //         <div className="rounded-full h-40 w-40 relative hover:bg-primaryWhite hover:transition ease-in-out delay-150 ">
    //           <Image
    //             src={sponsor.image}
    //             layout="fill"
    //             objectFit="contain"
    //             alt="sponsor image"
    //           />
    //         </div>
    //       </div>
    //     ))}
    //   </main>
    // </div>

    <div style={{ backgroundColor: '#040613' }}>
      
      <Helmet>
        <title>Sponsors</title>
      </Helmet>
      <Header />
      <br />
      <br />
      <Image
        src="/prev_sponsors_head.png"
        width={1920}
        height={314}
        alt="previous sponsors"
      />
      <h1 style={{ color: '#37D6E9'}} className="font-stolzl text-center mt-6 text-5xl">
        Sponsors
      </h1>
      <br></br>
      <hr></hr>
      <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
        Title Sponsor
      </h1>
      <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'title-sponsor' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="ohi"
                        // style={{ filter: 'brightness(0) invert(1)' }}
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
          <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
        Registrations
      </h1>
      <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'registration' ? (
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
          <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
        Beverage Partner
      </h1>
      <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'beverage' ? (
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
          <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
        Entertainment Partner
      </h1>
      <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'entertainment' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
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
          <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
        Festival Partner
      </h1>
      <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'festival' ? (
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
          <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
        Energy Drink Partner
      </h1>
      <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'energy-drink' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
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
          <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
        Talent Showcase Partner
      </h1>
      <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'talent-showcase' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
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
          <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
        Virtual Gaming Partner
      </h1>
      <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'virtual-gaming' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
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
          <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
        Powered By
      </h1>
      <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'powered-by' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
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
          <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
        Talent Partner
      </h1>
      <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'talent' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
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
          <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
        Hospitality Partner
      </h1>
      <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'hospitality' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
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
          <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
        Arts and Entertainment Partner
      </h1>
      <main className="flex justify-center wrap flex-wrap">
          {currentSpons.map((sponsor, _i) =>
            sponsor.type === 'arts-and-ent' ? (
              <div key={_i} className="flex justify-center items-center">
                <Link href={sponsor.link}>
                  <a target={'_blank'}>
                    <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                      <Image
                        src={sponsor.image}
                        layout="fill"
                        objectFit="contain"
                        alt="sponsor image"
                        // style={{ filter: 'brightness(0) invert(1)' }}
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
      <h1 style={{ color: '#37D6E9'}} className="font-stolzl text-center mt-6 text-5xl">
        Previous Sponsors
      </h1>
      <br></br>
      
      <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
        Talent Showcase Partner
      </h1>
      <div className="justify-center items-center flex m-10 p-10">
        <Image
          src="/mood_indigo.png"
          objectFit="contain"
          width={880}
          height={182}
          alt="mood indigo"
        />
      </div>
      <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
        Entertainment Partner
      </h1>
      <div className="justify-center items-center flex m-10 p-10">
        <Image
          src="/sas_ent.png"
          objectFit="contain"
          width={880}
          height={273}
          alt="sas"
        />
      </div>
      <div className="title_sponsors">
        <h1 style={{ color: '#A5C1D1' }} className="text-center mt-6 text-3xl">
          Sponsors and Partners
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {sponsors.map((sponsor, _i) => (
            <div key={_i} className="flex justify-center items-center">
              <Link href={sponsor.link}>
                <a target={'_blank'}>
                  <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10 ml-40 mr-40">
                    <Image
                      src={sponsor.image}
                      layout="fill"
                      objectFit="contain"
                      alt="sponsor image"
                      // style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </main>

      </div>
      {/* <div className="associate_sponsors">
        <h1 style={{ color: "#A5C1D1" }} className="text-center mt-6">
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
          )} */}
      {/* </main>
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
        </main> */}
    </div>
    // </div>
  );
}
