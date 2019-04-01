/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import "./layout.css"
import { createGlobalStyle } from 'styled-components';
import Navbar from './globals/navbar'
import Footer from './globals/Footer'


const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body{
    font-family: 'Open Sans', sans-serif;
    color: #262626;
    background: white;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
