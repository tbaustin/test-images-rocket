import React, { Fragment } from "react"
import { css } from "emotion"
import { Helmet } from "react-helmet"
import fastclick from "react-fastclick"
import RouteDelayed from "plugins/route-delayed-animation"

import Header from "../header/header"
import Footer from "../footer/footer"
// import FreeShipping from "../components/free-shipping"
import RouteDelayedAnimation from "components/route-delayed-animation"
import "styles/global.css"

fastclick()

export default class Layout extends React.Component {
	render() {
		return (
			<Fragment>
				<Helmet>
					<html lang="en" />
				</Helmet>
				<div className={`cont ${styles}`}>
					<Header home={this.props.home} product={this.props.product} />
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
		background: url("/yellow-nature-texture.png") top center no-repeat;
		background-size: cover;
	}
	.wrapperHome {
		background: url("/yellow-nature-texture.png") top center no-repeat;
		background-size: cover;
	}
	@media (min-width: 1000px) {
		.footer {
			height: 0;
			transform: translateY(-80px);
		}
		.footer.homeFooter,
		.footer.default {
			height: auto;
			padding-left: 0;
			transform: translateY(0);
		}
	}
`
