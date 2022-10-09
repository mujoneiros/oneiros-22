import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomCarousel from '../components/CustomCarousel';
import Header from '../components/Header';

export default function car() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
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
      <Header />

      {/* <div className="max-w-7xl">
        <Carousel responsive={responsive}>
          <div className="h-[12.5625rem] bg-red-700">
            <Image
              src={'/artistplaceholder.png'}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="  bg-red-700">
            <Image
              src={'/artistplaceholder.png'}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className=" bg-red-700">
            <Image
              src={'/artistplaceholder.png'}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className=" bg-red-700">
            <Image
              src={'/artistplaceholder.png'}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className=" bg-red-700">
            <Image
              src={'/artistplaceholder.png'}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="h-[12.5625rem] bg-red-700">
            <Image
              src={'/artistplaceholder.png'}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Carousel>
      </div> */}
      <CustomCarousel />
    </div>
  );
}
