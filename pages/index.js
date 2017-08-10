import React from 'react'
import Layout from 'components/_layout'
import Product from 'components/product-small'
import { broadheads } from '../config/product.config'

const productIds = broadheads.product
const productEls = productIds.map(id => {
	id = id.toLowerCase()
	const data = require(`../json/product/${id}.json`)
	let img = data['Web Images']
	if(typeof data['Web Images'] === 'object'){
		img = img[0]
	}
	return <Product
		id={ id }
		name={ data['Item Name'] }
		img={ img }
		price={ Number(data['MSRP']) }
		key={ id } />
})

export default class extends React.Component{
	shouldComponentUpdate(nextProps, nextState){
		return false
	}
	render(){
		return(
			<Layout>
				<div>
					{ productEls }
				</div>
			</Layout>
		)
	}
}
