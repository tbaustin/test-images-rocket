import React from 'react'
import Layout from 'components/_layout'
import ProductImages from 'components/product-images'
import queryProduct from 'query-product'
import usdFormatter from 'usd-formatter'
import NumberInput from 'components/forms/number'

function getProduct(id){
	let data = queryProduct({ id: id })[0]
	if(data){
		if(typeof data['Web Images'] === 'string'){
			data['Web Images'] = [ data['Web Images'] ]
		}
	}
	else{
		data = {
			'Web Images': []
		}
	}
	return data
}

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			qty: 1
		}
		this.qtyChange = this.qtyChange.bind(this)
	}
	qtyChange(e){
		this.setState({
			qty: e.target.value
		})
	}
	static async getInitialProps(req){
		const props = getProduct(req.query.product)
		return props
	}
	componentWillReceiveProps(){
		this.setState({
			qty: 1
		})
	}
	render() {
		return(
			<Layout>
				<div className='cont'>
					<section>
						<ProductImages images={ this.props['Web Images'] } />
					</section>
					<section>
						<h1>{ this.props.title }</h1>
						<h2>{ this.props.cut }" Cut ({ this.props.grain } grain)</h2>
						<div dangerouslySetInnerHTML={{ __html: this.props.contents }} />
						<div className='info'>
							<b>{ usdFormatter(this.props.price) }</b> <span>(QTY { this.props.qty })</span>
						</div>

						{
							process.env.DISABLE_ECOMMERCE ?
								'' :
								(
									<div>
										<div className='qty'>
											<NumberInput
												min='1'
												labelStyle={{ marginBottom: 0 }}
												handleChange={this.qtyChange}
												handleBlur={this.qtyChange}
												defaultValue='1'
											/>
										</div>
										<div
											className='cartBtn'
											data-id={this.props.id}
											data-price={this.props.price}
											data-img={`/static/salsify/${this.props['Web Images'][0]}-lg.jpg`}
											data-name={this.props.title}
											data-open-cart
											data-qty={this.state.qty || '1'}
										>
											<img src={`/static/btn${this.props.order}.svg`} />
										</div>
									</div>
								)
						}
					</section>
					<style jsx>{`
						.cont{
							lost-utility: clearfix;
						}
						img{
							max-width: 100%;
						}
						.qty{
							max-width: 60px;
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
						.cartBtn{
							cursor: pointer;
							max-width: 80px;
							max-height: 80px;
							margin-top: 10px;
						}
						@media(min-width:1000px){
							section:first-of-type{
								lost-column: 1/3;
							}
							section:last-of-type{
								padding-left: 30px;
								lost-column: 2/3;
							}
						}
					`}</style>
				</div>
			</Layout>
		)
	}
}
