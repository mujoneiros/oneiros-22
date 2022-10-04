import Image from 'next/image';
import React from 'react';
import oneirosLogo from '../assets/gifs/logo.gif';

export default function Loader() {
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <Image src={oneirosLogo} height={480} width={897} alt="loading image" />
      </div>
    </div>
  );
}
