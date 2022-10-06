import React from 'react'
import Header from '../../components/Header'
import EventsCarousel from '../../components/EventsCarousel'
import EventTitle from '../../components/EventTitle'
import ArtistCard from '../../components/ArtistCard'

const index = () => {
  return (
    <div>
        <Header />
        <EventsCarousel />
        <EventTitle />
        <ArtistCard />
    </div>
  )
}

export default index