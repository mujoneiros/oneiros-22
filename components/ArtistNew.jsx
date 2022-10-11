import Image from 'next/image';
import React from 'react';

const ArtistNew = () => {
  return (
    <div className="w-1/4">
      <Image src={'/artists/giphy.gif'} alt="gif" />
      <Image
        className="w-1/4 hover:opacity-0"
        style={{ position: 'absolute', top: '750px' }}
        src={'/artists/Frame.png'}
        alt="image"
      />
    </div>
  );
};

export default ArtistNew;
