import React from 'react'
import Link from 'next/link'

export default class extends React.Component {
	render() {
		return(
			<div className='outer'>
				<Link prefetch href={{
						pathname: '/product',
						query: {
							product: this.props.id
						}
					}} as={`/product/${this.props.id}`}>
					<a>
						<img src={`/static/salsify/${this.props.img}-lg.jpg`} className='mainImg' />
					</a>
				</Link>

				<h1>

					<Link prefetch href={{
							pathname: '/product',
							query: {
								product: this.props.id
							}
						}} as={`/product/${this.props.id}`}>
						<a>{ this.props.name }</a>
					</Link>
				</h1>
				<div className='cut'>?" Cut (??? Grain)</div>
				<div className='price'>${ this.props.price }</div>
				<div className='qty'>{ `(QTY ?)` }</div>
				<div
					className='cartBtn'
					data-id={this.props.id}
					data-price={this.props.price}
					data-img={`/static/salsify/${this.props.img}-lg.jpg`}
					data-name={this.props.name}
					data-open-cart
					>
					<img src='/static/dot.svg' />
				</div>
				<style jsx>{`
					.outer{
						text-align: center;
						margin-bottom: 30px;
					}
					.mainImg{
						max-height: 150px;
					}
					.cartBtn{
						cursor: pointer;
						& img{
							max-width: 60px;
						}
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
