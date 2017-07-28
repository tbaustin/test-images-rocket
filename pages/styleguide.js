import React from 'react'
import Document from 'next/document'
import Head from 'next/head'
import pkg from '../package.json'
import style from '../styles/index.css'

const siteName = pkg.title || pkg.name
const barHeight = 30;

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			width: '100%'
		}
		this.changeSize = this.changeSize.bind(this)
	}
	changeSize(e){
		this.setState({
			width: e.target.style.width
		})
		console.log(e.target.style.width)
	}
	render(){
		return (
			<div>
				<Head>
					<title>{ `Styleguide: ${siteName}` }</title>
					<meta charSet='utf-8' />
					<meta name='viewport' content='initial-scale=1.0, width=device-width' />
					<style>{ style }</style>
					<link type='text/css' rel='stylesheet' href='https://zygote.netlify.com/zygote-v1.css' />
				</Head>
				<iframe src='/styleguide-inner' width={this.state.width}></iframe>
				<ul>
					<li onClick={this.changeSize} style={{ width: '100%' }}>Full</li>
					<li onClick={this.changeSize} style={{ width: 1440 }}>Large Laptop</li>
					<li onClick={this.changeSize} style={{ width: 1024 }}>Laptop</li>
					<li onClick={this.changeSize} style={{ width: 768 }}>Tablet</li>
					<li onClick={this.changeSize} style={{ width: 425 }}>Large Mobile</li>
					<li onClick={this.changeSize} style={{ width: 375 }}>Medium Mobile</li>
					<li onClick={this.changeSize} style={{ width: 320 }}>Small Mobile</li>
				</ul>
				<style>{`
					body{
						overflow: hidden;
						background-color: #666;
					}
				`}</style>
				<style jsx>{`
					ul{
						position: fixed;
						top: 0;
						right: 0;
						left: 0;
						list-style: none;
						margin: 0;
						padding: 0;
						text-align: center;
						background-color: #eee;
						font-size: .8em;
						height: ${barHeight}px;
						line-height: ${barHeight}px;
					}
					li{
						cursor: pointer;
						position: absolute;
						color: transparent;
						top: 0;
						border-right: 1px solid black;
						border-left: 1px solid black;
						left: 50%;
						transform: translate(-50%, 0);
						&:hover{
							color: #fff;
							background-color: #999;
						}
					}
					iframe{
						background-color: #fff;
						border: 0;
						height: 100vh;
						padding-top: ${barHeight}px;
						margin: auto;
						display: block;
						transition: width .3s;
					}
				`}</style>
			</div>
		)
	}
}
