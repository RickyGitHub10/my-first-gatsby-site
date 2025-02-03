// Step 1: Import React
import * as React from 'react'
//adding link
import { Link } from 'gatsby'
//import layout
import Layout from '../components/layout'
//adding a STATIC image
import { StaticImage } from 'gatsby-plugin-image'
//adding seo 
import Seo from '../components/seo'



// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <main>
      <h1>Welcome to Ricky's Gatsby site!</h1>
      <Link to ="/about">About</Link>
      
      <StaticImage
        alt="pink porsch 911 t, from lex cars and coffee"
        src="../images/pink911t.jpg"
      />
      
    </main>
    </Layout>
  )
}

// Brower tab name, hover mouse over tab
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage