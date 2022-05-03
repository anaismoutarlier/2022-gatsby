import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function Title() {
  const { site: { siteMetadata: { title } } } = useStaticQuery(graphql`
  query {
    site {
      id
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
  `)

  return (
    <h1>{ title }</h1>
  )
}
