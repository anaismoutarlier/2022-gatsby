import React from 'react'
import { graphql } from "gatsby"

//MDX______________________________
import { MDXRenderer } from "gatsby-plugin-mdx"

function Post({ data: { mdx: { frontmatter: { title, date }, body } } }) {
    return(
        <div>
            { title }
            <MDXRenderer>{ body }</MDXRenderer>
        </div>
    )
}

export const query = graphql`
    query($id: String) {
        mdx(id: { eq: $id }) {
            id
            slug
            body
            frontmatter {
                date
                title
            }
        }
    }
`
export default Post