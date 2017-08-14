import React from 'react'
import styles from './_global-settings'

export default class extends React.Component {
	render(){
		return (
			<h2>
				{this.props.children}
				<style jsx>{`
					h1{
						font-family: 'Teko';
					}
				`}</style>
			</h2>
		)
	}
}
