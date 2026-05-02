import Image from "next/image";
import Banner from "../../components/homepage/Banner";
import BookMarquee from "../../components/homepage/BookMarquee";
import FeaturedBooks from "../../components/homepage/FeaturedBooks";
import BestAuthor from "../../components/homepage/BestAuthor";
import Services from "../../components/homepage/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <BookMarquee />
      <FeaturedBooks />
      <BestAuthor />
      <Services />
    </div>
  );
}
