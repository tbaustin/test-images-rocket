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
	}
	shouldComponentUpdate(nextProps, nextState){
		return false
	}
	render(){
		console.log('Rendering layout')
		const siteName = pkg.title || pkg.name
		return (
			<div>
				<Head>
					<title>{ this.props.title ? `${this.props.title} | ${siteName}` : siteName }</title>
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
				<Footer />
				<style jsx>{`
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
