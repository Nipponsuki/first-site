import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import img from '../images/bcg/contactBcg.jpeg'
import { PageHeader, Banner } from '../utils'

const ContactPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<PageHeader img={img}>
			<Banner title='contact us' subtitle='we are open to suggestions' />
		</PageHeader>
	</Layout>
)

export default ContactPage;
