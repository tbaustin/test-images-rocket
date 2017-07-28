import React from 'react'
import Link from 'next/link'
import usd from 'usd-formatter'

export default class extends React.Component {
	render() {
		return(
			<div className='outer'>
				<Link prefect href={`/product/${this.props.id}`}>
					<a>
						<img src={`/static/salsify/${this.props.img}-lg.jpg`} />
					</a>
				</Link>

				<h1>
					<Link prefect href={`/product/${this.props.id}`}>
						<a>{ this.props.name }&reg;</a>
					</Link>
				</h1>
				<div className='price'>{ usd(this.props.price) }</div>

				<style jsx>{`
					.outer{
						text-align: center;
						margin-bottom: 30px;
					}
					img{
						max-height: 150px;
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
