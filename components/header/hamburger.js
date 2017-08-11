import React from 'react'

export default class extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className={`${this.props.showing ? 'active' : ''} ${this.props.className ? this.props.className : ''} ${this.props.home ? 'home' : ''} hamburger hamburger--spin js-hamburger`} onClick={ this.props.onClick }>
				<div className='hamburger-box'>
					<div className='hamburger-inner'></div>
				</div>
				<style jsx>{`
					.hamburger{
						position: absolute;
						top: 50%;
						left: 30px;
						transform: translate(0, -50%);
						font: inherit;
						display: inline-block;
						overflow: visible;
						margin: 0;
						padding: 0;
						cursor: pointer;
						transition-timing-function: linear;
						transition-duration: .15s;
						transition-property: opacity,filter,transform;
						text-transform: none;
						color: inherit;
						border: 0;
						background-color: transparent;
						&:hover{
							& .hamburger-inner,
							& .hamburger-inner:after,
							& .hamburger-inner:before {
								background-color: #860e1b;
							}
						}
					}
					.home{
						&:hover{
							& .hamburger-inner,
							& .hamburger-inner:after,
							& .hamburger-inner:before {
								background-color: #fff;
							}
						}
					}
					.hamburger-box{
						position: relative;
						display: inline-block;
						width: 40px;
						height: 24px;
					}
					.hamburger-inner {
						top: 50%;
						display: block;
						margin-top: -2px;
					}
					.hamburger-inner, .hamburger-inner:after, .hamburger-inner:before {
						position: absolute;
						width: 40px;
						height: 4px;
						transition-timing-function: ease;
						transition-duration: .15s;
						transition-property: transform;
						border-radius: 4px;
						background-color: #000;
					}
					.hamburger-inner:before {
						top: -10px;
					}
					.hamburger-inner:after {
						bottom: -10px;
					}
					.hamburger-inner:after, .hamburger-inner:before {
						display: block;
						content: "";
					}
					.hamburger--spin .hamburger-inner {
						transition-timing-function: cubic-bezier(.55,.055,.675,.19);
						transition-duration: .22s;
					}
					.hamburger .hamburger-inner, .hamburger .hamburger-inner:after, .hamburger .hamburger-inner:before {
						background-color: #fff;
					}

					/* Active */
					.active .hamburger-inner {
						transition-delay: .12s;
						transition-timing-function: cubic-bezier(.215,.61,.355,1);
						transform: rotate(225deg);
					}
					.active .hamburger-inner:before {
						top: 0;
						transition: top .1s ease-out,opacity .1s ease-out .12s;
						opacity: 0;
					}
					.active .hamburger-inner:after {
						bottom: 0;
						transition: bottom .1s ease-out,transform .22s cubic-bezier(.215,.61,.355,1) .12s;
						transform: rotate(-90deg);
					}

					/* Scolling */
					.threshold{
						transform: scale(.7) translateY(16px);
					}

				`}</style>
			</div>
		)
	}
}
