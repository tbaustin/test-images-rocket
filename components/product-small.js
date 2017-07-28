import React from 'react'
import usd from 'usd-formatter'

export default class extends React.Component {
	render() {
		return(
			<div>
				<img src={`/static/salsify/${this.props.img}-lg.jpg`} />
				<h1>{ this.props.name }</h1>
				<div className='price'>{ usd(this.props.price) }</div>
				<style jsx>{`
					img{
						max-height: 150px;
					}
				`}</style>
			</div>
		)
	}
}
