import React, { Component } from "react"
import Img from "gatsby-image"
import { css } from "emotion"

export default class SpecBar extends Component {
	render() {
		const { nature } = this.props
		const { blades, cut, grain } = this.props.specs

		return (
			<section className={styles}>
				<div className="gradient" />
				<Img
					fluid={nature.childImageSharp.fluid}
					css={{ top: 0, left: 0, right: 0, bottom: 0 }}
					style={{ position: `absolute`, zIndex: `-3`, background: `linear` }}
				/>
				<div className={`spec`}>
					<span>{blades}</span>
					blades
				</div>
				<div className={`spec`}>
					<span>{cut}"</span>
					cutting diameter
				</div>
				<div className={`spec`}>
					<span>{grain}</span>
					grain
				</div>
			</section>
		)
	}
}

const styles = css`
	background: rgba(0, 0, 0, 0.5);
	height: 230px;
	width: 100%;
	margin-top: -230px;
	z-index: 2;
	position: relative;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	letter-spacing: 1px;
	font-weight: 300;
	.gradient {
		background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
		z-index: -2;
		position: absolute;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
	}
	& .spec {
		text-transform: uppercase;
		color: #fff;
		text-align: center;
		width: 100%;
		& > span {
			color: #ffff00;
			font-size: 1.7em;
			font-weight: bold;
			font-style: italic;
			font-family: "Cybertron";
		}
	}
	span {
		display: block;
	}
	@media (min-width: 400px) {
		height: 120px;
		margin-top: -120px;
		& .spec {
			width: calc(100% / 3);
			margin-top: 20px;
		}
	}
	@media (min-width: 1000px) {
		position: absolute;
		top: 0;
		height: calc(100%);
		margin: 0;
		width: 120px;
		display: block;
		& .spec {
			margin-top: 50px;
			margin-bottom: 50px;
			width: 100%;
		}
	}
	@media (min-width: 1200px) {
		bottom: 0;
		height: 100%;
	}
`
