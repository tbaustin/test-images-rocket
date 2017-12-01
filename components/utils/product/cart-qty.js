import React from 'react'

export default class extends React.Component {
	componentDidMount(){
		if(!zygote.onQtyUpdate){
			zygote.onQtyUpdate = qty => {
				this.setState({ qty: qty })
			}
		}
	}
	render(){
		return (
			<div>{this.state.qty}</div>
		)
	}
}
