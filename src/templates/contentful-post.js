import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug } ) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
    }
  }
`

const ContentfulPost = (props) => {
  console.log(props);
  return (
    <Layout>
      <SEO title={props.data.ContentfulBlogPost.title} />
      <h1>{props.data.ContentfulBlogPost.title}</h1>
    </Layout>
  )
}

export default ContentfulPost