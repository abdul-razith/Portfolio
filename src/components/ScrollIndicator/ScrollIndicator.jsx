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
        <motion.div
          className="fixed top-0 left-0 h-1 bg-colorSocialBg z-50"
          style={{ width: `${scrollYProgress * 100}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollYProgress * 100}%` }}
          transition={{ ease: "easeOut", duration: 0.1 }}
        />
      </div>
    </>
  );
}
