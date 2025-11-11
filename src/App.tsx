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
    document.title = "Sara - Frontend Developer & Designer";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Sara is a passionate frontend developer and designer creating beautiful, accessible, and performant web experiences."
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
