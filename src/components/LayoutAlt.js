import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import HeaderAlt from "./HeaderAlt";
import { Link } from "gatsby";
import "../styles/global.css";

const LayoutAlt = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <HeaderAlt siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer className="footer-container">
          <Link>hello</Link>
        </footer>
      </div>
    </>
  );
};

LayoutAlt.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutAlt;

