import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'components/embed/map/marker'

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state
		this.createMapOptions = this.createMapOptions.bind(this);
	}
	static defaultProps = {
		zoom: 11,
	}

	createMapOptions(maps) {
		return {
			styles: this.props.mapStyles
		}
	}
	
	render() {
		const markers = this.props.markers.map(marker => (
			<Marker lat={marker.lat} lng={marker.lng} type={marker.type} level={marker.dealerLevel} />
		));
		return (
			<div>
				<GoogleMapReact options={this.createMapOptions} center={this.props.center} defaultZoom={this.props.zoom}>
				{markers}
				</GoogleMapReact>
				<style jsx>{`
					div{
						height: 800px;
						width: 100%;
						margin: 15px 0;
					}
				`}</style>
			</div>
		);
	}
}
