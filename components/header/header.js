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
					}
					div{
						lost-column: 1/3;
						padding: 15px 0;
						&:first-of-type{
							padding-left: 30px;
						}
						&:nth-of-type(2){
							text-align: center;
						}
						&:last-of-type{
							padding-right: 30px;
							text-align: right;
						}
					}
				`}</style>
			</header>
		)
	}
}
