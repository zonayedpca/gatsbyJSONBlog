import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data: { allDataJson: { edges } } }) => (
  <Layout>
    <SEO log={console.log(edges)} title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>JSON Files</h1>
    <p>This is the list of JSON files in our directory. These data has been taken from <a href="http://devsonket.com">Devsonket</a></p>
    <ul>
      { edges.map(edge => (
        <li><Link to={`/${edge.node.id}`}>{edge.node.title}</Link></li>
      )) }
    </ul>
  </Layout>
)

export const allDataQuery = graphql`
  query queryTitle {
    allDataJson {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

export default IndexPage
