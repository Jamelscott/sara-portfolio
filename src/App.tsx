import { useEffect } from "react";
import Navigation from "./components/Navigation";
import SkipLink from "./components/SkipLink";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Set document title for accessibility
    document.title = "Sara - Bilingual LXD";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "design intuitive, engaging learning experiences across K-12, higher education, corporate, and public-sector projects -- in both English and French."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SkipLink />
      <Navigation />

      <main id="main-content" role="main">
        <Hero />
        <About />
        {/* <Projects /> */}
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
