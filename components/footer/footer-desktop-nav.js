import React from 'react';

export default class extends React.Component {
	render() {
		return (
			<nav className="footerDesktopNav">
				<ul className="footerDesktopNav__linkGroup">
					<li className="footerDesktopNav__subLinkGroup">
						<div className="footerDesktopNav__subLinkGroupTitle">
							<a href="#" className="footerDesktopNav__mainLink">Hoops</a>
						</div>
						<ul className="footerDesktopNav__subLinks">
							<li>
								<a href="#" className="footerDesktopNav__link">In-ground</a>
							</li>
							<li>
								<a href="#" className="footerDesktopNav__link">Portable</a>
							</li>
							<li>
								<a href="#" className="footerDesktopNav__link">Accessories</a>
							</li>
						</ul>
					</li>
					<li className="footerDesktopNav__subLinkGroup">
						<div className="footerDesktopNav__subLinkGroupTitle">
							<a href="#" className="footerDesktopNav__mainLink">Training</a>
						</div>
					</li>
					<li className="footerDesktopNav__subLinkGroup">
						<div className="footerDesktopNav__subLinkGroupTitle">
							<a href="#" className="footerDesktopNav__mainLink">Dealer Login</a>
						</div>
					</li>
				</ul>
				<ul className="footerDesktopNav__linkGroup">
					<li className="footerDesktopNav__subLinkGroup">
						<div className="footerDesktopNav__subLinkGroupTitle">
							<a href="#" className="footerDesktopNav__mainLink">Services</a>
						</div>
						<ul className="footerDesktopNav__subLinks">
							<li>
								<a href="#" className="footerDesktopNav__link">Buyers guide</a>
							</li>
							<li>
								<a href="#" className="footerDesktopNav__link">Home court</a>
							</li>
							<li>
								<a href="#" className="footerDesktopNav__link">FAQ</a>
							</li>
							<li>
								<a href="#" className="footerDesktopNav__link">Manuals</a>
							</li>
							<li>
								<a href="#" className="footerDesktopNav__link">Warranty</a>
							</li>
						</ul>
					</li>
					<li className="footerDesktopNav__subLinkGroup">
						<div className="footerDesktopNav__subLinkGroupTitle">
							<a href="#" className="footerDesktopNav__mainLink">Store Locator</a>
						</div>
					</li>
				</ul>
				<ul className="footerDesktopNav__linkGroup">
					<li className="footerDesktopNav__subLinkGroup">
						<div className="footerDesktopNav__subLinkGroupTitle">
							<a href="#" className="footerDesktopNav__mainLink">Contact</a>
						</div>
						<ul className="footerDesktopNav__subLinks">
							<li>
								<a href="#" className="footerDesktopNav__link">Why Goalrilla</a>
							</li>
							<li>
								<a href="#" className="footerDesktopNav__link">Meet the team</a>
							</li>
							<li>
								<a href="#" className="footerDesktopNav__link">Get a quote</a>
							</li>
							<li>
								<a href="#" className="footerDesktopNav__link">Request a free catalog</a>
							</li>
							<li>
								<a href="#" className="footerDesktopNav__link">Contact us</a>
							</li>
						</ul>
					</li>
				</ul>
				<style jsx>{`
					.footerDesktopNav {
						text-transform: uppercase;
					}

					.footerDesktopNav__linkGroup, .footerDesktopNav__subLinks {
						list-style: none;
						padding: 0;
					}

					.footerDesktopNav__linkGroup {
						display: inline-block;
						vertical-align: middle;
						margin-right: 2rem;
					}

					.footerDesktopNav__linkGroup:last-of-type {
						vertical-align: top;
					}

					.footerDesktopNav__linkGroup, .footerDesktopNav__subLinkGroup {
						margin-bottom: 1rem;
					}

					.footerDesktopNav a {
						text-decoration: none;
					}

					.footerDesktopNav__link {
						font-size: 0.6rem;
						color: #fff;
					}

					.footerDesktopNav__mainLink {
						font-size: 0.8rem;	
						font-weight: bold;
						color: #FF671B;
					}
				`}</style>
			</nav>
		);
	}
}