import React from 'react'

export default class extends React.Component {
	render(){
		return (
			<div className='zygoteIco'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.77 27.49">
					<g id="Layer_2" data-name="Layer 2"><g id="Content"><path className="cls-1" d="M7.1,6.39V0H0V1.64H5.45v22.2A1.91,1.91,0,1,0,8,26.39H22.15a1.92,1.92,0,1,0,0-1.64H8a1.92,1.92,0,0,0-.9-.9V18.13H23.42a4.67,4.67,0,0,0,4.15-2l5.2-9.72Z"/></g></g>
				</svg>
				<style jsx>{`
					div{
						position: absolute;
						top: 50%;
						right: 30px;
						transform: translate(0, -50%);
						&:hover{
							& .cls-1{
								fill: #860e1b;
							}
						}
					}
					svg{
						width: 33px;
						height: 28px;
						cursor: pointer;
					}
					.cls-1{
						fill: #fff;
					}
				`}</style>
			</div>
		)
	}
}
