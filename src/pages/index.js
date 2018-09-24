import React from "react"
import { css } from "emotion"
import { graphql } from "gatsby"

import Layout from "../components/layouts/index"
import Product from "../components/product-small"

export default class IndexPage extends React.Component {
	render() {
		const { productMarkdown } = this.props.data
		const products = productMarkdown.edges.map(edge => edge.node.frontmatter)
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
			filter: { fileAbsolutePath: { regex: "/markdown/products/" } }
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
						images {
							src
						}
					}
				}
			}
		}
	}
`

const styles = css`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	& :before,
	:after {
		content: "";
		clear: both;
		display: table;
	}
	margin-top: 40px;
`
