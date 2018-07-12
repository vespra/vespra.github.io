//https://www.gatsbyjs.org

import React from "react"

export default ({ data }) => (
  <div style={{ margin: "3rem auto", maxWidth: 600 }}>
    <h1>Great Stuff Coming Soon!!!</h1>
    <p>
      You have stumbled across {data.site.siteMetadata.title}
      <br />
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
