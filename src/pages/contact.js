import React from "react"
import { css } from "emotion"
import { graphql } from "gatsby"

import Layout from "components/layouts/index"
import Input from "components/forms/input"
import Textarea from "components/forms/textarea"
import Form from "components/forms/form"
import Tagline from "../img/tagline-8.svg"
import Send from "../img/send.svg"

export default class Contact extends React.Component {
	render() {
		const { markdownRemark } = this.props.data
		const { frontmatter, html } = markdownRemark
		const { title } = frontmatter
		return (
			<Layout defaultFooter>
				<main className={styles}>
					<section className={`content`}>
						<h1 className={`title`}>{title}</h1>
						<Form name="Contact" netlify="true" action="thank-you">
							<Input label="Name:" name="Name" required />
							<Input label="Email Address:" name="Email" required />
							<Textarea label="Message:" name="Message" required />
							<button className={`sendBtn`}>
								<img src={Send} className="send" />
							</button>
						</Form>
					</section>
					<section className={`content`}>
						<div className="tagline">
							<img src={Tagline} alt="tagline" />
						</div>
						<div className="innerHtml" dangerouslySetInnerHTML={{ __html: html }} />
					</section>
				</main>
			</Layout>
		)
	}
}

export const query = graphql`
	query contactPage {
		markdownRemark(
			fileAbsolutePath: { regex: "/src/markdown/pages/contact.md/" }
		) {
			html
			frontmatter {
				title
			}
		}
	}
`

const styles = css`
	.content {
		padding: 10px 30px 30px;
	}
	.tagline {
		width: 100%;
		max-width: 500px;
		position: absolute;
		overflow: hidden;
		bottom: 0px;
		transform: rotate(5deg);
		user-select: none;
	}
	.title,
	h1 {
		font-family: "Cybertron";
		padding: 0;
		line-height: 1;
		font-size: 2.5em;
		position: relative;
		z-index: 2;
	}
	.content:first-of-type {
		background: #fff;
	}
	.content:last-of-type {
		& p {
			font-family: "Gill Sans";
			font-size: 1.2em;
			& a {
				color: #000;
				font-family: "Gill Sans";
				font-weight: normal;
				text-decoration: none;
			}
		}
	}
	.send {
		width: 90px;
		height: 90px;
	}
	.sendBtn {
		cursor: pointer;
		appearance: none;
		background: transparent;
		border: 0;
		outline: 0;
		&:active,
		&:focus,
		&:hover {
			opacity: 0.8;
		}
		& img {
			position: relative;
			z-index: 2;
		}
	}
	@media (min-width: 1000px) {
		display: flex;
		flex-wrap: wrap;
		height: 100vh;

		.tagline {
			bottom: 100px;
			width: 500px;
			right: -40px;
		}
		.content:first-of-type {
			width: calc(100% * 2 / 3);
		}
		.content:last-of-type {
			padding-left: 30px;
			width: calc(100% * 1 / 3);
		}
	}
`
