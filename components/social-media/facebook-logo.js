import React from 'react';

export default class extends React.Component {
	render() {
		const scale = this.props.sizeScale || 1;
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.96 20.96" height={20.96*scale} width={20.96*scale}>
			    <title>Facebook Logo</title>
			    <g id="Layer_2" data-name="Layer 2">
			        <g id="Layer_1-2" data-name="Layer 1">
			            <rect id="Blue" fill="#ffffff" width="20.96" height="20.96" rx="1.16" ry="1.16" />
			            <path id="f" fill="#231f20" d="M14.46,21V12.84h2.72l.41-3.16H14.46v-2c0-.92.25-1.54,1.57-1.54H17.7V3.29a22.42,22.42,0,0,0-2.44-.12A3.81,3.81,0,0,0,11.2,7.35V9.68H8.46v3.16H11.2V21Z" />
			        </g>
			    </g>
			</svg>
		)
	}
}