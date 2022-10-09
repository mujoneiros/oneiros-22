import React from 'react'
import Image from 'next/image'
import Button from './Button'
const imgLink = "/artists/jubin.jpg"
const ArtistCard = (props) => {
  return (
    <div className= 'relative rounded-lg w-1/6 h-1/5 text-center'>
        <Image
                src={imgLink}
                className = "object-cover opacity-40 rounded-lg"
                layout = "responsive"
                width = "75%"
                height= "100%"
              />
              <div className='absolute w-full py-2.5 bottom-0 inset-x-0 text-white text-xs text-center leading-4'>
              <h1  font = {props.font} className = "font-extrabold text-xl">Jubin Nautiyal{props.artistName}</h1>
              <h4  font = {props.font}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et inventore beatae perspiciatis, eaque eum dolore rem aspernatur hic, quae assumenda velit exercitationem officia nostrum! Quidem minus at dolorum incidunt voluptates?{props.artistDescription}</h4>
              </div>
        

    </div>
  )
}

export default ArtistCard