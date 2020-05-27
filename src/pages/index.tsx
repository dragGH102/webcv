import * as React from "react"

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

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }

  public render() {
    return (
      <div>
        <h1>Hi people</h1>
        <p>
          Welcome to your new{" "}
          <strong>{this.props.data.site.siteMetadata.title}</strong> site.
        </p>
        <p>Now go build something great.</p>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
