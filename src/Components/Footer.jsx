import React from "react";
import PropTypes from "prop-types";

import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";

const Footer = (props) => {
  const { email, gitHub, linkedIn, primaryColor,hackerRank, name } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        {email && (
          <a href={`mailto:${email}`}>
            <img
              src={envelopeIcon}
              alt="email"
              className="socialIcon"
              style={{
                width: "30px",
                height: "auto",
              }}
            />
          </a>
        )}
        {gitHub && (
          <a
            href={`https://github.com/${gitHub}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gitHubIcon}
              alt="GitHub"
              className="socialIcon"
              style={{
                width: "30px",
                height: "auto",
              }}
            />
          </a>
        )}
        {linkedIn && (
          <a
            href= {`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedInIcon}
              alt="LinkedIn"
              className="socialIcon"
              style={{
                width: "30px",
                height: "auto",
              }}
            />
          </a>
        )}
        {hackerRank && (
          <a
            href= {`https://www.hackerrank.com/profile/${hackerRank}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              // src={}
              alt="hackerRank profile"
              className="socialIcon"
              style={{
                width: "30px",
                height: "auto",
              }}
            />
          </a>
        )}
      </div>
      <p
        className="small"
        style={{
          marginTop: 0,
          color: "white",
          textAlign: "center",
        }}
      >
        Created by {name}
      </p>
      <style>
        {`
          @media (max-width: 768px) {
            #footer {
              padding: 3rem 0 2rem;
            }
            .socialIcon {
              width: 25px;
            }
          }
          @media (max-width: 480px) {
            #footer {
              padding: 2rem 0 1rem;
            }
            .socialIcon {
              width: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  email: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
};

export default Footer;
