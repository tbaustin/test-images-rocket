import React from 'react'
import ReactDOM from 'react-dom'
import settings from './_global-settings'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			video: false
		}
	}
	componentDidMount(){
		if('mixBlendMode' in document.body.style){
			this.setState({
				video: true
			})
		}
	}
	render(){
		return (
			<div ref={ el => this.el = el }>
				{
					this.state.video ?
					<video autoPlay>
						<source src='/static/splat.webm' type='video/webm' />
						<source src='/static/splat.mp4' type='video/mp4' />
					</video> :
					''
				}
				<style jsx>{`
					div{
						position: absolute;
						left: -190px;
						top: -150px;
					}
					video{
						mix-blend-mode: screen;
						width: 1300px;
					}
				`}</style>
			</div>
		)
	}
}
