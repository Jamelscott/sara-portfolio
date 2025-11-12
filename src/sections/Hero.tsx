import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center"
      style={{ backgroundColor: "#F0EBDF" }}
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Container - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-2 text-grey-600"
            >
              <MapPin size={18} className="text-grey-600" />
              <span className="text-sm sm:text-base">Ontario, Canada</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Hello, I'm Sara Prattis.
            </h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              Bilingual Learning Experience Designer (LXD) Curriculum &
              Assessment Specialist
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              I design intuitive, engaging learning experiences across K-12,
              higher education, corporate, and public-sector projects -- in both
              English and French.
            </motion.p>
          </motion.div>

          {/* Right Container - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-linear-to-br from-blue-100 to-purple-100"
              role="img"
              aria-label="Profile image placeholder"
            />
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-400 hover:text-blue-600 transition-colors focus-outline cursor-pointer"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
