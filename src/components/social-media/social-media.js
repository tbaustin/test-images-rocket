import React from "react"
import { css } from "emotion"
import { IconContext } from "react-icons"
import { FaYoutube } from "react-icons/fa"

// import TwitterLogo from "components/social-media/twitter-logo"
import FacebookLogo from "components/social-media/facebook-logo"
// import InstagramLogo from "components/social-media/instagram-logo"

export default class SocialMedia extends React.Component {
	render() {
		return (
			<div className={styles}>
				<ul className="socialMedia__list">
					{/* <li className="socialMedia__item">
						<TwitterLogo />
					</li> */}
					<li className="socialMedia__item">
						<FacebookLogo />
					</li>
					<li className="socialMedia__item">
						<IconContext.Provider
							value={{ style: { color: `#fff`, height: `25px`, width: `25px` } }}
						>
							<FaYoutube />
						</IconContext.Provider>
					</li>
					{/* <li className="socialMedia__item">
						<InstagramLogo />
					</li> */}
				</ul>
			</div>
		)
	}
}

const styles = css`
	text-align: right;
	.socialMedia__list {
		list-style: none;
		padding: 0;
	}
	.socialMedia__item {
		display: inline-block;
		vertical-align: middle;
		margin-left: 0.7rem;
		cursor: pointer;
	}
	@media screen and (max-width: 900px) {
		text-align: center;
	}
`
