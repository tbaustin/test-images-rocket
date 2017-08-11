import React from 'react'
import Link from 'next/link'
import usdFormatter from 'usd-formatter'

export default class extends React.Component {
	render() {
		let img
		if(typeof this.props.data['Web Images'] === 'object'){
			img = this.props.data['Web Images'][0]
		}
		else{
			img = this.props.data['Web Images']
		}
		img = `/static/salsify/${img}-lg.jpg`
		return(
			<div className='outer'>
				<Link prefetch href={{
						pathname: '/product',
						query: {
							product: this.props.data.id
						}
					}} as={`/product/${this.props.data.id}`}>
					<a>
						<img src={ img } className='mainImg' />
					</a>
				</Link>

				<h1>

					<Link prefetch href={{
							pathname: '/product',
							query: {
								product: this.props.data.id
							}
						}} as={`/product/${this.props.id}`}>
						<a>{ this.props.data.title }</a>
					</Link>
				</h1>
				<div className='cut'>{ this.props.data.cut }" Cut { this.props.data.grain } Grain)</div>
				<div className='price'>{ usdFormatter(this.props.data.price) }</div>
				<div className='qty'>(QTY { this.props.data.qty })</div>
				<div
					className='cartBtn'
					data-id={ this.props.data.id }
					data-price={ this.props.data.price }
					data-img={ img }
					data-name={ this.props.data.title }
					data-open-cart
					>
					<img src={ `/static/btn${this.props.data.order}.svg` } />
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
							max-width: 80px;
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
