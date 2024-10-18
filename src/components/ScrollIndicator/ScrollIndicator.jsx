import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ScrollIndicator() {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollTop / docHeight;

      setScrollYProgress(scrollPercentage);
    };

    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <>
      <div>
        {/* Scroll Indicator Bar */}
        <motion.div
          className="fixed top-0 left-0 h-1 bg-red-500 z-50"
          style={{ width: `${scrollYProgress * 100}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollYProgress * 100}%` }}
          transition={{ ease: "easeOut", duration: 0.1 }}
        />
      </div>

      <div>
        {/* Scroll Indicator Bar */}
        <motion.div
          className="fixed right-0 top-0 h-full w-2 rounded-full bg-red-500 z-50"
          style={{ height: `${scrollYProgress * 100}%` }}
          initial={{ height: 0 }}
          animate={{ height: `${scrollYProgress * 100}%` }}
          transition={{ ease: "easeOut", duration: 0.1 }}
        />
      </div>
    </>
  );
}
