import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
    <main>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage