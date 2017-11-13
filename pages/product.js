import React from 'react'
import Layout from 'components/_layout'
import ProductImages from 'components/product-images'
import queryProduct from 'utils/product/get-product'
import NumberInput from 'components/forms/number'
import env from 'json/env'
import Price from 'components/utils/product/price'
import CartBtn from 'components/utils/product/add-cart-button'
import IsAvailable from 'components/utils/product/is-available'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			qty: 1
		}
		this.qtyChange = this.qtyChange.bind(this)
	}
	qtyChange(val){
		this.setState({
			qty: val
		})
	}
	static async getInitialProps(req){
		const props = queryProduct(req.query.id)
		return props
	}
	componentWillReceiveProps(){
		this.setState({
			qty: 1
		})
	}

	render() {
		const description = `${this.props.cut}" Cut (${this.props.grain} grain)`
		return(
			<Layout>
				<div className='cont'>
					<section>
						<ProductImages images={ this.props.images } />
					</section>
					<section>
						<h1>{ this.props.title }</h1>
						<h2>{description}</h2>
						<div dangerouslySetInnerHTML={{ __html: this.props.content }} />
						<div className='info'>
							<b><Price product={this.props} /></b> <span>(QTY { this.props.qty })</span>
						</div>
						<IsAvailable id={this.props.id}>
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
										id={this.props.id}
										price={this.props.price}
										img={`/static/img/product/w_150/${this.props.images[0]}.jpg`}
										name={this.props.title}
										desc={description}
									>
										<img className='cartBtn' src={`/static/img/btn${this.props.order}.svg`} />
									</CartBtn>
								</div>
							</div>
						</IsAvailable>
					</section>
					<style jsx>{`
						.cont{
							lost-utility: clearfix;
						}
						img{
							max-width: 100%;
						}
						.cartBtn{
							width: 80px;
							float: left;
						}
						h1, h2{
							font-family: 'Teko';
							font-style: italic;
							letter-spacing: 1px;
							margin-top: 0;
							margin-bottom: 0;
						}
						h1{
							font-size: 3em;
						}
						.ecomm{
							text-align: center;
						}
						@media(min-width:1000px){
							section:first-of-type{
								lost-column: 1/3;
							}
							section:last-of-type{
								padding-left: 30px;
								lost-column: 2/3;
							}
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
				</div>
			</Layout>
		)
	}
}
