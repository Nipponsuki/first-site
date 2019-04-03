import React from "react"
//import { Link } from "gatsby"
import { HomeHeader, Banner, BannerButton } from '../utils';
import QuickInfo from '../components/homepage/QuickInfo';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from '../components/homepage/Gallery1';
import img from '../images/bcg/homeBcg.jpeg';
import Menu from '../components/homepage/Menu';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 main street - Santa Monica, CA">
        <BannerButton style={{ margin: '2rem auto' }}>
          menu
        </BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage
