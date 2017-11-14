import React from 'react'
import Layout from 'components/_layout'
import ProductImages from 'components/product-images'
import queryProduct from 'utils/product/get-product'
import env from 'json/env'
import Price from 'components/utils/product/price'
import ProductEcomm from 'components/product-ecomm'

export default class extends React.Component {
	static async getInitialProps(req){
		const props = queryProduct(req.query.id)
		return props
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
						<ProductEcomm product={this.props} description={description} float />
					</section>
					<style jsx>{`
						.cont{
							lost-utility: clearfix;
						}
						img{
							max-width: 100%;
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
