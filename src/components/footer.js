import React from "react";
import PropTypes from "prop-types";

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <p className="footerCopyrights">
          © 1990-{new Date().getFullYear()}{" "}
          <a href="https://diego.earth">Diego Peralta</a>
        </p>
        <p className="footerCopyrights">
          Powered <a href="https://gatsbyjs.org/">Gatsby</a>, based on the{" "}
          <a href="https://github.com/panr/gatsby-starter-hello-friend">
            Hello Friend Theme
          </a>
          , and hosted on <a href="https://vercel.com/">Vercel</a>.
        </p>
      </>
    )}
  </footer>
);

Footer.propTypes = {
  copyrights: PropTypes.string,
};

export default Footer;
