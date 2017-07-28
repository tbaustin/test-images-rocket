import React from 'react';
import MarkerSvg from './marker-regular.svg'
import PlatinumMarkerSvg from './marker-platinum.svg'

export default class extends React.Component {
	render() {
		let marker;
		if (this.props.type === 'dealer' && this.props.level==='platinum') {
			marker = (<PlatinumMarkerSvg />);
		}
		else {
			marker = (<MarkerSvg />);
		}
		
		return (
			<div>
				<div className="mapMarker">
					{marker}
				</div>
			</div>
		)
	}
}