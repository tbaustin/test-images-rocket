import React from 'react'
import Layout from 'components/_layout'
import ProductImages from 'components/product-images'
import queryProduct from 'query-product'

export default class extends React.Component {
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
					</section>
					<style jsx>{`
						.cont{
							lost-utility: clearfix;
						}
						img{
							max-width: 100%;
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
