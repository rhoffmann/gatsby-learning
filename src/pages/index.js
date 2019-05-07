import React from "react"
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';

import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <title>{ data.site.siteMetadata.title }</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div>
       <h1>Amazing Pandas Eating Things</h1>
       <h4>{ data.allMarkdownRemark.totalCount } Posts</h4>
        { data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} css={css`
              text-decoration: none;
              color: inherit;
            `}>
              <h3 css={css`
                margin-bottom: ${rhythm(1/4)};
              `}
              >
                { node.frontmatter.title}{" "}
                <span css={css`
                  color: #666;
                `}>
                  - {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM.DD.YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;