import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import HeaderAlt from "./HeaderAlt";
import Footer from "./Footer";

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
        <Footer />
      </div>
    </>
  );
};

LayoutAlt.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutAlt;

