import * as React from "react"
import Header from "./header"
// import { useStaticQuery } from "gatsby"

// You can use https://github.com/dotansimha/graphql-code-generator
interface LayoutProps {
  children: React.ReactNode
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Layout = (props: LayoutProps) => (<div>
  <Header />
  {/*<Header title={props.data.site.siteMetadata.title} />*/}
  {props.children}
</div>)

export default Layout

// TODO: this doesn't work due an issues with useStaticQuery + typescript
// ref https://github.com/gatsbyjs/gatsby/issues/24673
/*export const query = useStaticQuery(
  graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
)*/

// this won't work because Layout it's not a page
/* export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`*/