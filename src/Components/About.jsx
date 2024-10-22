import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a 'Full stack web developer' recently graduated from CBS Group of Institutions. I've 6 months of experience in the field of web development as a full stack developer intern in UptoSkills, Innobyte Services, and CodTech IT Solutions.";

const skillsList = [
  "Frontend Development",
  "Backend Development",
  "SEO",
  "Full Stack Development",
  "Software Development",
];

const detailOrQuote =
  "I am passionate about web development and enjoy creating websites. By leveraging my software development experience, I continually look for new and better ways to make tech accessible to all.";

const About = () => {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "4px", // Added padding of 4px to the parent
      }}
      id="about"
    >
      <img
        className="background"
        src={image}
        alt={imageAltText}
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          opacity: 0.8,
        }}
      />
      <div
        style={{
          backgroundColor: "white",
          width: "90%",
          maxWidth: "600px",
          padding: "2rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ fontSize: "1.5rem" }}>About Myself</h2>
        <p className="large" style={{ fontSize: "1rem" }}>{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1rem",
            margin: "2rem 0",
            padding: 0,
            listStyle: "none",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill} style={{padding: "5px", marginBottom: "0.5rem" }}>
              {skill}
            </li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 0 0", fontSize: "1rem" }}>{detailOrQuote}</p>
      </div>
      <style>
        {`
          @media (max-width: 480px) {
            div {
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;
