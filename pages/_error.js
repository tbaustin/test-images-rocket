import React from 'react'
import Layout from 'components/_layout'

function getErrorMessage(statusCode) {
	const errorCodes = {
		'400': 'Bad request',
		'401': 'Unauthorized',
		'403': 'Forbidden',
		'404': 'Page not found',
		'500': 'Internal server error',
		'502': 'Bad gateway',
		'503': 'Service unavailable',
		'504': 'Gateway timeout'
	}
	return errorCodes[statusCode] || '';
}
export default class Error extends React.Component {
	static getInitialProps ({ res, jsonPageRes }) {
		const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null);
		return { statusCode }
	}
	render () {
		return (
			<Layout>
				<div className="errorPage">
					<p className="errorPage__error">{
						this.props.statusCode
						? `A ${this.props.statusCode} error occurred on the server`
						: 'An error occurred on the client'
					}</p>
					<p className="errorPage__explanation">{getErrorMessage(this.props.statusCode)}</p>
				</div>
				<style jsx>{`
					.errorPage {
						text-align: center;
						padding: 30vh 0 40vh 0;
					}

					.errorPage__error {
						font-weight: bold;
						font-size: 1.5rem;
					}
				`}</style>
			</Layout>
		)
	}
}