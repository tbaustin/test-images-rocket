import React from "react"
import { css } from "emotion"
import { PriceAndStock } from "react-escalade-priceline"

import settings from "./_global-settings"
import cartBtn from "../img/cartBtn.svg"

export default class AddCartButton extends React.Component {
	render() {
		return (
			<div className={`${styles} outer`}>
				<PriceAndStock site="rocket" id={this.props.id}>
					{({ stock, price, loading }) => {
						if (loading) return <div>Loading...</div>
						if (!stock || !price) return <div>Out of Stock</div>
						return (
							<div>
								<div
									className={`cartBtn ${!stock && `loading`}`}
									style={this.props.style || {}}
									onClick={this.props.handleClick}
									data-id={this.props.id}
									data-name={this.props.name}
									data-price={this.props.price}
									data-img={this.props.img}
									data-url={this.props.url}
									data-desc={this.props.desc}
									data-qty={this.props.qty}
									data-open-cart
								>
									<img src={cartBtn} alt="cartBtn" />
								</div>
							</div>
						)
					}}
				</PriceAndStock>
			</div>
		)
	}
}

const styles = css`
	&.outer {
		height: 63px;
		text-align: left;
	}
	.cartBtn {
		cursor: pointer;
		max-width: 80px;
		max-height: 80px;
		margin-top: 10px;
		display: inline-block;
		width: 80px;
		height: 80px;
	}
	button {
		border: 0;
		padding: 0.7rem 2rem;
		font-size: 1.7rem;
		text-transform: uppercase;
		font-family: "Oswald";
		background: ${settings.navy};
		color: #fff;
		cursor: pointer;
	}
	.loading {
		visibility: hidden;
	}
	span {
		text-transform: uppercase;
	}
`
