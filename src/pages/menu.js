import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import img from '../images/bcg/menuBcg.jpeg'
import { PageHeader, Banner } from '../utils'


const MenuPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<PageHeader img={img}>
			<Banner title='menu' subtitle={`let's dig in`} />
		</PageHeader>

	</Layout>
)

export default MenuPage;
