import React from 'react'
import { initGA } from 'utils/next/analytics'
import fastclick from 'react-fastclick'
import Head from 'next/head'
import createTitle from 'utils/next/create-page-title'
import createDescription from 'utils/next/create-page-description'
import clientTimeoutError from 'utils/next/client-timeout-error'
import zygoteRefresh from 'utils/next/zygote-refresh'
import NoSSR from 'react-no-ssr'
import { initStock } from 'utils/product/set-stock'
import { initPrice } from 'utils/product/set-price'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import PageLoadBar from 'components/page-load-animation'

fastclick()

export default class Layout extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		initGA()
		clientTimeoutError()
		initStock()
		initPrice()
	}
	render(){
		return (
			<div className='cont'>
				<Head>
					<title>{createTitle('Rocket Broadheads', "We make 'em lethal. You drop 'em quick.", this.props.title)}</title>
					<meta content={createDescription("We make 'em lethal. You drop 'em quick.", this.props.description)} name='description' />
					<link rel='icon' type='image/png' href='/static/img/w_32/favicon.png' />
					<link href="https://fonts.googleapis.com/css?family=Jura:400|Teko:400,700" rel="stylesheet" />
				</Head>
				<Header home={ this.props.home } />
				<main>
					{ this.props.children }
				</main>
				<div className='footer'>
					<Footer />
				</div>
				<NoSSR>
					<PageLoadBar />
				</NoSSR>
				<style jsx>{`
					main{
						max-width: 1200px;
						padding: 30px;
						margin: auto;
						margin-bottom: 30px;
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
			</div>
		)
	}
}
