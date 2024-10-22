import React, { useState, useEffect } from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

// Updated project/work experience details
const projectList = [
  {
    title: "Check my LinkedIn profile",
    description:"You can checkout skills and experience etc.",
    url: "https://www.linkedin.com/in/vaibhav-vats-",
  },
  {
    title: "Check My Google For Developer Profile",
    description:
      "Developed and maintained responsive web applications using the MERN stack. Implemented design principles to ensure accessibility across various devices.",
    url: "https://g.dev/vaibhavvats",
  },
  {
    title: "Web Development Job Simulation",
    description: "Planning the Website, Creating a Form",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Moreton%20Bay%20Regional%20Council/7q8DN5enMzSHqLwev_Moreton%20Bay%20Regional%20Council_ri8CK7waojBBKMjzq_1709180758211_completion_certificate.pdf",
  },
  {
    title: "Introduction to Software Engineering Job Simulation",
    description: "Create a Website, Financial Cybersecurity, Write a Web Hosting Proposal.",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Commonwealth%20Bank/wJMjCSKFhuj97x6F3_Commonwealth%20Bank_ri8CK7waojBBKMjzq_1716889207606_completion_certificate.pdf",
  },
];

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Listen for window resize to adjust the layout dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="portfolio" style={{ padding: isMobile ? "5px" : "20px" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem" }}>Portfolio</h2>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Adjust layout for mobile/desktop
          justifyContent: "space-between",
          alignItems: isMobile ? "center" : "flex-start",
          paddingTop: "3rem",
          paddingRight: isMobile ? "15px" : "20px", // Add right padding for mobile
          paddingLeft: isMobile ? "15px" : "0", // Add left padding for mobile
        }}
      >
        {/* Image section */}
        <div
          style={{
            maxWidth: isMobile ? "100%" : "40%", // Full width on mobile, 40% on desktop
            marginBottom: isMobile ? "20px" : "0", // Add margin for mobile layout
            alignSelf: "center",
          }}
        >
          <img
            src={image}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "8px",
            }}
            alt={imageAltText}
          />
        </div>

        {/* Projects section */}
        <div
          style={{
            maxWidth: isMobile ? "100%" : "55%", // Full width on mobile, 55% on desktop
            marginRight: isMobile ? "10px" : "20px", // Add margin for small devices
            paddingRight: isMobile ? "10px" : "20px", // Add padding for small devices
            paddingLeft: isMobile ? "10px" : "0", // Add padding on the left for mobile
          }}
        >
          {projectList.map((project) => (
            <div
              key={project.title}
              style={{
                marginBottom: "2rem",
                padding: "1rem",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
              }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#0070f3" }}
              >
                <h3 style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>
                  {project.title}
                </h3>
              </a>
              <p style={{ margin: "0.5rem 0", fontSize: "1rem" }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
