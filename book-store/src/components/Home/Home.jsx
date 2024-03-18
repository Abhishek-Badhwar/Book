import React from 'react'
import Banner from '../Banner/Banner';
import BestSellerBooks from './BestSellerBooks';
import FavBooks from './FavBooks';
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Reviews from './Reviews';
import MyFooter from '../Footer/MyFooter';


const Home = () => {
  return (

    <>
      <Banner />
      <BestSellerBooks />
      <FavBooks />
      <PromoBanner />
      <OtherBooks />
      <Reviews />

    </>

  )
}

export default Home; 