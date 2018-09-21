import React from "react"
// import Link from "gatsby-link"
// import { css } from "emotion"

// import { PriceAndStock } from "react-escalade-priceline"
// import ProductEcomm from "components/product-ecomm"

export default class ProductSmall extends React.Component {
	render() {
		return (
			<div className="outer">
				Here is a product
				{/* <Link
					prefetch
					href={`/product?id=${this.props.data.id}`}
					as={`/product/${this.props.data.id}`}
				>
					<a>
						{img ? (
							<img src={img} className="mainImg" />
						) : (
							<div className="mainImg">
								<img src={img} alt="mainImg" />
							</div>
						)}
					</a>
				</Link>

				<h1>
					<Link
						prefetch
						href={`/product?id=${this.props.data.id}`}
						as={`/product/${this.props.data.id}`}
					>
						<a>{this.props.data.title}</a>
					</Link>
				</h1>
				<div className="cut">{description}</div>
				<div className="price-qty">
					Price (QTY {this.props.data.qty})
					<PriceAndStock site="rocketbroadheads" id={this.props.data.id}>
      {({ stock, price, loading }) => {
       if (loading) return <div>Loading...</div>
       console.log(price)
       return (
        <div>
         <div>Price: {price}</div>
         <div>Stock: {stock}</div>
        </div>
       )
      }}
     </PriceAndStock> 
				</div>
				<ProductEcomm product={this.props.data} description={description} /> */}
			</div>
		)
	}
}

// const styles = css`
// 	h1 {
// 		font-weight: 400;
// 		font-size: 2em;
// 		margin-bottom: 0;
// 		margin-top: 0;
// 		font-style: italic;
// 	}
// 	.outer {
// 		text-align: center;
// 		margin-bottom: 30px;
// 	}
// 	div.mainImg {
// 		height: 150px;
// 	}
// 	.mainImg {
// 		max-height: 150px;
// 		margin-bottom: 10px;
// 	}
// 	.price-qty {
// 		margin-top: 30px;
// 	}
// 	.cartBtn {
// 		cursor: pointer;
// 		width: 80px;
// 	}
// 	@media (min-width: 600px) {
// 		.outer {
// 			lost-column: 1/2;
// 		}
// 	}
// 	@media (min-width: 1000px) {
// 		.outer {
// 			lost-column: 1/4;
// 		}
// 	}
// `
