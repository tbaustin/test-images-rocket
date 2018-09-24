import React from "react"

export default class TwitterLogo extends React.Component {
	render() {
		const scale = this.props.sizeScale || 1
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20.76 16.87"
				height={16.87 * scale}
				width={20.76 * scale}
			>
				<title>Twitter logo</title>
				<g id="Layer_2" data-name="Layer 2">
					<g id="Layer_1-2" data-name="Layer 1">
						<path
							fill="#ffffff"
							d="M6.53,16.87A12,12,0,0,0,18.65,4.75c0-.18,0-.37,0-.55A8.67,8.67,0,0,0,20.76,2a8.5,8.5,0,0,1-2.45.67A4.27,4.27,0,0,0,20.18.31a8.53,8.53,0,0,1-2.7,1,4.26,4.26,0,0,0-7.26,3.88A12.09,12.09,0,0,1,1.44.78,4.26,4.26,0,0,0,2.76,6.47,4.23,4.23,0,0,1,.83,5.93s0,0,0,.05a4.26,4.26,0,0,0,3.42,4.18,4.25,4.25,0,0,1-1.92.07,4.26,4.26,0,0,0,4,3A8.55,8.55,0,0,1,1,15,8.67,8.67,0,0,1,0,15a12.06,12.06,0,0,0,6.53,1.91"
						/>
					</g>
				</g>
			</svg>
		)
	}
}
