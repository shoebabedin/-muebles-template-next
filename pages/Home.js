import React from "react";
import CategoriesHighlights from "../components/common/CategoriesHighlights";
import HomeHero from "../components/common/HomeHero";
import MegaSell from "../components/common/MegaSell";
import Option from "../components/common/Option";
import FlashSell from "../components/FlashSell/FlashSell";
import LatestArrival from "../components/LatestArrival/LatestArrival";
import ShopPopular from "../components/shopPopular/ShopPopular";
import data from "./../assets/Data/AllProduct.json";
import flashsell from "./../assets/Data/flashSell.json";

const Home = () => {
 

  
  
  return (
    <>
      {/* hero */}
      <HomeHero />
      {/* hero */}
      {/* shop by popular */}
      <ShopPopular data={data.slice(0,4)}/>
      {/* shop by popular */}
      {/* Categories Highlights */}
      <CategoriesHighlights />
      {/* Categories Highlights */}
      {/* flash sell */}
      <FlashSell  data={flashsell.slice(0,4)} />
      {/* flash sell */}
      {/* mega sell */}
      <MegaSell />
      {/* mega sell */}
      {/* Latest Arrivals */}
      <LatestArrival  classProps="flash_sell"  data={data.slice(0,4)}/>
      {/* Latest Arrivals */}
      {/* Option part */}
      <Option/>
      {/* Option part */}
    </>
  );
};

export default Home;
