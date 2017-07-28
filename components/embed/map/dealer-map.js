import React from 'react'
import fetch from 'isomorphic-fetch'
import Map from 'components/embed/map/map'

/* Setup marker objects to pass to a generic Map component */
function createMarkers(data, brand) {
	const markers = [];
	for (let dealer of data.results) {
		markers.push({
			type: 'dealer',
			lat: dealer.latitude,
			lng: dealer.longitude,
			name: dealer.name,
			dealerLevel: dealer.brand[brand].dealer_level,
			address: {
				address: dealer.address,
				city: dealer.city,
				state: dealer.state,
				zip: dealer.zip,
				country: dealer.country
			},
			phone: dealer.phone,
			web: dealer.web,
			email: dealer.email
		});
	}
	return markers;
}

function fetchDealers(brand, zip, distance) {
	const endpoint = 'https://apis.escaladesports.com/v1/dealers/prox/' + brand + '/' + zip + '/' + distance;
	return fetch(endpoint).then(response => {
		if (response.status >= 400) {
			throw new Error('Bad response from server');
		}
		return response.json();
	});
}

function fetchCoordsFromZip(zip) {
	const endpoint = 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:' + zip + '&sensor=false';
	return fetch(endpoint).then(response => {
		if (response.status >= 400) {
			throw new Error('Bad response from server');
		}
		return response.json();
	})
}

function fetchMarkers(brand, zip, distance) {
	return fetchDealers(brand, zip, distance)
	.then(dealerData => {
		return createMarkers(dealerData, brand);
	}).catch(err => {
		console.error('Error creating dealer markers: '+err);
	});
}

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			markers: [],
			center: {}
		}
	}
	updateMarkers(brand, zip, distance) {
		return fetchMarkers(brand, zip, distance).then(markers => {
			this.setState({markers});
		});
	}
	updateCenter(zip) {
		return fetchCoordsFromZip(zip).then(zipData => {
			this.setState({center: zipData.results[0].geometry.location});
		});
	}
	componentWillReceiveProps(nextProps) {
		const newZip = (this.props.zip !== nextProps.zip);
		if (newZip || (this.props.distance !== nextProps.distance)) {
			console.log('updating markers and center');
			this.updateMarkers(nextProps.brand, nextProps.zip, nextProps.distance);
			this.updateCenter(nextProps.zip);
		}
	}
	componentDidMount() {
		this.updateMarkers(this.props.brand, this.props.zip, this.props.distance);
		this.updateCenter(this.props.zip);
	}
	render() {
		return (
			<div>
				<Map center={this.state.center} mapStyles={this.props.mapStyles} markers={this.state.markers}></Map>
			</div>
		)
	}
}
