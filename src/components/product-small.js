import React from "react"
import Link from "gatsby-link"
import { css } from "emotion"
import { PriceAndStock } from "react-escalade-priceline"

import ProductEcomm from "components/product-ecomm"

export default class ProductSmall extends React.Component {
	render() {
		let img = this.props.data.images[0]
		const description =
			this.props.data.cut && this.props.data.grain
				? `${this.props.data.cut}" Cut (${this.props.data.grain} grain)`
				: ``
		return (
			<div className={`${styles} outer`}>
				<Link to={`/product/${this.props.data.id}`}>
					{img ? (
						<img src={img} className="mainImg" />
					) : (
						<div className="mainImg">
							<img src={img} alt="mainImg" />
						</div>
					)}
				</Link>
				<h1>
					<Link to={`/product/${this.props.data.id}`}>{this.props.data.title}</Link>
				</h1>
				<div className="cut">{description}</div>
				<div className="price-qty">
					<PriceAndStock site="rocket" id={this.props.data.id}>
						{({ stock, price, loading }) => {
							if (loading) return <div>Loading...</div>
							if (!stock || !price) return <div>Out of Stock</div>
							return (
								<div>
									<div>
										{price} <span className="qty">(QTY {this.props.data.qty})</span>
									</div>
									<ProductEcomm product={this.props.data} description={description} />
								</div>
							)
						}}
					</PriceAndStock>
				</div>
			</div>
		)
	}
}

const styles = css`
	.qty,
	.cut {
		font-family: "Teko";
		font-weight: 700;
	}

	h1 {
		text-transform: uppercase;
		font-size: 1.3em;
		margin: 0;
	}
	a {
		color: #860e1b;
		text-decoration: none;
	}
	&.outer {
		text-align: center;
		margin-bottom: 30px;
		width: 100%;
	}
	div.mainImg {
		height: 150px;
	}
	.mainImg {
		max-height: 150px;
		margin-bottom: 10px;
	}
	.price-qty {
		margin-top: 30px;
	}
	.cartBtn {
		cursor: pointer;
		width: 80px;
	}
	@media (min-width: 600px) {
		&.outer {
			width: 50%;
		}
	}
	@media (min-width: 1000px) {
		&.outer {
			width: 25%;
		}
	}
`
