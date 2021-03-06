import React from 'react'
import Link from 'next/link'
import Price from 'components/utils/product/price'
import env from 'json/env'
import ProductEcomm from 'components/product-ecomm'

export default class extends React.Component {
	render() {

		const description = `${this.props.data.cut}" Cut (${this.props.data.grain} grain)`
		return(
			<div className='outer'>
				<Link prefetch href={`/product?id=${this.props.data.id}`} as={ `/product/${this.props.data.id}` }>
					<a>
						<img src={`/static/img/product/w_400/${this.props.data.images[0]}.jpg` } className='mainImg' />
					</a>
				</Link>

				<h1>

					<Link prefetch href={`/product?id=${this.props.data.id}`} as={`/product/${this.props.data.id}`}>
						<a>{ this.props.data.title }</a>
					</Link>
				</h1>
				<div className='cut'>{description}</div>
				<div className='price'><Price product={this.props.data} /></div>
				<div className='qty'><b><Price product={this.props} /></b> (QTY {this.props.data.qty})</div>
				<ProductEcomm product={this.props.data} description={description} />
				<style jsx>{`
					h1{
						font-family: 'Teko';
						font-weight: 400;
						font-size: 2em;
						margin-bottom: 0;
						margin-top: 0;
						font-style: italic;
					}
					.outer{
						text-align: center;
						margin-bottom: 30px;
					}
					.mainImg{
						max-height: 150px;
						margin-bottom: 10px;
					}
					.qty{
						margin-bottom: 10px;
					}
					.cartBtn{
						cursor: pointer;
						width: 80px;
					}
					@media(min-width: 600px){
						.outer{
							lost-column: 1/2;
						}
					}
					@media(min-width: 1000px){
						.outer{
							lost-column: 1/4;
						}
					}
				`}</style>
			</div>
		)
	}
}
