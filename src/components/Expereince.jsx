import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

const experiences = [
  {
    role: "Engineer Sys",
    company: "Wind River",
    period: "Sep 2025 ",
    logo: "/public/windriver.png",
    description:
      "Working as an Engineer-Sys at Wind River, focusing on DevOps automation, DocOps workflows, and tooling using Python, Docker, Kubernetes, Sphinx, and GitLab."
  },
  {
    role: "Consultant(Python & Devops)",
    company: "Quest Global",
    period: "Oct 2023 – Feb 2025",
    logo: "/public/Quest-logo.png", // Add your logo path here
    description:
      "Building scalable and intelligent systems for the TELEVIC-FIM (Fleet Information Management – Rail Domain) project, specializing in CI/CD pipelines, containerized microservices, cloud infrastructure, secure data operations, and automation excellence."
  },
  {
    role: "Associate Engineer",
    company: "Avin Systems",
    period: "Dec 2021 – Feb 2023",
    logo: "/public/Avin-logo.png",
    description:
      "Developed innovative machine learning and deep learning solutions at Avin Systems, including real-time Traffic Light Recognition and Face Recognition projects, leveraging Python, OpenCV, CNN, and AI frameworks, while also implementing Docker- and Jenkins-based CI/CD workflows with Kubernetes for seamless deployment and integration."
  },
  {
    role: "Python Intern",
    company: "Accurate Info Solutions",
    period: "Jan 2021 – Jul 2021",
    logo: "/public/Accurate-logo.png",
    description:
      "Developed and delivered full-stack web applications during my internship, building robust Python backend systems with Django/Flask, integrating databases and REST APIs, while designing responsive, user-friendly interfaces using HTML, CSS, and JavaScript to create seamless and visually engaging user experiences."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black text-neutral-200">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="grid gap-12 md:grid-cols-3 px-8">
        {experiences.map((exp, i) => (
          <CardContainer key={i} className="w-full" containerClassName="flex justify-center">
            <CardBody className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow-lg">
              
              {/* Company Logo */}
              <CardItem translateZ={50} className="mb-4">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-16 h-16 object-contain rounded-lg"
                />
              </CardItem>

              {/* Role */}
              <CardItem
                translateZ={40}
                className="text-2xl font-semibold text-white mb-2"
              >
                {exp.role}
              </CardItem>

              {/* Company + Period */}
              <CardItem
                translateZ={30}
                className="text-neutral-400 mb-4"
              >
                {exp.company} — {exp.period}
              </CardItem>

              {/* Description */}
              <CardItem
                translateZ={20}
                className="text-neutral-300 text-sm leading-relaxed"
              >
                {exp.description}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
