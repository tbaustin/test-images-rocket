import Link from 'next/link'
import React from 'react'
import Logo from 'components/header/logo'
import Cart from 'components/header/cart'
import Hamburger from 'components/header/hamburger'

export default class extends React.Component {
	render(){
		return (
			<header>
				<div>
					<Hamburger />
				</div>
				<div>
					<Logo />
				</div>
				<div>
					<Cart />
				</div>
				<style jsx>{`
					header{
						background: url('/static/header-bg.jpg') no-repeat center center;
						background-size: cover;
						lost-utility: clearfix;
						position: relative;
						min-height: 70px;
					}
					div{
						@lost gutter 0;
						lost-column: 1/3;
						min-height: 10px;
					}
				`}</style>
			</header>
		)
	}
}
