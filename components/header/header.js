import Link from 'next/link'
import React from 'react'
import Logo from 'components/header/logo'
import Cart from 'components/header/cart'
import Hamburger from 'components/header/hamburger'
import Wave from 'components/wave'
import Nav from 'components/header/nav'
import Splat from 'components/splat'
import settings from '../../styles/settings'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			showing: false
		}
		this.toggleNav = this.toggleNav.bind(this)
		this.hideNav = this.hideNav.bind(this)
	}
	toggleNav(){
		this.setState({
			showing: !this.state.showing
		})
	}
	hideNav(){
		console.log('hiding!')
		this.setState({
			showing: false
		})
	}
	componentDidMount() {
		window.addEventListener('resize', this.hideNav)
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.hideNav)
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
									<Splat />
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
							(process.env.DISABLE_ECOMMERCE) ?
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
				{
					this.state.showing ?
						<style>{`
						body{
							overflow: hidden;
						}
					`}</style>
						: ''
				}
				<style jsx>{`
					.bar{
						background: url('/static/header-bg.jpg') no-repeat center center;
						background-size: cover;
						width: 100%;
						overflow: hidden;
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
						background: url('/static/home-bg.jpg') no-repeat bottom left;
						background-size: cover;
					}
					.splatCont{
						user-select: none;
					}
					h1{
						position: absolute;
						z-index: 3;
						text-align: center;
						left: 0;
						right: 0;
						top: 8vh;
						font-family: 'Teko';
						letter-spacing: .3vw;
						font-size: 10vw;
						line-height: 10vw;
						text-shadow: 3px 3px 10px rgba(0, 0, 0, .7);
					}
					@media(min-width:700px){
						h1{
							top: 10vh;
							font-size: 4vw;
							line-height: 5vw;
						}
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
