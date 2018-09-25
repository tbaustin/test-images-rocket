import React from "react"
import { css } from "emotion"

export default class Number extends React.Component {
	constructor(props) {
		super(props)
		this.state = { error: false }
		this.handleBlur = this.handleBlur.bind(this)
		this.incrementClick = this.incrementClick.bind(this)
		this.decrementClick = this.decrementClick.bind(this)
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
		if (this.props.handleBlur) {
			this.props.handleBlur(e)
		}
	}
	incrementClick() {
		this.input.value = parseInt(this.input.value) + 1
		this.props.handleChange(this.input.value)
	}
	decrementClick() {
		if (this.input.value <= 1) return
		this.input.value = parseInt(this.input.value) - 1
		this.props.handleChange(this.input.value)
	}
	render() {
		return (
			<label
				className={`${styles} ${this.state.error ? `error` : ``}`}
				style={this.props.labelStyle}
			>
				{this.props.label}
				<button type="button" onClick={this.decrementClick}>
					-
				</button>
				<input
					type="number"
					defaultValue={this.props.defaultValue || `1`}
					onBlur={this.handleBlur}
					onChange={e => this.props.handleChange(e.target.value)}
					onClick={this.props.handleClick}
					required={this.props.required ? `required` : ``}
					name={this.props.name}
					placeholder={this.props.placeholder}
					style={this.props.style}
					min={this.props.min}
					max={this.props.max}
					step={this.props.step}
					ref={el => (this.input = el)}
				/>
				<button type="button" onClick={this.incrementClick}>
					+
				</button>
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
		&:after {
			content: "";
			display: block;
			clear: both;
		}
	}
	input {
		display: inline-block;
		outline: 0;
		border: 1px solid #000;
		background-color: rgba(255, 255, 255, 1);
		padding: 5px 10px;
		width: 40px;
		font-size: 1em;
		height: 40px;
		appearance: none;
		text-align: center;
		&:active,
		&:focus {
			border: 1px solid #000;
		}
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		display: none;
		appearance: none;
		margin: 0;
	}
	button {
		appearance: none;
		background: #000;
		border: 0;
		outline: 0;
		display: inline-block;
		user-select: none;
		height: 40px;
		width: 40px;
		color: #fff;
		font-size: 1.1em;
		cursor: pointer;
		&:first-of-type {
			border-radius: 10px 0 0 10px;
		}
		&:last-of-type {
			border-radius: 0 10px 10px 0;
		}
	}
	input,
	button {
		float: left;
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
