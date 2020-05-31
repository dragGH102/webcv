import * as React from "react"
import Header from "./header"

const Layout = (props) => (<div>
  <Header />
  <strong>{props.data.site.siteMetadata.title}</strong>
</div>)

export default Layout