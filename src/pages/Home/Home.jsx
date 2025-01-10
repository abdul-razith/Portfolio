import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Hero } from '../../components/Hero/Hero';
import { About } from '../../components/About/About';
import { Projects } from '../../components/Projects/Projects';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';
import { ScrollIndicator } from '../../components/ScrollIndicator/ScrollIndicator';
import { Skills } from '../../components/Skills/Skills';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Abdul Razith - Frontend Developer Portfolio</title>
        <meta name="description" content="Abdul Razith's personal portfolio showcasing projects, skills, and contact information." />
        <meta name="keywords" content="Abdul Razith, frontend developer, portfolio, React developer, web developer" />
        <meta name="author" content="Abdul Razith" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Abdul Razith - Frontend Developer Portfolio" />
        <meta property="og:description" content="Explore Abdul Razith's portfolio, projects, and skills." />
        <meta property="og:image" content="https://abdul-razith.web.app/pic2.jpg" />
        <meta property="og:url" content="https://abdul-razith.web.app" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abdul Razith - Frontend Developer Portfolio" />
        <meta name="twitter:description" content="Explore Abdul Razith's portfolio, projects, and skills." />
        <meta name="twitter:image" content="https://abdul-razith.web.app/pic2.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://abdul-razith.web.app" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abdul Razith",
            "jobTitle": "Frontend Developer",
            "url": "https://abdul-razith.web.app",
            "description": "Abdul Razith's personal portfolio showcasing projects, skills, and contact information.",
            "image": "https://abdul-razith.web.app/pic2.jpg",
            "sameAs": [
              "https://www.linkedin.com/in/abdul-razith/",
              "https://github.com/abdul-razith"
            ]
          })}
        </script>
      </Helmet>

      {/* Components */}
      <ScrollIndicator />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
