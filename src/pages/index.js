import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout pageTitle="Home Page">
       <header>{data.site.siteMetadata.title}</header>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage