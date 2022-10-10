import React from 'react'
import Image from 'next/image'
const imgLink = "/artists/jubin.jpg"

const MajorArtistCard = () => {
  return (
    <div>
        <h1>MAJOR ARTISTS</h1>
        <div>
            <div>
                <Image src={imgLink} layout={'fill'} />
            </div>
        </div>
    </div>
  )
}

export default MajorArtistCard