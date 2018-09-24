import React from "react"
import Link from "gatsby-link"
import { css } from "emotion"

import settings from "../../styles/settings"

export default class Nav extends React.Component {
	constructor(props) {
		super(props)
		this.onClick = this.onClick.bind(this)
	}
	onClick() {
		this.props.onClick()
	}
	render() {
		return (
			<nav
				className={`${styles} ${this.props.showing ? `showing` : ``} ${
					this.props.home ? `homeNav` : ``
				}`}
				onClick={this.onClick}
			>
				<div className="close" onClick={this.onClick}>
					&#10005;
				</div>
				<section>
					<Link to="/product/ar100ms">Meat Seeker</Link>
					<Link to="/product/arcb101ms">Meat Seeker Cb</Link>
					<Link to="/product/ar100hhxt">Hammerhead xt</Link>
					<Link to="/product/ar100swxt">Sidewinder xt</Link>
				</section>
			</nav>
		)
	}
}

const styles = css`
	position: fixed;
	z-index: 20;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgb(0, 0, 0, 0.93);
	display: none;

	.close {
		color: #ffff00;
		font-size: 3em;
		position: absolute;
		top: 5px;
		left: 25px;
		cursor: pointer;
		display: none;
		& :hover {
			color: #ffff66;
		}
	}
	section {
		z-index: 2;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		text-transform: uppercase;
		font-size: 1.3em;
		letter-spacing: 1vw;
	}
	a {
		color: #ffff00;
		text-decoration: none;
		display: block;
		padding: 2vh 0;
		text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
		font-family: "Cybertron";
		letter-spacing: 1.5px;
		font-weight: 700;
		cursor: pointer;
		&:hover {
			color: #ffff66;
		}
	}
	&.showing {
		display: block;
		& .close {
			display: block;
		}
	}
	@media (min-width: 440px) {
		section {
			font-size: 1.5em;
		}
	}
	@media (min-width: 550px) {
		section {
			font-size: 5vw;
		}
	}
	@media (min-width: ${settings.navBreakpoint}px) {
		position: absolute;
		right: 30px !important;
		top: 100%;
		transform: translate(0, -50%);
		bottom: auto;
		left: auto;
		display: inline-block;
		z-index: 1;
		background: transparent;
		max-width: 1200px;

		&.showing .close {
			display: none;
		}
		&.homeNav {
			right: 100px;
		}
		section {
			position: static;
			display: inline-block;
			transform: none;
			font-size: 1em;
			letter-spacing: 3px;
		}
		a {
			display: inline-block;
			font-size: 1.1em;
			padding: 0 15px;
			border: 0;
			&:first-of-type {
				padding-left: 0;
			}
			&:last-of-type {
				padding-right: 0;
			}
		}
	}
`
