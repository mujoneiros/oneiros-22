import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import React from 'react';
import { artistplaceholder } from '../public/artistplaceholder.png';
const imgLink = '/artists/jubin.jpg';
import { artists } from '../data/artists';

export default function CustomCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <div>
        <span
          className="inline-block text-5xl font-freak"
          style={{
            letterSpacing: '1vw',
            paddingLeft: '6.5rem',
            color: '#59EDEA',
          }}
        >
          PREVIOUS ARTIST
        </span>
        <br />
        <br />
        <Carousel responsive={responsive}>
          {/* {artists.resources.map((artist, _i) => {
            <div className="h-[20.8125rem] ">
              <Image
                src={artist.imageUrl}
                layout="fill"
                objectFit="contain"
                className=""
              />
              <span
                className="inline-block text-5xl font-freak relative top-40 left-40"
                style={{ letterSpacing: '1vw', paddingLeft: '6.5rem' }}
              >
                {artist.title}
              </span>
            </div>;
          })} */}
          <div className="h-[20.8125rem] ">
            <Image
              src={'/artists/akashmehta.png'}
              layout="fill"
              objectFit="contain"
              className=""
            />
            {/* <span
              className="inline-block text-5xl font-freak relative top-40 left-40"
              style={{ letterSpacing: '1vw', paddingLeft: '6.5rem' }}
            >
              MAJOR ARTISTS
            </span> */}
          </div>
          <div className="h-[20.8125rem] ">
            <Image
              src={'/artists/djchetas.png'}
              layout="fill"
              objectFit="contain"
              className=""
            />
            {/* <span
              className="inline-block text-5xl font-freak relative top-40 left-40"
              style={{ letterSpacing: '1vw', paddingLeft: '6.5rem' }}
            >
              MAJOR ARTISTS
            </span> */}
          </div>
          <div className="h-[20.8125rem] ">
            <Image
              src={'/artists/djshaan.png'}
              layout="fill"
              objectFit="contain"
              className=""
            />
            {/* <span
              className="inline-block text-5xl font-freak relative top-40 left-40"
              style={{ letterSpacing: '1vw', paddingLeft: '6.5rem' }}
            >
              MAJOR ARTISTS
            </span> */}
          </div>
          <div className="h-[20.8125rem] ">
            <Image
              src={'/artists/hardysandhu.png'}
              layout="fill"
              objectFit="contain"
              className=""
            />
            {/* <span
              className="inline-block text-5xl font-freak relative top-40 left-40"
              style={{ letterSpacing: '1vw', paddingLeft: '6.5rem' }}
            >
              MAJOR ARTISTS
            </span> */}
          </div>
          <div className="h-[20.8125rem] ">
            <Image
              src={'/artists/jubin.jpg'}
              layout="fill"
              objectFit="contain"
              className=""
            />
            {/* <span
              className="inline-block text-5xl font-freak relative top-40 left-40"
              style={{ letterSpacing: '1vw', paddingLeft: '6.5rem' }}
            >
              MAJOR ARTISTS
            </span> */}
          </div>
          <div className="h-[20.8125rem] ">
            <Image
              src={'/artists/shirleysetia.png'}
              layout="fill"
              objectFit="contain"
              className=""
            />
            {/* <span
              className="inline-block text-5xl font-freak relative top-40 left-40"
              style={{ letterSpacing: '1vw', paddingLeft: '6.5rem' }}
            >
              MAJOR ARTISTS
            </span> */}
          </div>
          <div className="h-[20.8125rem] ">
            <Image
              src={'/artists/localtrain.png'}
              layout="fill"
              objectFit="contain"
              className=""
            />
            {/* <span
              className="inline-block text-5xl font-freak relative top-40 left-40"
              style={{ letterSpacing: '1vw', paddingLeft: '6.5rem' }}
            >
              MAJOR ARTISTS
            </span> */}
          </div>
        </Carousel>
      </div>
    </div>
  );
}
