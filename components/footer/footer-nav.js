import React from 'react';
import DesktopFooterNav from 'components/footer/footer-desktop-nav';
import MobileFooterNav from 'components/footer/footer-mobile-nav';

export default class extends React.Component {
	render() {
		return (
			<div className="footerNav">
				<div className="footerNav__desktop">
					<DesktopFooterNav />
				</div>
				<div className="footerNav__mobile">
					<MobileFooterNav />
				</div>
				<style jsx>{`
					.footerNav__desktop {
						display: block;
					}

					.footerNav__mobile {
						display: none;
					}

					@media screen and (max-width: 900px) {
						.footerNav__desktop {
							display: none;
						}

						.footerNav__mobile {
							display: block;
						}
					}
				`}</style>
			</div>
		)
	}
}