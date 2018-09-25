import React, { Fragment } from "react"
import { css } from "emotion"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import RouteDelayed from "plugins/route-delayed-animation"

import Header from "../header/header"
import Footer from "../footer/footer"
// import FreeShipping from "../components/free-shipping"
import RouteDelayedAnimation from "components/route-delayed-animation"
import "styles/global.css"

export default class Layout extends React.Component {
	render() {
		const { header, yellowNature, nature } = this.props
		return (
			<Fragment>
				<Helmet>
					<html lang="en" />
				</Helmet>
				<div className={`cont ${styles}`}>
					<Img
						css={{ top: 0, left: 0, right: 0, bottom: 0 }}
						style={{ position: `absolute`, zIndex: `-5` }}
						fluid={yellowNature.childImageSharp.fluid}
					/>
					<Header
						header={header}
						nature={nature}
						home={this.props.home}
						product={this.props.product}
					/>
					<div className={`wrapperHome`}>
						<main className={this.props.home ? `homeLayout` : ``}>
							{/* <FreeShipping /> */}
							{this.props.children}
						</main>
						<div
							className={`footer ${this.props.default ? `default` : ``} ${
								this.props.home ? `homeFooter` : ``
							}`}
						>
							<Footer
								product={this.props.product}
								defaultFooter={this.props.defaultFooter}
							/>
						</div>
					</div>
				</div>
				<RouteDelayed>
					<RouteDelayedAnimation />
				</RouteDelayed>
			</Fragment>
		)
	}
}

export const query = graphql`
	fragment layoutFragment on Query {
		header: file(relativePath: { regex: "/header.png/" }) {
			childImageSharp {
				fluid(maxWidth: 1600, rotate: 180) {
					...GatsbyImageSharpFluid
				}
			}
		}
		nature: file(relativePath: { regex: "/nature-texture.jpg/" }) {
			childImageSharp {
				fluid(maxWidth: 1600, rotate: 180) {
					...GatsbyImageSharpFluid
				}
			}
		}
		yellowNature: file(relativePath: { regex: "/yellow-nature-texture.png/" }) {
			childImageSharp {
				fluid(maxWidth: 1600, rotate: 180) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`

const styles = css`
	main.homeLayout {
		max-width: 1200px;
		padding: 10px 30px 30px 30px;
		margin: auto;
		margin-bottom: 30px;
	}
	main {
		max-width: 100%;
		padding: 0;
		margin: 0;
	}
	&.cont {
		position: relative;
		height: 100%;
	}
	@media (min-width: 1000px) {
		.footer {
			height: 0;
			transform: translateY(-80px);
			/* position: absolute;
			bottom: 0;
			left: 0;
			right: 0; */
		}
		.footer.homeFooter,
		.footer.default {
			height: auto;
			padding-left: 0;
			transform: translateY(0);
		}
	}
`
