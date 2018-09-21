import React from "react"
import { css } from "emotion"
import { graphql } from "gatsby"

import Layout from "../components/layouts/default"
import Product from "../components/product-small"

export default class IndexPage extends React.Component {
	render() {
		const { productMarkdown } = this.props.data
		const products = productMarkdown.edges.map(edge => edge.node)
		console.log(products[0].main)
		return (
			<Layout home={true}>
				<div className={styles}>
					{products.map((product, i) => (
						<Product data={product} key={i} />
					))}
				</div>
			</Layout>
		)
	}
}

export const query = graphql`
	query indexPage {
		productMarkdown: allMarkdownRemark(
			filter: {
				fileAbsolutePath: { regex: "/markdown/products/" }
				frontmatter: { active: { ne: false } }
			}
		) {
			edges {
				node {
					html
					frontmatter {
						title
						id
						category
						cut
						grain
						qty
						order
						header
						main {
							childImageSharp {
								sizes(maxWidth: 1600, quality: 100) {
									...GatsbyImageSharpSizes
								}
							}
						}
					}
				}
			}
		}
	}
`

const styles = css`
	& :before,
	:after {
		content: "";
		clear: both;
		display: table;
	}
	margin-top: 40px;
`
