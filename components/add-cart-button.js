import React from 'react'

export default class extends React.Component {
	render() {
		return (
			<button className="addToCart" onClick={this.props.handleClick}>
				Add to cart
				<style jsx>{`
					.addToCart {
						border: 0;
						padding: 0.7rem 2rem;
						font-size: 1.7rem;
						text-transform: uppercase;
						font-weight: bold;
						background: #ff671b;
						color: #fff;
						cursor: pointer;
					}
				`}</style>
			</button>
		)
	}
}