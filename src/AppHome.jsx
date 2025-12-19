import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import PopularMovies from "./components/PopularMovies";
import PopularSeries from "./components/PopularSeries";
import Favorite from "./components/Favorite";

export default function AppHome() {
  return (
    <main className="app">
      <Hero />
      <Stats />
      <Features />
      <PopularMovies />
      <PopularSeries />
      <Favorite />
    </main>
  );
}