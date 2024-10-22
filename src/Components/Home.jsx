import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/v2.png";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  const sectionStyle = {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  };

  const backgroundStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  };

  const textContainerStyle = {
    position: 'relative',
    zIndex: 2,
    marginLeft: '2rem',
  };

  const h1Style = {
    fontSize: '2.5rem',
    color: 'white',
  };

  const h2Style = {
    fontSize: '1.5rem',
    color: 'white',
  };

  const arrowContainerStyle = {
    position: 'relative',
    zIndex: 2,
    marginTop: '2rem',
  };

  const arrowStyle = {
    height: '3rem',
    width: '3rem',
  };

  // Responsive styles
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  if (mediaQuery.matches) {
    textContainerStyle.marginLeft = '1rem';
    h1Style.fontSize = '2rem';
    h2Style.fontSize = '1.25rem';
    arrowStyle.height = '2.5rem';
    arrowStyle.width = '2.5rem';
  }

  const mediaQuerySmall = window.matchMedia('(max-width: 480px)');
  if (mediaQuerySmall.matches) {
    textContainerStyle.marginLeft = '0.5rem';
    h1Style.fontSize = '1.5rem';
    h2Style.fontSize = '1rem';
    arrowStyle.height = '2rem';
    arrowStyle.width = '2rem';
  }

  return (
    <section id="home" style={sectionStyle}>
      <img style={backgroundStyle} src={image} alt={imageAltText} />
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
