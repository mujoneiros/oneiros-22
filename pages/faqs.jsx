import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import FAQsDropDown from '../components/FAQsDropDown';

export default function Faqs() {
  return <div>
    <Header /><br /><br />
    <Image
      src="/introImage.png"
      width={1920}
      height={314}
    />
    <div style={{"margin": "3% 20%"}}>
    <h2 style={{"font-size": "3rem", "color": "#3EDCF2"}}>FAQs</h2>
    <div>
      <FAQsDropDown />
    </div>
    </div>
  </div>;
}
