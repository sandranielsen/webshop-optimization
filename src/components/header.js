import * as React from "react";
import styled from "styled-components";

import Cart from "../images/cart.svg";
import Search from "../images/search.svg";
import Logo from "../images/logo-white.png";
import LogoColor from "../images/logo-color.png";

import PropTypes from "prop-types";
import { Link } from "gatsby";
import { useState } from "react";


const Header = ({ siteTitle }) => {

  /* transparent header functionality */
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (

    <HeaderWrapper className={navbar ? 'navbar active' : 'navbar'}>
      <LinksWrapper>
        <Link to="/products">Opskrifter</Link>
        <Link to="/guides">Guides</Link>
        <Link to="/about">Om</Link>
      </LinksWrapper>

      <Link to="/" className="site-title">
        <img src={Logo} alt={siteTitle} className="header-logo" id="logo-primary" />
        <img src={LogoColor} alt={siteTitle} className="header-logo" id="logo-secondary" />
      </Link>

      <IconsWrapper>
        <Link to="/search">
          <img src={Search} alt="Search" className="header-icon" />
        </Link>
        <Link to="/cart">
          <img src={Cart} alt="Cart" className="header-icon" />
        </Link>
      </IconsWrapper>
    </HeaderWrapper>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

/* Styling - styled-components */
const HeaderWrapper = styled.header`
  padding: 1rem 4rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
  position: fixed;
  z-index: 4;

  .site-title {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    font-size: 12px;
    font-weight: normal;
    font-family: Helvetica Neue;
    :hover {
      transform: scale(1.07);
    }
  }
`;
const LinksWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin: auto 0;
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: right;
  margin: auto 0;
`;

