import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ExploreOptions from "../components/ExploreOptions";
import FeaturedDestinations from "../components/FeaturedDestinations";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedDestinations />
      <ExploreOptions />
    </div>
  );
}
