import React from 'react'
import styles from './_global-settings'

export default class extends React.Component {
	render(){
		return (
			<h3>
				{ this.props.children }
			</h3>
		)
	}
}
