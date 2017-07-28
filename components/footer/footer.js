import React from 'react';
import FooterNav from 'components/footer/footer-nav';
import FooterContact from 'components/footer/footer-contact';
import FooterMediaUpdates from 'components/footer/footer-media-updates';

export default class extends React.Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer__constrain">
					<div className="footer__group">
						<div className="footer__nav">
							<div className="footer__componentWrapper">
								<FooterNav />
							</div>
						</div>
						<div className="footer__contact">
							<div className="footer__componentWrapper">
								<FooterContact />
							</div>
						</div>
						<div className="footer__mediaUpdates">
							<div className="footer__componentWrapper">
								<FooterMediaUpdates />
							</div>
						</div>
					</div>
					<div className="footer__group">
						<div className="footer__copyright">
							Copyright&copy; 2017 Goalrilla. All rights reserved.
						</div>
						<div className="footer__privacy">
							<a href="/privacy" className="footer__privacyLink">Privacy policy</a>
						</div>
					</div>
				</div>
				<style jsx>{`
					.footer {
						padding: 3rem 3rem 1.7rem 3rem;
						background: #231F20;
						border-top: 4px solid #FF671B;
					}

					.footer__constrain {
						max-width: 1200px;
						margin: 0 auto;
					}

					.footer, .footer__privacyLink {
						color: #fff;
					}

					.footer__group:first-of-type {
						margin-bottom: 4rem;
					}

					.footer__nav, .footer__contact, .footer__mediaUpdates, .footer__copyright, .footer__privacy {
						display: inline-block;
					}

					.footer__nav, .footer__mediaUpdates {
						vertical-align: middle;
						padding-top: 2rem;
					}

					.footer__nav {
						width: 42%;
					}

					.footer__contact {
						vertical-align: top;
						width: 20%;
					}

					.footer__mediaUpdates {
						width: 37%;
					}

					.footer__copyright, .footer__privacy {
						font-size: 0.6rem;
						width: 50%;
					}

					.footer__privacy {
						text-transform: uppercase;
						text-align: right;
					}

					.footer__privacyLink {
						text-decoration: none;
					}

					@media screen and (max-width: 900px) {
						.footer {
							padding-bottom: 3rem;
						}
						.footer__group {
							display: table;
							width: 100%;
						}

						.footer__group, .footer__nav, .footer__contact, .footer__mediaUpdates, .footer__copyright, .footer__privacy {
							width: 100%;
							text-align: center;
						}

						/* padding for display:table-header-group etc. */
						.footer__contact > .footer__componentWrapper {
							padding-bottom:  3.5rem;
						}

						.footer__mediaUpdates > .footer__componentWrapper {
							padding-bottom: 1rem;
						}

						.footer__contact {
							display: table-header-group;
						}

						.footer__mediaUpdates {
							display: table-row-group;
						}

						.footer__nav {
							display: table-footer-group;
						}

						.footer__copyright, .footer__privacy {
							display: block;
							margin: 0 auto;
						}
					}
				`}</style>
			</footer>
		)
	}
}
