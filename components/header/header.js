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
				<section className='bar'>
					<header>
						<Nav showing={ this.state.showing } onClick={ this.toggleNav } />
						<div className='ham'>
							<Hamburger onClick={ this.toggleNav } />
						</div>
						<div>
							<Logo />
						</div>
						<div>
							<Cart />
						</div>
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
					}
					div{
						@lost gutter 0;
						lost-column: 1/3;
						min-height: 10px;
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
