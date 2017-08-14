import React from 'react'
import Head from 'next/head'
import { initGA, logPageView } from 'utils/analytics'
import pkg from '../package.json'
import style from '../styles/index.css'
import fastclick from 'react-fastclick'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

fastclick()

export default class Layout extends React.Component {
	componentDidMount(){
		// Google Analytics
		if(!window.GA_INITIALIZED){
			initGA()
			window.GA_INITIALIZED = true
		}
		logPageView()

		// Zygote
		if('zygote' in window){
			zygote.findButtons()
			zygote.findQty()
			zygote.findIcons()
		}
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
					<link type='text/css' rel='stylesheet' href='https://zygote.netlify.com/zygote-v1.css' />
				</Head>
				<Header home={ this.props.home } />
				<main>
					{ this.props.children }
				</main>
				<div className='footer'>
					<Footer />
				</div>
				<style jsx>{`
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
					main{
						max-width: 1200px;
						padding: 30px;
						margin: auto;
					}
				`}</style>
				<script src='https://zygote.netlify.com/zygote-v1.js'></script>
			</div>
		)
	}
}
