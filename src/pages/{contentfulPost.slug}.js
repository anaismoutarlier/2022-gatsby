import React from 'react'
import { graphql } from "gatsby"

//MDX______________________________
import { MDXRenderer } from "gatsby-plugin-mdx"

function Post({ data: { contentfulPost: { content: { childMdx: { body } }, title, creationDate } } }) {
    return(
        <div>
            { title }
            { creationDate }
            <MDXRenderer>{ body }</MDXRenderer>
        </div>
    )
}

export const query = graphql`
    query($id: String) {
        contentfulPost(id: { eq: $id }) {
            id
            title
            creationDate
            content {
                childMdx {
                    body
                }
            }
        }
    }
`
export default Post