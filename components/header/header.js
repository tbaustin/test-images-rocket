import Link from 'next/link'
import React from 'react'
import Logo from 'components/header/logo'
import Cart from 'components/header/cart'
import Hamburger from 'components/header/hamburger'
import Wave from 'components/wave'
import Nav from 'components/header/nav'
import settings from '../../styles/settings'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			showing: false
		}
		this.toggleNav = this.toggleNav.bind(this)
	}
	toggleNav(){
		this.setState({
			showing: !this.state.showing
		})
	}
	render(){
		return (
			<section className='wrapper'>
				<section className={ `bar ${this.props.home ? 'home' : ''}` }>
					{
						this.props.home ?
						(
							<div>
								<div className='splatCont'>
									<img src='/static/splat.svg' className='splat' />
								</div>
								<h1>We make them lethal.<br />You drop them quick.</h1>
							</div>
						) :
						''
					}
					<header>
						<Nav showing={ this.state.showing } home={ this.props.home } onClick={ this.toggleNav } />
						<div className='ham'>
							<Hamburger onClick={ this.toggleNav } home={ this.props.home } />
						</div>
						<div>
							<Logo home={ this.props.home } />
						</div>
						{
							process.env.DISABLE_ECOMMERCE ?
								'' :
								(
									<div>
										<Cart />
									</div>
								)
						}
					</header>
				</section>
				<Wave />
				<style jsx>{`
					.bar{
						background: url('/static/header-bg.jpg') no-repeat center center;
						background-size: cover;
						width: 100%;
					}
					header{
						lost-utility: clearfix;
						position: relative;
						min-height: 70px;
						user-select: none;
					}
					div{
						@lost gutter 0;
						lost-column: 1/3;
						min-height: 10px;
					}
					.home{
						height: 50vh;
						background: url('/static/home-bg.jpg') no-repeat bottom center;
						background-size: cover;
					}
					.splatCont{
						position: absolute;
						top: 0;
						left: 0;
						width: 35vw;
						height: 35vw;
						user-select: none;
						transform: translate(-20%, -18%);
						border-radius: 100%;
						overflow: hidden;
					}
					.splat{
						width: 100%;
						height: 100%;
					}
					h1{
						position: absolute;
						z-index: 3;
						font-size: 4vw;
						text-align: center;
						left: 0;
						right: 0;
						top: 8vh;
						font-family: 'Teko';
						letter-spacing: .3vw;
						line-height: 4vw;
						text-shadow: 3px 3px 10px rgba(0, 0, 0, .7);
					}
					@media(min-width:700px){
						.home{
							height: 50vh;
						}
					}
					@media(min-width:800px){
						.home{
							height: 60vh;
						}
					}
					@media(min-width:900px){
						.home{
							height: 70vh;
						}
					}
					@media(min-width:1000px){
						.home{
							height: 95vh;
						}
					}
					@media(min-width: ${settings.navBreakpoint}px){
						.bar{
							position: relative;
						}
						header{
							max-width: 1200px;
							margin: auto;
							min-height: 120px;
						}
						.home{
							& header{
								max-width: 100%;
							}
						}
						.ham{
							display: none;
						}
						div{
							&:first-of-type{
								lost-column: 0 0;
							}
							&:nth-of-type(2){
								lost-column: 1/2 0;
							}
							&:last-of-type{
								lost-column: 1/2 2;
							}
							@lost gutter 0;
							lost-column: 1/2;
							min-height: 10px;
						}
					}
				`}</style>
			</section>
		)
	}
}
