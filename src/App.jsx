import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import WelcomeSplash from "./components/splash/WelcomeSplash";
import Header from "./components/common/Header";

import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Services from "./components/home/Services";
import Projects from "./components/home/Projects";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Training from "./components/home/Training";
import Technologies from "./components/home/Technologies";
import Reviews from "./components/home/Reviews";
import Contact from "./components/home/Contact";
import Footer from "./components/common/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <WelcomeSplash
            key="welcome-splash"
            onComplete={() => setShowSplash(false)}
          />
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          <Header />

          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <WhyChooseUs />
            <Training />
            <Technologies />
            <Reviews />
            <Contact />
            <Footer />
            <WhatsAppButton />
          </main>
        </>
      )}
    </>
  );
}

export default App;