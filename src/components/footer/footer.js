import React from "react"
import Link from "gatsby-link"
import { css } from "emotion"

const year = new Date().getFullYear()

export default class Footer extends React.Component {
	render() {
		return (
			<footer className={styles}>
				<section className="inner">
					<section
						className={this.props.product ? `constrain product` : `constrain`}
					>
						<div>
							&copy; {year}
							{` `}
							<Link to="/">Rocket Broadheads</Link>
						</div>
						<div>
							<Link to="/contact">Contact</Link>
							<Link to="/privacy">Privacy Policy</Link>
							<Link to="/legal">Legal</Link>
							<Link to="/terms">Terms of Service</Link>
						</div>
					</section>
				</section>
			</footer>
		)
	}
}

const styles = css`
	&footer {
		position: absolute;
		bottom: 0;
		color: #000;
		font-family: "Teko";
		font-weight: 500;
		text-transform: uppercase;
		font-size: 0.9em;
		user-select: none;
		letter-spacing: 0.5px;
	}
	.constrain {
		&:before,
		:after {
			content: "";
			display: table;
			clear: both;
		}
		max-width: 1200px;
		padding: 30px;
		padding-bottom: 0;
		margin: auto;
	}
	.constrain.product {
		max-width: 100%;
		padding-left: 160px;
	}
	div {
		text-align: center;
		font-family: "Teko";
		&:first-of-type {
			margin-bottom: 20px;
		}
		&:last-of-type {
			& a {
				display: inline-block;
				margin-bottom: 5px;
				&:last-of-type {
					margin-bottom: 0;
				}
			}
		}
	}
	a {
		color: #000;
		text-decoration: none;
		padding: 0 12px;
		font-family: "Teko";
		font-weight: 500;
		&:first-of-type {
			padding-left: 0;
		}
		&:last-of-type {
			padding-right: 0;
		}
	}

	@media (min-width: 800px) {
		.constrain {
			width: 100%;
			display: flex;
			justify-content: space-between;
			& div {
				flex: 1;
			}
			& div:first-of-type {
				text-align: left;
			}
			& div:last-of-type {
				text-align: right;
			}
		}
	}
	@media (min-width: 1000px) {
		&footer {
			padding-left: 120px;
		}
	}
	@media (min-width: 1200px) {
		&footer {
			padding-left: 0;
		}
	}
`
