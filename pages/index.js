import React from 'react'
import Layout from 'components/_layout'
import Product from 'components/product-small'
import getCategory from 'utils/product/get-category'


const productEls = getCategory('broadheads')
	.map((product, key) => {
		return <Product
			data={ product }
			key={ key } />
	})

export default class extends React.Component{
	render(){
		return(
			<Layout home={ true }>
				<div>
					{ productEls }
					<style jsx>{`
						div{
							lost-utility: clearfix;
						}
					`}</style>
				</div>
			</Layout>
		)
	}
}
