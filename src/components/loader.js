import React from "react"
import { css } from "emotion"

import settings from "./_global-settings"

export default class Loader extends React.Component {
	render() {
		return (
			<div className={styles}>
				<div />
				<div />
				<div />
			</div>
		)
	}
}

const styles = css`
	margin: 75px auto;
	width: 70px;
	text-align: center;
	& > div {
		width: 18px;
		height: 18px;
		background-color: ${settings.red};
		border-radius: 100%;
		display: inline-block;
		margin-right: 7px;
		animation: bouncedelay 1.4s infinite ease-in-out both;
		&:nth-of-type(1) {
			animation-delay: -0.32s;
		}
		&:nth-of-type(2) {
			animation-delay: -0.16s;
		}
		&:last-of-type {
			margin-right: 0;
		}
	}

	@keyframes bouncedelay {
		0%,
		80%,
		100% {
			transform: scale(0);
		}
		40% {
			transform: scale(1);
		}
	}
`
