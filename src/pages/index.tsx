import * as React from "react"
import Layout from "../components/layout"

// You can use https://github.com/dotansimha/graphql-code-generator
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const IndexPage = (props: IndexPageProps) => (
  <Layout>
    {/* slideshow goes here */}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
