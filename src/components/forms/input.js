import React from "react"
import { css } from "emotion"

export default class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = { error: false }
		this.handleBlur = this.handleBlur.bind(this)
	}
	handleBlur(e) {
		if (!this.props.required) return
		if (!e.target.value) {
			this.setState({
				error: `This field is required.`,
			})
		} else {
			this.setState({ error: false })
		}
	}
	render() {
		return (
			<label className={`${styles} ${this.state.error ? `error` : ``}`}>
				{this.props.label}
				<input
					type={this.props.type || `text`}
					onBlur={this.handleBlur}
					required={this.props.required ? `required` : ``}
					name={this.props.name}
				/>
				<div className="msg">{this.state.error}</div>
			</label>
		)
	}
}

const styles = css`
	&label {
		cursor: pointer;
		margin-bottom: 20px;
		display: block;
	}
	input {
		display: block;
		outline: 0;
		border: 1px solid #ccc;
		padding: 5px 10px;
		width: 100%;
		font-size: 1em;
		height: 40px;
		margin: 7px 0px;
		&:active,
		&:focus {
			border: 1px solid #000;
		}
	}
	.msg {
		margin-top: 5px;
		display: none;
		font-size: 0.8em;
	}
	&.error {
		color: #f00;
		& input {
			border: 1px solid red;
			background-color: rgba(255, 0, 0, 0.1);
		}
		& .msg {
			display: block;
		}
	}
`
