import React from 'react';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.props.handleChange(event);
	}
	render() {
		return (
			<select onChange={this.handleChange} value={this.props.selected}>
				<option value="15">15 miles</option>
				<option value="30">30 miles</option>
				<option value="50">50 miles</option>
				<option value="100">100 miles</option>
			</select>
		)
	}
}