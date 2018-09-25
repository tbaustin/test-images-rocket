import React from "react"
import { css } from "emotion"

export default class Error extends React.Component {
	render() {
		return <div className={styles}>{this.props.message}</div>
	}
}

const styles = css`
	border: 1px solid #f00;
	background-color: rgba(255, 0, 0, 0.1);
	padding: 10px;
	margin-bottom: 20px;
`