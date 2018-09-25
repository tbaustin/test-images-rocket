import React from "react"
import { css } from "emotion"
import { graphql } from "gatsby"

import Layout from "components/layouts/index"
import SpecBar from "../components/spec-bar"
import ProductImages from "../components/product-images"
import ProductEcomm from "components/product-ecomm"
import Tagline3 from "../img/tagline-3.svg"
import Tagline4 from "../img/tagline-4.svg"
import Tagline5 from "../img/tagline-5.svg"
import Tagline7 from "../img/tagline-7.svg"

export default class ProductTemplate extends React.Component {
	constructor(props) {
		super(props)
		this.renderTagline = this.renderTagline.bind(this)
	}

	renderTagline() {
		switch (this.props.data.markdownRemark.frontmatter.id) {
		case `ar100ms`.toUpperCase():
			return <img src={Tagline3} alt="tagline" />
		case `arcb101ms`.toUpperCase():
			return <img src={Tagline4} alt="tagline" />
		case `ar100hhxt`.toUpperCase():
			return <img src={Tagline5} alt="tagline" />
		case `ar100swxt`.toUpperCase():
			return <img src={Tagline7} alt="tagline" />
		default:
			return <img src={Tagline3} alt="tagline" />
		}
	}

	render() {
		const { markdownRemark, salsifyContent } = this.props.data
		const { longDescription, webImages } = salsifyContent
		const images = webImages.map(image => image.url)
		const { html, frontmatter } = markdownRemark
		const { cut, grain, header, qty, title, id } = frontmatter
		return (
			<Layout product>
				<div className={`${styles} contProduct`}>
					<SpecBar specs={{ blades: 3, cut: cut, grain: grain }} />
					<section className="images">
						<ProductImages images={images} />
					</section>
					<div className="tagline">{this.renderTagline()}</div>

					<section className="info">
						<h1>
							{title === `Meat Seeker Crossbow` ? `meat seeker` : title}
							{title === `Meat Seeker Crossbow` ? (
								<span className="subtitle">crossbow</span>
							) : null}
						</h1>

						<h2>{header}</h2>
						<h3 className="desc">{longDescription}</h3>
						<div className="innerHtml" dangerouslySetInnerHTML={{ __html: html }} />
						<div className="ecom">
							<div className="price">
								<span>price {` `}</span>
								<span>(QTY {qty})</span>
							</div>
							<div className="qty">
								<ProductEcomm
									product={{
										id,
										images,
										title,
									}}
									description={longDescription}
									productPage
								/>
							</div>
						</div>
					</section>
				</div>
			</Layout>
		)
	}
}

export const query = graphql`
	query productTemplate($upperId: String) {
		markdownRemark(frontmatter: { id: { eq: $upperId } }) {
			html
			frontmatter {
				id
				category
				cut
				grain
				header
				id
				order
				qty
				title
				images
			}
		}
		salsifyContent(id: { eq: $upperId }) {
			longDescription
			webImages {
				url
			}
		}
	}
`

const styles = css`
	.highlight {
		color: #860e1b;
		font-size: 1.2em;
		font-family: "Cybertron";
		font-style: italic;
		letter-spacing: 0.5px;
	}
	.desc {
		font-weight: 500;
	}
	.tagline {
		display: none;
		user-select: none;
	}
	.innerHtml {
		font-size: 1em;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
	.price {
		margin-bottom: 30px;
		& > span:first-child {
			font-weight: bold;
		}
	}
	.images {
		background: #fff;
		padding: 40px;
		position: relative;
		overflow: hidden;
	}
	&.contProduct {
		position: relative;
		&:before,
		:after {
			display: table;
			clear: both;
			content: "";
		}
		& section {
			&:before,
			:after {
				display: table;
				clear: both;
				content: "";
			}
		}
		font-family: "Teko";
	}
	img {
		max-width: 100%;
	}
	h1,
	h2 {
		font-family: "Cybertron";
		text-transform: uppercase;
		margin-top: 0;
		margin-bottom: 0;
		color: #860e1b;
	}
	h2 {
		font-style: italic;
	}
	span.subtitle {
		font-family: "Cybertron";
		text-transform: uppercase;
		font-style: italic;
		margin-top: 0;
		margin-bottom: 0;
		transform: translateY(-20px);
		color: #000;
		display: block;
		font-size: 0.75em;
	}
	h1 {
		font-size: 3em;
	}
	.info {
		padding: 40px;
		height: 100%;
		position: relative;
		z-index: 3;
	}
	.ecom {
		margin-top: 45px;
		text-align: center;
		position: relative;
		z-index: 3;
	}
	@media (min-width: 1000px) {
		.images {
			width: calc(100% - 120px);
			float: right;
		}
		.info {
			width: calc(100% - 120px);
			float: right;
		}
	}
	@media (min-width: 1200px) {
		.price {
			transform: translateY(10%);
		}
		.desc {
			font-size: 1.1em;
		}
		&.contProduct {
			& > section {
				min-height: 750px;
			}
		}
		.ecom {
			display: flex;
			text-align: left;
			& .ecomm {
				text-align: left;
			}
			& > div:nth-child(2) {
				order: -1;
				margin-right: 20px;
			}
		}
		.images {
			width: calc(50% - 60px);
			float: right;
			padding-left: 0;
			height: 100vh;
		}
		.info {
			width: calc(50% - 60px);
			display: inline-block;
			height: 100vh;
		}
		.tagline {
			z-index: 2;
			display: block;
			position: absolute;
			width: 60%;
			max-width: 800px;
			top: 285px;
			left: -20px;
		}
	}
`
