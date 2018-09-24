import React, { Component } from "react"
import { css } from "emotion"

export default class SpecBar extends Component {
	render() {
		const { blades, cut, grain } = this.props.specs

		return (
			<section className={styles}>
				<div>
					<span>{blades}</span>
					blades
				</div>
				<div>
					<span>{cut}"</span>
					cutting diameter
				</div>
				<div>
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
	width: auto;
	margin-top: -230px;
	z-index: 2;
	position: relative;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	letter-spacing: 1px;
	font-weight: 300;
	& > div {
		transform: translateY(10%);
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
		& > div {
			width: calc(100% / 3);
			transform: translateY(20%);
		}
	}
	@media (min-width: 1000px) {
		position: absolute;
		top: 0;
		bottom: -71px;
		height: calc(100% + 71px);
		background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
			url("/nature-texture.jpg") center;
		background-size: cover;
		margin: 0;
		width: 120px;
		display: block;
		& > div:first-child {
			margin-top: 50px;
		}
		& > div {
			margin-bottom: 50px;
			width: 100%;
		}
	}
	@media (min-width: 1200px) {
		bottom: 0;
		height: 100%;
	}
`
