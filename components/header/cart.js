import React from 'react'

export default class extends React.Component {
	shouldComponentUpdate(nextProps, nextState){
		return false
	}
	render(){
		return (
			<div className='zygoteIco'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.77 27.49">
					<g id="Layer_2" data-name="Layer 2"><g id="Content"><path className="cls-1" d="M7.1,6.39V0H0V1.64H5.45v22.2A1.91,1.91,0,1,0,8,26.39H22.15a1.92,1.92,0,1,0,0-1.64H8a1.92,1.92,0,0,0-.9-.9V18.13H23.42a4.67,4.67,0,0,0,4.15-2l5.2-9.72Z"/></g></g>
				</svg>
				<div className='zygoteQty'></div>
				<style jsx>{`
					.zygoteIco{
						position: absolute;
						top: 50%;
						right: 30px;
						transform: translate(0, -50%);
						&:hover{
							& .cls-1{
								fill: #860e1b;
							}
							& .zygoteQty{
								background-color: #860e1b;
							}
						}
					}
					.zygoteQty{
						position: absolute;
						top: -5px;
						right: 4px;
						font-size: .75em;
						font-weight: bold;
						border: 2px solid #333;
						border-radius: 100%;
						width: 20px;
						text-align: center;
						height: 20px;
						background-color: #fff;
						color: transparent;
						transform: scale(0);
						transition: transform .3s;
					}
					.zygoteHasQty{
						transform: scale(1);
						color: #333;
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
