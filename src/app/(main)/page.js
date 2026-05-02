import Image from "next/image";
import Banner from "../../components/homepage/Banner";
import BookMarquee from "../../components/homepage/BookMarquee";
import FeaturedBooks from "../../components/homepage/FeaturedBooks";
import BestAuthor from "../../components/homepage/BestAuthor";
import BundleOffer from "../../components/homepage/BundleOffer";

export default function Home() {
  return (
    <div>
      <Banner />
      <BookMarquee />
      <FeaturedBooks />
      <BestAuthor />
      <BundleOffer />
    </div>
  );
}
