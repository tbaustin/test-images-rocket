import React from 'react'
import settings from 'components/_global-settings'
import Link from 'next/link'
import ReactDOM from 'react-dom'
import raf from 'raf'
const year = new Date().getFullYear()

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			animating: false
		}
	}
	shouldComponentUpdate(nextProps, nextState){
		return false
	}
	componentDidMount(){
		const upperCanvas = document.querySelector('canvas')
		const lowerCanvas = ReactDOM.findDOMNode(this).querySelector('canvas')
		const context = lowerCanvas.getContext('2d')
		lowerCanvas.width = document.documentElement.clientWidth
		lowerCanvas.height = 300
		function draw(){
			lowerCanvas.width = lowerCanvas.width
			context.drawImage(upperCanvas, 0, 0)
			raf(draw)
		}
		raf(draw)
	}
	render() {
		return (
			<footer>
				<canvas></canvas>
				<section className='inner'>
					<section className='constrain'>
						<div>&copy; { year } <Link href='/' prefetch><a>Rocket Broadheads</a></Link></div>
						<div>
							<Link href='/contact'><a>Contact</a></Link>
							<Link href={{
									pathname: '/page',
									query: { id: 'privacy-policy' }
								}} as='/privacy'><a>Privacy Policy</a></Link>
							<Link href='/legal'><a>Legal</a></Link>
							<Link href={{
									pathname: '/page',
									query: { id: 'terms-of-service' }
								}} as='/terms'><a>Terms of Service</a></Link>
						</div>
					</section>
				</section>
				<style jsx>{`
					footer{
						color: #fff;
						font-style: italic;
						text-transform: uppercase;
						font-size: .9em;
					}
					.inner{
						background-color: ${settings.red};
					}
					.constrain{
						lost-utility: clearfix;
						max-width: 1200px;
						padding: 30px;
						margin: auto;
					}
					div{
						text-align: center;
						&:first-of-type{
							margin-bottom: 20px;
						}
					}
					a{
						color: #fff;
						font-weight: normal;
						padding: 0 12px;
						&:first-of-type{
							padding-left: 0;
						}
						&:last-of-type{
							padding-right: 0;
						}
					}
					canvas{
						width: 100%;
						height: ${settings.canvasHeight};
						filter: FlipV;
						position: relative;
						display: block;
						z-index: -1;
						user-select: none;
					}
					@media(min-width:1200px){
						div{
							lost-column: 1/2;
							text-align: left;
							&:last-of-type{
								text-align: right;
							}
						}
					}
				`}</style>
			</footer>
		)
	}
}
