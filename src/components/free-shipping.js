import React from "react"
import { css } from "emotion"

export default class FreeShipping extends React.Component {
	render() {
		return (
			<div className={styles}>
				Free shipping on orders over $40 with the coupon code FREESHIP
			</div>
		)
	}
}

const styles = css`
	text-align: center;
	color: #fff;
	background-color: #000;
	padding: 10px;
	margin-bottom: 30px;
	::selection {
		color: #000;
		background-color: #fff;
	}
`
