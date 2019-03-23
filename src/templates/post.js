import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data: { dataJson } }) => {
  return (
    <Layout>
      <SEO log={console.log(dataJson)} title="Post" keywords={[`gatsby`, `application`, `react`, `json-blog`]} />
      { dataJson ?
        <div>
          <h2>{dataJson.title}</h2>
          <p>{dataJson.description}</p>
          <ul>
            {dataJson.contents.map(content => (
              <li>
                <h4>{content.title}</h4>
                <ul>
                  {content.items.map(item => (
                    <li>
                      <p>{item.definition}</p>
                      <p><code>{item.code}</code></p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div> :
        <div>
          <p>Something went wrong!</p>
        </div> }
    </Layout>
  )
}

export const postQuery = graphql`
  query postQuery($id: String!) {
    dataJson(id: { eq: $id }) {
      id
      title
      description
      contents {
        title
        items {
          definition
          code
        }
      }
    }
  }
`

export default Post;
