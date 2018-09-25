import React from "react"
import { css } from "emotion"

import CartBtn from "./add-cart-button"
import NumberInput from "./forms/number"

export default class ProductEcomm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			qty: 1,
		}
		this.qtyChange = this.qtyChange.bind(this)
	}
	qtyChange(val) {
		this.setState({
			qty: val,
		})
	}

	render() {
		return (
			<section className={styles}>
				<div className={`ecomm ${this.props.float ? `float` : ``}`}>
					<div className={this.props.productPage ? `qty productPage` : `qty`}>
						<NumberInput
							min="1"
							labelStyle={{ marginBottom: 0, display: `inline-block` }}
							handleChange={this.qtyChange}
							handleBlur={this.qtyChange}
							defaultValue="1"
							decrementClick={this.decrement}
							incrementClick={this.increment}
						/>
					</div>
					<div>
						<CartBtn
							id={this.props.product.id}
							img={`/static/img/product/w_150/${this.props.product.images[0]}.jpg`}
							name={this.props.product.title}
							desc={this.props.description}
							qty={this.state.qty}
						>
							<img className="cartBtn" src={`/static/img/btn${1}.svg`} />
						</CartBtn>
					</div>
				</div>
			</section>
		)
	}
}

const styles = css`
	.qty {
		display: none;
	}
	.qty.productPage {
		display: block;
	}
	.cartBtn {
		width: 80px;
		float: left;
		position: relative;
	}
	.ecomm {
	}
	@media (min-width: 1000px) {
		.float {
			& > div {
				float: left;
			}
		}
		.ecomm {
			lost-utility: clearfix;
			& > div {
				&:first-of-type {
					margin-right: 15px;
				}
			}
		}
	}
`