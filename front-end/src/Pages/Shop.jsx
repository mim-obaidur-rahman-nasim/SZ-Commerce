import React from 'react'; // 6.9k (gzipped: 2.7k)
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offer from '../Components/Offers/Offer';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
    </div>
  );
};

export default Shop;