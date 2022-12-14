import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import FAQsDropDown from '../components/FAQsDropDown';
import Head from 'next/head';

export default function Faqs() {
  return (
    <div style={{ backgroundColor: 'rgb(4,7,19)' }}>
      <Head>
        <title>FAQs</title>
      </Head>
      <Header />
      <br />
      <br />
      <Image src="/introImage.png" width={1920} height={314} alt="introImage" />
      <div
        style={{
          padding: '3% 20%',
          backgroundColor: 'rgb(4,7,19)',
          'box-shadow': '0px -5px 100px rgb(4,7,19)',
        }}
      >
        <h2
          style={{
            'font-size': '3rem',
            color: '#3EDCF2',
            'padding-bottom': '20px',
          }}
          className="text-xl sm:text-base"
        >
          FAQs
        </h2>

        <div
          style={{
            backgroundColor: 'rgb(4,7,19)',
            'box-shadow': '0px -5px 100px rgb(4,7,19)',
          }}
        >
          <FAQsDropDown />
        </div>
      </div>
    </div>
  );
}
