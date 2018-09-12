import React from 'react'

export default class extends React.Component {
	render(){
		return (
			<div>
				FREE SHIPPING ON ALL ORDERS
				<style jsx>{`
					div{
						text-align: center;
						color: #fff;
						background-color: #000;
						padding: 10px;
						margin-bottom: 30px;
						::selection{
							color: #000;
							background-color: #fff;
						}
					}
				`}</style>
			</div>
		)
	}
}
