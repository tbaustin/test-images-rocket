import React from 'react';
import GoalrillaLogoSimple from 'components/goalrilla-logo-simple';

export default class extends React.Component {
	render() {
		return (
			<div className="footerContact">
				<div className="footerContact__logo">
					<GoalrillaLogoSimple />
				</div>
				<address className="footerContact__address">
					<div className="footerContact__addressSection">
						817 Maxwell Avenue<br />
						Evansville, IN 47710<br />
					</div>
					<div className="footerContact__addressSection">
						<a href="tel:+18888724625" className="footerContact__link">1.888.872.4625</a><br />
					</div>
					<div className="footerContact__addressSection">
						<a href="mailto:basketball@escaladesports.com" className="footerContact__link">basketball@escaladesports.com</a>
					</div>
				</address>
				<style jsx>{`
					.footerContact {
						text-align: center;
					}

					.footerContact__address {
						font-size: 0.7rem;
						font-weight: 600;
						letter-spacing: 1px;
						line-height: 1rem;
						font-style: normal;
						text-transform: uppercase;
					}

					.footerContact__addressSection {
						margin-top: 1rem;
					}

					.footerContact, .footerContact__link {
						color: #fff;
					}

					.footerContact__link {
						text-decoration: none;
					}
				`}</style>
			</div>
		)
	}
}