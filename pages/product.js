import React from 'react'
import Layout from 'components/_layout'
import ProductImages from 'components/product-images'
import queryProduct from 'query-product'
import usdFormatter from 'usd-formatter'
import NumberInput from 'components/forms/number'

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
	render(){
		let data = queryProduct({ id: this.props.url.query.product })[0]
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
		return(
			<Layout>
				<div className='cont'>
					<section>
						<ProductImages images={ data['Web Images'] } />
					</section>
					<section>
						<h1>{ data.title }</h1>
						<h2>{ data.cut }" Cut ({ data.grain } grain)</h2>
						<div dangerouslySetInnerHTML={{ __html: data.contents }} />
						<div className='info'>
							<b>{ usdFormatter(data.price) }</b> <span>(QTY { data.qty })</span>
						</div>
						<div className='qty'>
							<NumberInput
								min='1'
								labelStyle={{ marginBottom: 0 }}
								handleChange={ this.qtyChange }
								/>
						</div>
						<div
							className='cartBtn'
							data-id={ data.id }
							data-price={ data.price }
							data-img={ `/static/salsify/${data['Web Images'][0]}-lg.jpg` }
							data-name={ data.title }
							data-open-cart
							data-qty={ this.state.qty }
							>
							<img src={ `/static/btn${data.order}.svg` } />
						</div>
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
						.cartBtn{
							cursor: pointer;
							& img{
								max-width: 80px;
							}
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
