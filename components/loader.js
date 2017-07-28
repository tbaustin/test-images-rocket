import React from 'react'

export default class extends React.Component {
	render(){
		return (
			<div className='root'>
				<div></div>
				<div></div>
				<div></div>
				<style jsx>{`
					.root{
						margin: 75px auto;
						width: 70px;
						text-align: center;
						& > div{
							width: 18px;
							height: 18px;
							background-color: #666;
							border-radius: 100%;
							display: inline-block;
							margin-right: 7px;
							animation: bouncedelay 1.4s infinite ease-in-out both;
							&:nth-of-type(1){
								animation-delay: -0.32s;
							}
							&:nth-of-type(2){
								animation-delay: -0.16s;
							}
							&:last-of-type{
								margin-right: 0;
							}
						}
					}
					@keyframes bouncedelay {
						0%, 80%, 100% {
							transform: scale(0);
						} 40% {
							transform: scale(1.0);
						}
					}
				`}</style>
			</div>
		)
	}
}
