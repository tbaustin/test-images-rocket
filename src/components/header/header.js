import Link from "gatsby-link"
import React from "react"
import { css } from "emotion"

import Cart from "./cart"
import Hamburger from "./hamburger"
import Nav from "./nav"
import settings from "../../styles/settings"
import Logo from "../../img/logo.svg"
import TaglineOne from "../../img/tagline-1.svg"
import SocialMedia from "../social-media/social-media"

export default class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showing: false,
		}
		this.toggleNav = this.toggleNav.bind(this)
		this.hideNav = this.hideNav.bind(this)
	}
	toggleNav() {
		this.setState({
			showing: !this.state.showing,
		})
	}
	hideNav() {
		if (this.state.showing) {
			this.setState({
				showing: false,
			})
		}
	}
	componentDidMount() {
		window.addEventListener(`resize`, this.hideNav)
	}
	componentWillUnmount() {
		window.removeEventListener(`resize`, this.hideNav)
	}
	render() {
		return (
			<section className={`${styles} wrapper`}>
				<section
					className={`bar ${this.props.home ? `homeHeader` : ``} ${
						this.props.product ? `product` : ``
					}`}
				>
					<header>
						<Nav
							showing={this.state.showing}
							home={this.props.home}
							onClick={this.toggleNav}
						/>
						<div className="ham">
							<Hamburger onClick={this.toggleNav} home={this.props.home} />
						</div>
						<div className="socialMedia">
							<SocialMedia />
						</div>
						<div>
							<Cart />
						</div>
						<div className="logo">
							<Link to="/">
								<img src={Logo} alt="logo" />
							</Link>
						</div>
					</header>
					{this.props.home ? (
						<aside className="message">
							<img src={TaglineOne} alt="tagline" />
						</aside>
					) : null}
				</section>
				{this.state.showing ? (
					<style>{`
						body{
							overflow: hidden;
						}
					`}</style>
				) : (
					``
				)}
			</section>
		)
	}
}

const styles = css`
	.bar {
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url("/nature-texture.jpg") no-repeat center center;
		background-size: cover;
		width: 100%;
		min-height: 275px;
	}
	.product {
		min-height: 450px;
	}
	> section {
		position: relative;
	}
	.socialMedia {
		position: absolute;
		right: 80px;
		top: 50%;
		transform: translate(0, -50%);
	}
	.message {
		position: absolute;
		text-align: center;
		bottom: 10px;
		left: 0px;
		width: 400px;
		user-select: none;
	}
	header {
		position: relative;
		min-height: 70px;
		user-select: none;
		&:before,
		:after {
			content: "";
			clear: both;
			display: table;
		}
	}
	.logo {
		position: absolute;
		width: 70%;
		max-width: 350px;
		left: 0;
		right: 0;
		top: 90px;
		margin-left: auto;
		margin-right: auto !important;
	}
	&.wrapper {
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url("/nature-texture.jpg"), no-repeat bottom left;
		background-size: cover;
	}
	.homeHeader {
		height: 50vh;
		background: url("/header.png"), no-repeat bottom left;
		background-size: cover;
		min-height: 550px;
		max-height: 600px;
		max-width: 1200px;
		margin: 0 auto;
	}
	.splatCont {
		user-select: none;
	}
	h1 {
		position: absolute;
		z-index: 3;
		text-align: center;
		left: 0;
		right: 0;
		top: 8vh;
		letter-spacing: 0.3vw;
		font-size: 10vw;
		line-height: 10vw;
		text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
	}
	@media (min-width: 700px) {
		h1 {
			top: 10vh;
			font-size: 4vw;
			line-height: 5vw;
		}
		.homeHeader {
			height: 50vh;
		}
	}
	@media (min-width: 800px) {
		.homeHeader {
			height: 60vh;
		}
	}
	@media (min-width: 900px) {
		.homeHeader {
			height: 70vh;
		}
	}
	@media (min-width: 1000px) {
		.homeHeader {
			height: 95vh;
		}
		.bar {
			min-height: 330px;
		}
	}
	@media (min-width: ${settings.navBreakpoint}px) {
		.logo {
			width: 300px !important;
			top: 30px;
			left: 30px;
			margin: 0;
		}
		.bar {
			position: relative;
			min-height: 200px;
		}
		header {
			margin: auto;
			min-height: 120px;
		}
		.homeHeader {
			& header {
				width: 100%;
			}
		}
		.ham {
			display: none;
		}
		.message {
			width: 100%;
			max-width: 500px;
		}
	}
`
