import React from 'react';
import DealerLocatorForm from 'components/dealer-locator/dealer-locator-form';
import DealerMap from 'components/embed/map/dealer-map';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			zip: this.props.zip,
			distance: this.props.distance
		}
		this.changeSearch = this.changeSearch.bind(this);
	}
	changeSearch(zip, distance) {
		this.setState({zip, distance});
	}
	render() {
		return (
			<div>
				<DealerLocatorForm handleSubmit={this.changeSearch} zip={this.state.zip} />
				<DealerMap mapStyles={this.props.mapStyles} brand={this.props.brand} zip={this.state.zip} distance={this.state.distance} />
			</div>
		)
	}
}