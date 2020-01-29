import React from "react"
import { css } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        totalCount
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            id
          }
        }
      }
    }
  `)

  return(
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >Blog Posts</h1>
        <h4>{data.allContentfulBlogPost.totalCount} Posts</h4>
        {data.allContentfulBlogPost.edges.map(( edge ) => {
          return (
            <div key={edge.node.id}>
              <Link
              to={edge.node.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {edge.node.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {edge.node.publishedDate}
                </span>
              </h3>
            </Link>
          </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogPage