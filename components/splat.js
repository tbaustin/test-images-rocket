import React from 'react'
import ReactDOM from 'react-dom'
import settings from './_global-settings'
import raf from 'raf'

const transThreshold = 10
const colorThreshold = 50
const lightThreshold = 60

function createVideo(){
	const video = document.createElement('video')
	video.innerHTML = `
		<source src='/static/splat.webm' type='video/webm' />
		<source src='/static/splat.mp4' type='video/mp4' />
	`
	return video
}

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			playing: false
		}
		this.tick = this.tick.bind(this)
	}
	componentDidMount(){
		console.log('componentDidMount()')
		this.setState({
			playing: true
		})
		setTimeout(() => {
			this.canvas.className = 'active'
		}, 100)
		this.video = createVideo()
		this.canvas.width = 1280
		this.canvas.height = 720
		this.tempCanvas = document.createElement('canvas')
		this.tempCanvas.width = this.canvas.width
		this.tempCanvas.height = this.canvas.height
		this.tempCtx = this.tempCanvas.getContext('2d')
		this.ctx = this.canvas.getContext('2d')
		this.tick()
		this.video.play()
	}
	componentWillUnmount(){
		this.setState({
			playing: false
		})
	}
	tick() {
		if(!this.canvas || !this.tempCanvas) return
		this.canvas.width = this.canvas.width
		// Delete!
		this.tempCanvas.width = this.tempCanvas.width
		this.tempCtx.drawImage(this.video, 0, 0)
		const img = this.tempCtx.getImageData(0, 0, 1280, 720)
		const data = img.data
		let i
		let avg
		for (i = 0; i < data.length; i += 4){
			if (
				data[i] <= transThreshold &&
				data[i + 1] <= transThreshold &&
				data[i + 2] <= transThreshold
			) {
				img.data[i + 3] = 0
			}
			else if (
				data[i] <= colorThreshold &&
				data[i + 1] <= colorThreshold &&
				data[i + 2] <= colorThreshold
			){
				avg = (data[i] + data[i + 1] + data[i + 2]) / 2
				img.data[i + 3] = avg * 3
			}
			else if (
				data[i] >= lightThreshold &&
				data[i + 1] >= lightThreshold &&
				data[i + 2] >= lightThreshold
			){
				img.data[i] = 255
				img.data[i + 3] = 100
			}
		}
		this.ctx.putImageData(img, 0, 0)
		raf(this.tick)
	}
	render(){
		return (
			<div>
				<canvas ref={ el => this.canvas = el } />
				<style jsx>{`
					div{
						position: absolute;
						left: -190px;
						top: -150px;
					}
					canvas{
						width: 1280px;
						height: 720px;
						opacity: 0;
						transition: opacity .5s;
						&.active{
							opacity: 1;
						}
					}
				`}</style>
			</div>
		)
	}
}
