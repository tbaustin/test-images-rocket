import React from 'react'

export default class extends React.Component {
	render() {
		// regexp matches on 2 or more digits not at the beginning of string
		const titlePieces = this.props.title.split(/(?!^)(\d{2,})/);
		const formattedTitle = titlePieces.map(piece => {
			if (!isNaN(piece)) { // numeric segment gets special formatting
				return (
					<span className="productTitle__numbers">
						{piece}
						<style jsx>{`
							.productTitle__numbers {
								color: #ff671b;
							}
						`}</style>
					</span>
				)
			}
			return piece;
		});

		return (
			<div className="productTitle">
				{formattedTitle}
			</div>
		)
	}
}