import React from 'react';

export default class extends React.Component {
	render() {
		const scale = this.props.sizeScale || 1;
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.12 49.66" height={49.66*scale} width={75.12*scale}><title>Asset 1</title>
				<g id="Layer_2" data-name="Layer 2">
					<g id="Layer_1-2" data-name="Layer 1">
						<path fill="#ff671b" d="M29.79,10.44h0c2.29-1.23,17.42-6.88,44.77-.56q.28-2.47.56-4.95C70,3.07,61.47-.14,41.63,0c-18,.14-30.14,3.57-37.5,7Q2.06,25.22,0,43.39C5.15,46,13.3,48.59,25.21,49.52L28.82,19Z"/>
						<path fill="#ff671b" d="M73.35,20.72C56.28,17.25,38,21,38,21v.08c-.29,2.53-.57,5-.86,7.57h0l-.53,4.6a89.64,89.64,0,0,1,9.07-1c.94,0,1.86-.06,2.7,0L46.26,49.48a84.55,84.55,0,0,0,24.4-5L73.35,20.8A.53.53,0,0,1,73.35,20.72Z"/>
					</g>
				</g>
			</svg>
		)
	}
}