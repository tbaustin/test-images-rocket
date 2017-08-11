import React from 'react'
import Layout from 'components/_layout'
import Product from 'components/product-small'
import { broadheads } from '../config/product.config'
import queryProduct from 'query-product'


const productEls = queryProduct({})
	.map((product, key) => {
		return <Product
			data={ product }
			key={ key } />
	})

export default class extends React.Component{
	shouldComponentUpdate(nextProps, nextState){
		return false
	}
	render(){
		return(
			<Layout home={ true }>
				<div>
					{ productEls }
				</div>
			</Layout>
		)
	}
}
