import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import oneirosLogo from '../assets/images/OneirosLogo.png';
import { BeakerIcon, SunIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oneiros</title>
        <meta name="description" content="Oneiros" />
      </Head>
      <Header />
      <main>
        <div className="flex justify-between items-center bg-black border-y border-black py-10 lg:py-5 text-white h-screen">
          <div className="pl-28 space-y-5 w-1/2">
            <h1 className="text-6xl max-w-xl font-serif">
              <span className="">Oneiros</span>
            </h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              veniam qui voluptate necessitatibus minus! Dicta officiis saepe
              alias, eius fuga ab beatae sint facilis illo fugit nam excepturi
              amet adipisci aspernatur nisi recusandae! Magnam quisquam
              voluptatibus excepturi mollitia eveniet corrupti.
            </h2>
            <div className="flex flex-col border border-b-2 py-4 w-56 items-center">
              <h3 className="text-xl font-extrabold">Loremipsumdolor</h3>
              <h4>14-16 OCT | JAIPUR</h4>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <Image
              src={oneirosLogo}
              alt="Oneiros Logo"
              className="hidden md:inline-flex lg:h-full"
            />
          </div>
        </div>
        <div className="h-screen flex flex-col items-center">
          <div className="max-w-4xl flex flex-col items-center gap-10">
            <h2 className="text-6xl max-w-xl font-serif pb-6 decoration-white decoration-4 underline">
              What is Oneiros&apos;22
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              at iusto asperiores vero ipsum sapiente harum eius reprehenderit
              eum. Et inventore optio aliquam animi asperiores nostrum tenetur
              repellendus consectetur voluptatum, itaque impedit quaerat dolorum
              illo illum nobis quidem corrupti iure. Ut repellat in molestias
              mollitia facilis. Blanditiis eos itaque ab ipsam molestiae
              distinctio accusantium, placeat perferendis quae eius quasi iste
              debitis corporis saepe excepturi alias omnis sit voluptas
              dignissimos, veritatis dolorem aliquam, assumenda consequatur?
              Quaerat ratione magnam expedita! Omnis, pariatur natus minus iste
              molestias at modi. Ea quia deserunt amet, laboriosam numquam
              facere dolore, autem cupiditate veritatis maxime eligendi quidem.
            </p>
            <button
              type="button"
              class="flex max-w-sm  bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white uppercase font-bold shadow-md rounded-full py-3 px-4 text-center"
            >
              Register Now
            </button>
          </div>
          <div className="mt-36 flex flex-col justify-center items-center">
            <h2 className="text-4xl max-w-xl font-serif pb-6 decoration-white decoration-4 underline">
              Why you should attend
            </h2>
            <div className="flex justify-between space-x-10">
              <div className="w-40 h-40 relative">
                <div className="w-full h-full absolute top-0 left-0 bg-gray-300 z-10 flex flex-col justify-center items-center px-2">
                  <SunIcon className="h-5 w-5 mx-auto text-black" />
                  <p className="text-black text-sm pt-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem, aliquid!
                  </p>
                </div>
                <div className="w-full h-full absolute top-0 left-0  m-2 bg-slate-800"></div>
              </div>
              <div className="w-40 h-40 relative">
                <div className="w-full h-full absolute top-0 left-0 bg-gray-300 z-10"></div>
                <div className="w-full h-full absolute top-0 left-0  m-2 bg-slate-800"></div>
              </div>
              <div className="w-40 h-40 relative">
                <div className="w-full h-full absolute top-0 left-0 bg-gray-300 z-10"></div>
                <div className="w-full h-full absolute top-0 left-0  m-2 bg-slate-800"></div>
              </div>
              <div className="w-40 h-40 relative">
                <div className="w-full h-full absolute top-0 left-0 bg-gray-300 z-10"></div>
                <div className="w-full h-full absolute top-0 left-0  m-2 bg-slate-800"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
