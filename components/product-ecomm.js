import React from 'react'
import styles from './_global-settings'
import CartBtn from 'components/utils/product/add-cart-button'
import IsAvailable from 'components/utils/product/is-available'
import NumberInput from 'components/forms/number'

export default class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			qty: 1
		}
		this.qtyChange = this.qtyChange.bind(this)
	}
	qtyChange(val) {
		this.setState({
			qty: val
		})
	}
	componentWillReceiveProps() {
		this.setState({
			qty: 1
		})
	}
	render(){
		return (
			<IsAvailable id={this.props.product.id}>
				<div className='ecomm'>
					<div className='qty'>
						<NumberInput
							min='1'
							labelStyle={{ marginBottom: 0, display: 'inline-block' }}
							handleChange={this.qtyChange}
							handleBlur={this.qtyChange}
							defaultValue='1'
							decrementClick={this.decrement}
							incrementClick={this.increment}
						/>
					</div>
					<div>
						<CartBtn
							id={this.props.product.id}
							price={this.props.product.price}
							img={`/static/img/product/w_150/${this.props.product.images[0]}.jpg`}
							name={this.props.product.title}
							desc={this.props.description}
							>
							<img className='cartBtn' src={`/static/img/btn${this.props.product.order}.svg`} />
						</CartBtn>
					</div>
				</div>
				<style jsx>{`
					.cartBtn{
						width: 80px;
						float: left;
					}
					.ecomm{
						text-align: center;
					}
					@media(min-width:1000px){
						.ecomm{
							lost-utility: clearfix;
							& > div{
								float: left;
								&:first-of-type{
									margin-right: 15px;
								}
							}
						}
					}
				`}</style>
			</IsAvailable>
		)
	}
}
