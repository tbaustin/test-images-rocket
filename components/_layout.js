import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { initGA, logPageView } from 'utils/analytics'
import pkg from '../package.json'
import style from '../styles/index.css'
import fastclick from 'react-fastclick'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import settings from 'components/_global-settings'

fastclick()


export default class Layout extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			loading: false
		}
		this.showLoader = this.showLoader.bind(this)
		this.routerDone = this.routerDone.bind(this)
	}
	componentWillMount() {
		// Progress bar
		clearTimeout(this.timeout)
		Router.onRouteChangeStart = url => {
			clearTimeout(this.timeout)
			this.timeout = setTimeout(this.showLoader.bind(this), 100)
		}
		Router.onRouteChangeComplete = this.routerDone
		Router.onRouteChangeError = this.routerDone
	}
	componentDidMount(){
		// Google Analytics
		if(!window.GA_INITIALIZED){
			initGA()
			window.GA_INITIALIZED = true
		}
		logPageView()

		console.log(window.zygote)

		// Zygote
		if('zygote' in window){
			zygote.findButtons()
			zygote.findQty()
			zygote.findIcons()
			// Zygote init
			if (!zygote.api) {
				console.log(process.env.ZYGOTE_API)
				zygote.api = process.env.ZYGOTE_API
				zygote.properties = { site: 'rocketbroadheads' }
			}
		}

		// Progress bar
		clearTimeout(this.timeout)
	}
	componentWillUnmount() {
		clearTimeout(this.timeout)
	}
	showLoader(){
		clearTimeout(this.timeout)
		this.setState({ loading: true })
	}
	routerDone(){
		clearTimeout(this.timeout)
		this.setState({ loading: false })
	}
	render(){
		const delimeter = ' | '
		const siteName = pkg.title || pkg.name
		let pageTitle = this.props.title
		let title
		if(pageTitle){
			title = `${pageTitle}${delimeter}${siteName}`
		}
		else if(pkg.description){
			title = `${siteName}${delimeter}${pkg.description}`
		}
		else{
			title = siteName
		}
		return (
			<div className='cont'>
				<Head>
					<title>{ title }</title>
					<meta charSet='utf-8' />
					<meta name='viewport' content='initial-scale=1.0, width=device-width' />
					<meta content={ this.props.description ? this.props.description : pkg.description } name='description' />
					<style>{ style }</style>
					<link rel='icon' type='image/png' href='/static/favicon.png' />
					<link type='text/css' rel='stylesheet' href='https://zygote.netlify.com/zygote-v1.css' />
					<link href="https://fonts.googleapis.com/css?family=Jura:400|Teko:400,700" rel="stylesheet" />
				</Head>
				<Header home={ this.props.home } />
				<main>
					{ this.props.children }
				</main>
				<div className='footer'>
					<Footer />
				</div>
				<div className={ `loader ${this.state.loading ? 'loading' : ''}` } />
				<style jsx>{`
					main{
						max-width: 1200px;
						padding: 30px;
						margin: auto;
						margin-bottom: 30px;
					}
					.loader{
						box-sizing: border-box;
						position: fixed;
						top: 0;
						right: 0;
						left: 0;
						z-index: 3;
						height: 13px;
						overflow: hidden;
						background-color: #333;
						display: none;
						&:before{
							content: '';
							position: absolute;
							top: 0;
							left: 0;
							bottom: 0;
							width: 100%;
							background-color: #c31129;
							transform: translate(-100%, 0);
							border-bottom: 1px solid #333;
						}
					}
					.loading{
						display: block;
						&:before{
							animation: loading 3s linear infinite;
						}
					}
					@keyframes loading{
						from{
							transform: translate(-100%, 0);
						}
						to{
							transform: translate(0%, 0);
						}
					}
					@media(min-width: 800px){
						/* Sticky footer */
						.cont{
							min-height: 100vh;
							position: relative;
							padding-bottom: 150px;
						}
						.footer{
							position: absolute;
							bottom: 0;
							right: 0;
							left: 0;
						}
					}
				`}</style>
				<script src='https://zygote.netlify.com/zygote-v1.js'></script>
			</div>
		)
	}
}
