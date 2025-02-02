// Step 1: Import React
import * as React from 'react'
//adding link
import { Link } from 'gatsby'
//import layout
import Layout from '../components/layout'
//adding a static image
import { StaticImage } from 'gatsby-plugin-image'



// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <main>
      <h1>Welcome to Ricky's Gatsby site!</h1>
      <Link to ="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="pink porsch 911 t, from lex cars and coffee"
        src="../images/pink911t.jpg"
      />
    </main>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage