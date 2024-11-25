import React from 'react'; // 6.9k (gzipped: 2.7k)
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offer from '../Components/Offers/Offer';
import NewCollection from '../Components/NewCollections/NewCollection';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};

export default Shop;