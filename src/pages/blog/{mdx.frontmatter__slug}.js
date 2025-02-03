import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from 'C:/Users/ricky/my-first-gatsby-site/src/components/layout.js'
import Seo from 'C:/Users/ricky/my-first-gatsby-site/src/components/seo.js'

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image 
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost