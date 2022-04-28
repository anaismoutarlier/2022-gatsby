import * as React from "react"
import { Link, graphql } from "gatsby"

import Title from "../components/Title"

// markup
const IndexPage = ({ data: { allMdx: { edges: posts } } }) => {
  console.log(posts)
  return (
    <div>
      Home
      <Title />
      <Link to="/about">About</Link>
      <ul>
        {
          posts.map(({ node }) => <Link to={ node.slug}><li>{ node.frontmatter.title } - { node.frontmatter.date }</li></Link>)
        }
      </ul>
    </div>
  )
}

export const query = graphql`
query {
  allMdx(sort: { fields: frontmatter___date, order: ASC }) {
    edges {
      node {
        id
        frontmatter {
          date(formatString: "D MMMM YYYY")
          title
        }
        slug
      }
    }
  }
}`

export default IndexPage
