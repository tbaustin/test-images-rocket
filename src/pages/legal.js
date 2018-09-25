import React from "react"
import { css } from "emotion"
import { graphql } from "gatsby"

import Layout from "components/layouts/index"
import Tagline from "../img/tagline-8.svg"

export default class Legal extends React.Component {
	render() {
		const { markdownRemark, nature, yellowNature } = this.props.data
		const { html } = markdownRemark
		return (
			<Layout
				title="Legal Information"
				defaultFooter
				nature={nature}
				yellowNature={yellowNature}
			>
				<div className={`${styles} cont`}>
					<div className="tagline">
						<img src={Tagline} alt="tagline" />
					</div>
					<div className="innerHtml" dangerouslySetInnerHTML={{ __html: html }} />
				</div>
			</Layout>
		)
	}
}

export const query = graphql`
	query legalPage {
		...layoutFragment
		markdownRemark(fileAbsolutePath: { regex: "/src/markdown/pages/legal.md/" }) {
			html
		}
	}
`

const styles = css`
	&.cont {
		margin: auto;
		height: 100vh;
	}
	h1 {
		font-family: "Cybertron";
		margin: 0;
		margin-bottom: 10px;
		padding: 0;
		font-size: 2.2em;
	}
	section:first-of-type {
		background: #fff;
	}
	section:last-of-type {
		position: relative;
	}
	section {
		font-family: "Gill Sans";
		font-size: 1.4em;
		font-weight: normal;
		padding: 40px 30px 30px;
	}
	table {
		width: 100%;
		border-top: 2px solid #333;
		border-spacing: 0;
	}
	td {
		border-bottom: 2px solid #333;
		padding: 4px 5px;
	}
	.tagline {
		width: 100%;
		max-width: 500px;
		position: absolute;
		overflow: hidden;
		top: 250px;
		transform: rotate(5deg);
		user-select: none;
	}
	@media (min-width: 1000px) {
		.innerHtml {
			height: 100vh;
			flex-wrap: wrap;
			display: flex;
		}
		.tagline {
			width: 500px;
			right: -40px;
			top: 500px;
		}
		section:first-of-type {
			width: calc(100% * 2 / 3);
		}
		section:last-of-type {
			padding-left: 30px;
			width: calc(100% * 1 / 3);
		}
	}
`
