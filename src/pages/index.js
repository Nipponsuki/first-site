import React from "react"
//import { Link } from "gatsby"
import { FaBeer } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <FaBeer />
  </Layout>
)

export default IndexPage
