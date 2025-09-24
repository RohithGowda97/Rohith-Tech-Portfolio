import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Expereince';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import EnterScreen from './components/EnterScreen';
import Footer from './components/Footer';
import Skills from './components/Skills';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Helmet } from "@dr.pogodin/react-helmet";


function App() {
  const [started, setStarted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

useEffect(() => {
  const isBot = /bot|crawl|spider|slurp|bing/i.test(navigator.userAgent);
  const isHome = window.location.pathname === '/';
  const alreadyVisited = sessionStorage.getItem('alreadyVisited');

  if (isBot) {
    setStarted(true);
  } else if (isHome && !alreadyVisited) {
    setStarted(false);
  } else {
    setStarted(true);
  }
  setInitialCheckDone(true);
}, []);

  const handleStart = () => {
    sessionStorage.setItem('alreadyVisited', 'true');
    setStarted(true);
    setShowLoader(true);
  };

  if (!initialCheckDone) return null;

  return (
    <>
      {/* Global SEO Metadata */}
      <Helmet>
        <title>Rohith R | Full Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Official portfolio of Rohith R, a full stack developer skilled in React, Node.js, and passionate about AI/ML. Explore projects, skills, and experience." />
        <link rel="canonical" href="https://Rohith-Tech-Portfolio/" />

        <meta property="og:title" content="Rohith R | Full Stack Developer" />
        <meta property="og:description" content="Official portfolio of Rohith R, a full stack developer skilled in React, Node.js, and passionate about AI/ML." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Rohith-Tech-Portfolio/" />
        <meta property="og:image" content="https://Rohith-Tech-Portfolio/logo.png" />
        <meta property="og:site_name" content="Rohith R's Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@IAMROHITHR" />
        <meta name="twitter:title" content="Rohith R | Full Stack Developer" />
        <meta name="twitter:description" content="Official portfolio of Rohith R, a full stack developer skilled in React, Node.js, and passionate about AI/ML." />
        <meta name="twitter:image" content="https://Rohith-Tech-Portfolio/logo.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rohith R",
              "url": "https://Rohith-Tech-Portfolio/",
              "sameAs": [
                "https://github.com/RohithGowda97",
                "https://www.instagram.com/rohithgowda333/",
                "https://www.linkedin.com/in/rohith-gowda-python-developer/",
                "https://leetcode.com/u/",
                "https://codeforces.com/profile/"
              ],
              "jobTitle": "Freelancer",
              "worksFor": {
                "@type": "Organization",
                "name": "Self-Employed"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Newton School of Technology"
              },
              "image": "https://Rohith-Tech-Portfolio/profile_pic.png",
              "description": "Rohith R is a passionate full-stack developer specializing in React and modern web technologies, with expertise in AI and machine learning, based in Rajamahendravaram, Andhra Pradesh, India."
            }
          `}
        </script>
      </Helmet>

      {/* UI Flow */}
      {!started ? (
        <EnterScreen onEnter={handleStart} />
      ) : showLoader ? (
        <Loader onComplete={() => setShowLoader(false)} />
      ) : (
        <Router>
          <div className="bg-white dark:bg-black">
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
            <Footer />
            <SpeedInsights />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
