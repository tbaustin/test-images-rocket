import React from "react"
import { graphql } from "gatsby"
import Layout from "components/layouts/index"
import Meta from "components/meta"

export default class NotFoundPage extends React.Component {
	render() {
		const { frontmatter, html } = this.props.data.markdownRemark
		return (
			<Layout>
				<Meta title={frontmatter.title} />
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</Layout>
		)
	}
}

export const query = graphql`
	query NotFoundPage {
		markdownRemark(fileAbsolutePath: { regex: "/src/markdown/404.md/" }) {
			html
			frontmatter {
				title
			}
		}
	}
`
