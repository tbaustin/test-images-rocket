import React from 'react'
import styles from './_global-settings'

export default class extends React.Component {
	render(){
		return (
			<p>
				{ this.props.children }
				<style jsx>{`
					p{
						line-height: ${styles.lineHeight};
						font-size: ${styles.fontSize};
					}
				`}</style>
			</p>
		)
	}
}
