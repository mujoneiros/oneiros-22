import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import React from 'react';
import { artistplaceholder } from '../public/artistplaceholder.png';

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
      <div className="max-w-fit">
        <Carousel responsive={responsive}>
          <div className="h-[14.8125rem] ">
            <Image
              src={artistplaceholder}
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
          <div className="h-[14.8125rem] ">
            <Image
              src={artistplaceholder}
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
          <div className="h-[14.8125rem] ">
            <Image
              src={artistplaceholder}
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
          <div className="h-[14.8125rem] ">
            <Image
              src={artistplaceholder}
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
          <div className="h-[14.8125rem] ">
            <Image
              src={artistplaceholder}
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
          <div className="h-[14.8125rem] ">
            <Image
              src={artistplaceholder}
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
          <div className="h-[14.8125rem] ">
            <Image
              src={artistplaceholder}
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
