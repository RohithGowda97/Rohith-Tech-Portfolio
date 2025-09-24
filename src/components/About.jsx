import React from 'react';
import { cn } from "../lib/utils";
import BlurImage from './utils/BlurImage';
import { Helmet } from '@dr.pogodin/react-helmet';

const About = () => {
  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4">
      <Helmet>
        <title>About Rohith R | Full Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Learn more about Rohith R, a passionate full-stack developer with expertise in React, Node.js, AI/ML, UI/UX design, and entrepreneurial ventures. Discover my journey and goals." />
        <link rel="canonical" href="https://Rohith-Tech-Portfolio/about" />
        <meta property="og:title" content="Rohith R | Full Stack Developer" />
        <meta property="og:description" content="Get to know Rohith R's background, skills, projects, and entrepreneurial aspirations in full-stack development and AI/ML." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://Rohith-Tech-Portfolio/about" />
        <meta property="og:image" content="https://Rohith-Tech-Portfolio/logo.png" />
        <meta property="og:site_name" content="Rohith R's Tech Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@IAMROHITHR" />
        <meta name="twitter:title" content="About Rohith R | Full Stack Developer" />
        <meta name="twitter:description" content="Discover Rohith R's passion for coding, full-stack development, AI, and building impactful digital solutions." />
        <meta name="twitter:image" content="https://Rohith-Tech-Portfolio/logo.png" />
      </Helmet>
      
      {/* Background pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Faded radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-neutral-800">
        <BlurImage
          src="/logo.png"
          blurhash="LAB._mEN5SkC-TNdofWX0hay}=WC"
          alt="Profile"
          className="w-full h-full"
        />
        </div>

        {/* Text Content */}
        <div className="text-left text-neutral-300 max-w-2xl ml-8 md:ml-16">
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
            About Me.
          </h1>
          <p className="text-lg leading-relaxed mb-4">
              I’m Rohith R, a passionate developer with expertise in <strong> Python, DevOps, and Cloud Engineering </strong>. I love building impactful digital solutions, from <strong>backend APIs and automation tools</strong> 
    to <strong> machine learning applications </strong> and scalable system architectures.
          </p>
          <p className="text-lg leading-relaxed mb-4">
              My journey combines <strong> full-stack development </strong>, <strong> CI/CD automation </strong>, 
    and <strong>containerization with Docker & Kubernetes</strong>, along with explorations in <strong> AI and automation </strong>. I enjoy solving complex problems with clean, efficient code.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Curious and creative by nature, I’m always learning new technologies, experimenting with innovative ideas, and striving to make meaningful contributions through technology.
          </p>
          <p className="text-lg leading-relaxed">
            My goal is to work on challenging projects, learn from experienced mentors, and make meaningful contributions to the tech community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;