import React from 'react';

export default class extends React.Component {
	render() {
		return (
			<nav className="footerMobileNav">
				<ul className="footerMobileNav__links">
					<li className="footerMobileNav__linkGroup">
						<a href="#" className="footerMobileNav__mainLink">Products</a>
						<ul className="footerMobileNav__subLinks">
							<li>
								<a href="#" className="footerMobileNav__link">Hoops</a>
							</li>
							<li>
								<a href="#" className="footerMobileNav__link">Training</a>
							</li>
							<li>
								<a href="#" className="footerMobileNav__link">Accessories</a>
							</li>
						</ul>
					</li>
					<li className="footerMobileNav__linkGroup">
						<a href="#" className="footerMobileNav__mainLink">Buyers guide</a>
					</li>
					<li className="footerMobileNav__linkGroup">
						<a href="#" className="footerMobileNav__mainLink">Dealer login</a>
					</li>
					<li className="footerMobileNav__linkGroup">
						<a href="#" className="footerMobileNav__mainLink">Contact us</a>
						<ul className="footerMobileNav__subLinks">
							<li>
								<a href="#" className="footerMobileNav__link">FAQ</a>
							</li>
							<li>
								<a href="#" className="footerMobileNav__link">Warranty</a>
							</li>
							<li>
								<a href="#" className="footerMobileNav__link">Manuals</a>
							</li>
							<li>
								<a href="#" className="footerMobileNav__link">Get a quote</a>
							</li>
							<li>
								<a href="#" className="footerMobileNav__link">Request a free catalog</a>
							</li>
						</ul>
					</li>
					<li className="footerMobileNav__linkGroup">
						<a href="#" className="footerMobileNav__mainLink">Store locator</a>
					</li>
				</ul>
				<style jsx>{`
					.footerMobileNav {
						text-transform: uppercase;
					}

					.footerMobileNav a {
						text-decoration: none;
					}

					.footerMobileNav__links, .footerMobileNav__subLinks {
						list-style: none;
						padding: 0;
					}

					.footerMobileNav__linkGroup, .footerMobileNav__subLinks, .footerMobileNav__mainLink {
						margin-bottom: 1rem;
					}

					.footerMobileNav__link {
						font-size: 0.67em;
						color: #fff;
					}

					.footerMobileNav__mainLink {
						font-size: 0.8rem;	
						font-weight: bold;
						color: #FF671B;
					}
				`}</style>
			</nav>	
		)
	}
}