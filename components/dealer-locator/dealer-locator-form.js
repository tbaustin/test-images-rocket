import React from 'react';
import DistanceSelect from 'components/dealer-locator/distance-select';

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			zip: this.props.zip || '47713',
			distance: this.props.distance || 30
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleZipInputChange = this.handleZipInputChange.bind(this);
		this.handleDistanceInputChange = this.handleDistanceInputChange.bind(this);
	}
	handleSubmit(event) {
		const zip = this.state.zip;
		const distance = this.state.distance;
		event.preventDefault();
		this.props.handleSubmit(this.state.zip, this.state.distance);
	}
	handleZipInputChange(event) {
		this.setState({zip: event.target.value});
	}
	handleDistanceInputChange(event) {
		this.setState({distance: event.target.value});
	}
	render () {
		return (
			<form className="dealerLocatorForm" onSubmit={this.handleSubmit}>
				<input className="dealerLocatorForm__input" type="text" placeholder="FIND A LOCAL STORE" onChange={this.handleZipInputChange} value={this.state.zip || ''} />
				<DistanceSelect selected={this.state.distance} handleChange={this.handleDistanceInputChange} />
				<button className="dealerLocatorForm__submit" type="submit">Go</button>
				<style jsx>{`
					.dealerLocatorForm__submit {
						text-transform: uppercase;
					}
				`}</style>
			</form>
		)
	}
}