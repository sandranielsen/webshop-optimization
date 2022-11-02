import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./header";
import { Link } from "gatsby";
import "./layout.css";

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <Footer>
          <Link>hello</Link>
          
        </Footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const Footer = styled.footer`
  background: linear-gradient(
    #e8b9a2 0%,
    rgba(250, 108, 34, 0.52) 0%,
    #f4bbf8 100%
  );
`;
