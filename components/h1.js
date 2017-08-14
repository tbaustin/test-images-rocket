import React from 'react'
import styles from './_global-settings'

export default class extends React.Component {
	render(){
		return (
			<h1>
				{ this.props.children }
				<style jsx>{`
					h1{
						font-size: 3em;
						margin-top: 0;
						margin-bottom: 20px;
						font-family: 'Teko';
					}
				`}</style>
			</h1>
		)
	}
}
