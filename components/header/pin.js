import React from 'react'

export default class extends React.Component {
	render(){
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.56 21.61" className={ this.props.className }>
				<g>
					<g>
						<path className="cls-1" d="M7.21,0c.46.08.93.13,1.38.26a6.55,6.55,0,0,1,3.9,2.87,6.9,6.9,0,0,1,.78,5.73,28.36,28.36,0,0,1-2,5.18,71.06,71.06,0,0,1-4.2,7.38c-.18.28-.34.28-.53,0a47.05,47.05,0,0,1-5.22-9.13A17,17,0,0,1,.05,7.72,6.82,6.82,0,0,1,4.14.54,6.31,6.31,0,0,1,6.2,0l.16,0ZM6.78,10.07A3.14,3.14,0,1,0,3.65,6.92,3.14,3.14,0,0,0,6.78,10.07Z"/>
					</g>
				</g>
				<style jsx>{`
					svg{
						width: 50px;
						height: 34px;
						transform: scale(1) translateY(0, 0);
						transition: transform .3s;
					}
					.cls-1{
						fill: #fff;
					}
					.threshold{
						transform: scale(.7) translate(17px, 17px);
					}
				`}</style>
			</svg>
		)
	}
}
