import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExploreLessonsSection from "./components/ExploreLessonsSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExploreLessonsSection />
      <Footer />
    </main>
  );
}
