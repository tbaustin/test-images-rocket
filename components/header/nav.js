import React from 'react'
import Link from 'next/link'
import settings from '../../styles/settings'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.onClick = this.onClick.bind(this)
	}
	onClick(e){
		if(e.target.tagName !== 'A'){

		}
	}
	render(){
		return (
			<nav className={ this.props.showing ? 'showing' : '' } onClick={ this.props.onClick }>
				<section>
					<Link prefetch href={{
							pathname: '/product',
							query: { product: 'ar100sh' }
						}} as='/product/ar100sh'>
						<a>Steelhead&reg;</a>
					</Link>
					<Link prefetch href={{
							pathname: '/product',
							query: { product: 'ar100sw' }
						}} as='/product/ar100sw'>
						<a>Sidewinder&reg;</a>
					</Link>
					<Link prefetch href={{
							pathname: '/product',
							query: { product: 'ar100us' }
						}} as='/product/ar100us'>
						<a>Ultimate Steel&reg;</a>
					</Link>
					<Link prefetch href={{
							pathname: '/product',
							query: { product: 'ar100hh' }
						}} as='/product/ar100hh'>
						<a>Hammerhead&reg;</a>
					</Link>
				</section>
				<style jsx>{`
					nav{
						position: fixed;
						z-index: 20;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						background-color: rgb(0, 0, 0, .8);
						display: none;
					}
					section{
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						text-align: center;
						text-transform: uppercase;
						font-size: 3vw;
						letter-spacing: 1vw;
						font-weight: bold;
						font-style: italic;
					}
					a{
						color: #fff;
						display: block;
						padding: 3vh 0;
						border-bottom: 1px solid #fff;
						&:last-of-type{
							border-bottom: 0;
						}
						&:hover{
							color: #860e1b;
						}
					}
					.showing{
						display: block;
					}
					@media(min-width: ${settings.navBreakpoint}px){
						nav{
							position: absolute;
							right: 100px;
							top: 50%;
							transform: translate(0, -50%);
							bottom: auto;
							left: auto;
							display: inline-block;
							z-index: 1;
							background: transparent;
							max-width: 1200px;
						}
						section{
							position: static;
							display: inline-block;
							transform: none;
							font-size: 1em;
							letter-spacing: 3px;
						}
						a{
							display: inline-block;
							padding: 0 20px;
							border: 0;
							&:first-of-type{
								padding-left: 0;
							}
							&:last-of-type{
								padding-right: 0;
							}
						}
					}
				`}</style>
			</nav>
		)
	}
}
