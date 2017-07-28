import React from 'react';
import TwitterLogo from 'components/social-media/twitter-logo';
import FacebookLogo from 'components/social-media/facebook-logo';
import InstagramLogo from 'components/social-media/instagram-logo';

export default class extends React.Component {
	render() {
		return (
			<div className="socialMedia">
				<ul className="socialMedia__list">
					<li className="socialMedia__item"><TwitterLogo /></li>
					<li className="socialMedia__item"><FacebookLogo /></li>
					<li className="socialMedia__item"><InstagramLogo /></li>
				</ul>
				<style jsx>{`
					.socialMedia {
						text-align: right;
					}

					.socialMedia__list {
						list-style: none;
						padding: 0;
					}

					.socialMedia__item {
						display: inline-block;
						vertical-align: middle;
						margin-left: 0.7rem;
					}

					@media screen and (max-width: 900px) {
						.socialMedia {
							text-align: center;
						}
					}
				`}</style>
			</div>
		)
	}
}