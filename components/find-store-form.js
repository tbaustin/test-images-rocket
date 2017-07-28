import React from 'react'

export default class extends React.Component {
	render() {
		return (
			<form className="findStoreForm" onSubmit={this.props.handleSubmit}>
				<input placeholder="Find a local store" className="findStoreForm__input" />
				<button type="submit" className="findStoreForm__submit">Go</button>
				<style jsx>{`
					.findStoreForm__input, .findStoreForm__submit {
						border: 0;
						padding: 0.5rem;
						font-size: 1rem;
					}

					.findStoreForm__input, .findStoreForm__input::placeholder, .findStoreForm__submit {
						color: #fff;
					}

					.findStoreForm__input::placeholder, .findStoreForm__submit {
						text-transform: uppercase;
					}

					.findStoreForm__input {
						font-weight: bold;
						background: #BCBEC0;
					}

					.findStoreForm__submit {
						background: #231f20;
					}
				`}</style>
			</form>
		)
	}
}