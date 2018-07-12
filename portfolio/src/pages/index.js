//https://www.gatsbyjs.org

import React from "react"

import CountdownTimer from "../components/countdown-timer.js"
import CountdownTimerSmall from "../components/countdown-timer-small.js"

export default ({ data }) => (
  <div style={{ margin: "3rem auto", maxWidth: 600, display: "flex", flexDirection:"column", alignItems:"center", textAlign: "center" }}>
    <h1>Great Stuff Coming Soon!!!</h1>
    <p>
      You have stumbled across {data.site.siteMetadata.title}
      <br />
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>

    <CountdownTimer date='12-12-2019'></CountdownTimer>
    <CountdownTimerSmall date='08-15-2018'></CountdownTimerSmall>
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
