import CategoriesHighlights from "@/components/common/CategoriesHighlights";
import HomeHero from "@/components/common/HomeHero";
import MegaSell from "@/components/common/MegaSell";
import Option from "@/components/common/Option";
import FlashSell from "@/components/FlashSell/FlashSell";
import LatestArrival from "@/components/LatestArrival/LatestArrival";
import ShopPopular from "@/components/shopPopular/ShopPopular";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/assets/Data/AllProduct.json")
      .then((res) => res.json())
      .then((differnet) => setData(differnet));
  }, []);
  return (
    <>
      {/* hero */}
      <HomeHero />
      {/* hero */}
      {/* shop by popular */}
      <ShopPopular data={data.length > 0 && data.slice(0, 4)} />
      {/* shop by popular */}
      {/* Categories Highlights */}
      <CategoriesHighlights />
      {/* Categories Highlights */}
      {/* flash sell */}
      <FlashSell data={data.length > 0 && data.slice(0, 4)} />
      {/* flash sell */}
      {/* mega sell */}
      <MegaSell />
      {/* mega sell */}
      {/* Latest Arrivals */}
      <LatestArrival
        classProps="flash_sell"
        data={data.length > 0 && data.slice(0, 4)}
      />
      {/* Latest Arrivals */}
      {/* Option part */}
      <Option />
      {/* Option part */}
    </>
  );
}
