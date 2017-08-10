import React from 'react'
import Layout from 'components/_layout'

export default class extends React.Component {
	shouldComponentUpdate(nextProps, nextState){
		return false
	}
	render(){
		return(
			<Layout>
				<div>
					This is a test
				</div>
			</Layout>
		)
	}
}
