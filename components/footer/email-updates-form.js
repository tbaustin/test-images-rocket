import React from 'react';

export default class extends React.Component {
	render() {
		return (
			<form className="emailUpdates">
				<label htmlFor="emailUpdates-email" className="emailUpdates__label">Sign up for email updates</label>
				<input id="emailUpdates-email" type="text" className="emailUpdates__input" />
				<button type="submit" className="emailUpdates__submit">Go</button>
				<style jsx>{`
					.emailUpdates {
						text-align: right;
						color: #fff;
					}

					.emailUpdates__label, .emailUpdates__submit {
						text-transform: uppercase;
					}

					.emailUpdates__label {
						display: block;
						margin-bottom: 0.5rem;
						font-size: 0.7rem;
						font-weight: 500;
						letter-spacing: 0.5px;
					}

					.emailUpdates__input, .emailUpdates__submit {
						display: inline-block;
						vertical-align: middle;
						box-sizing: border-box;
						height: 1.7rem;
						border: 1px solid #FF671B;
					}

					.emailUpdates__input {
						width: 10rem;
					}

					.emailUpdates__submit {
						background: #FF671B;
						font-weight: bold;
						font-size: 1rem;
					}

					@media screen and (max-width: 900px) {
						.emailUpdates {
							text-align: center;
						}
					}
				`}</style>
			</form>
		)
	}
}
