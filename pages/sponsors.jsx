import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import SponsorImage from "../components/SponsorImage";
import { sponsors } from "../data/sponsors";

export default function Sponsors() {
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

    <div>
      <Header />
      <br />
      <br />
      <Image src="/introImage.png" width={1920} height={314} />
      <div className="title_sponsors">
        <h1 style={{ color: "#A5C1D1" }} className="text-center mt-6">
          TITLE SPONSORS
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {sponsors.map((sponsor, _i) =>
            sponsor.type === "title" ? (
              <div key={_i} className="flex justify-center items-center">
                <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                  <Image
                    src={sponsor.image}
                    layout="fill"
                    objectFit="contain"
                    alt="sponsor image"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </main>
      </div>
      <div className="associate_sponsors">
        <h1 style={{ color: "#A5C1D1" }} className="text-center mt-6">
          ASSOCIATE SPONSORS
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {sponsors.map((sponsor, _i) =>
            sponsor.type === "associate" ? (
              <div key={_i} className="flex justify-center items-center">
                <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                  <Image
                    src={sponsor.image}
                    layout="fill"
                    objectFit="contain"
                    alt="sponsor image"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </main>
      </div>
      <div className="co_sponsors">
        <h1 style={{ color: "#A5C1D1" }} className="text-center mt-6">
          CO-SPONSORS
        </h1>
        <main className="flex justify-center wrap flex-wrap">
          {sponsors.map((sponsor, _i) =>
            sponsor.type === "co" ? (
              <div key={_i} className="flex justify-center items-center">
                <div className="rounded-full h-40 w-40 relative hover:scale-125 hover:transition ease-in-out delay-150 m-10">
                  <Image
                    src={sponsor.image}
                    layout="fill"
                    objectFit="contain"
                    alt="sponsor image"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </main>
      </div>
    </div>
  );
}
