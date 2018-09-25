import React, { Component } from "react"
import { css } from "emotion"
import { graphql } from "gatsby"

import Layout from "components/layouts/index"

export default class Privacy extends Component {
	render() {
		const { markdownRemark, nature, yellowNature } = this.props.data
		const { html, frontmatter } = markdownRemark
		const { title } = frontmatter
		return (
			<Layout default nature={nature} yellowNature={yellowNature}>
				<div className={styles.cont}>
					<h1>{title}</h1>
					<div
						className={styles.innerHtml}
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</div>
			</Layout>
		)
	}
}

const styles = {
	cont: css`
		max-width: 1200px;
		margin: 0 auto;
		background: #fff;
		padding: 30px;
	`,
	innerHtml: css`
		font-family: "Gill Sans";
		& h1,
		h2 {
			font-family: "Cybertron";
		}
	`,
}

export const query = graphql`
	query privacyPage {
		...layoutFragment
		markdownRemark(
			fileAbsolutePath: { regex: "/src/markdown/pages/privacy-policy.md/" }
		) {
			html
			frontmatter {
				title
			}
		}
	}
`
