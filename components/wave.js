import React from 'react'
import ReactDOM from 'react-dom'
import raf from 'raf'
import settings from 'components/_global-settings'

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
		const $this = this
		let unit = 50
		let canvas, context, canvas2, context2,height, width, xAxis, yAxis
		function init(){
			canvas = ReactDOM.findDOMNode($this).querySelector('canvas')
			canvas.width = document.documentElement.clientWidth
			canvas.height = 300
			context = canvas.getContext("2d")
			height = canvas.height
			width = canvas.width
			xAxis = Math.floor(height/2)
			yAxis = 0
			$this.setState({
				animating: true
			})
			raf(draw)
		}
		function draw(){
			context.clearRect(0, 0, width, height)
			drawWave('#860e1b', 1, 3, 0)
			draw.seconds = draw.seconds + .001
			draw.t = draw.seconds*Math.PI
			if($this.state.animating){
				raf(draw)
			}
		}
		draw.seconds = 0
		draw.t = 0
		function drawWave(fillcolor, alpha, zoom, delay){
			context.fillStyle = fillcolor
			context.globalAlpha = alpha

			context.beginPath()
			drawSine(draw.t / 0.5, zoom, delay)
			context.lineTo(width + 10, height)
			context.lineTo(0, height)
			context.closePath()
			context.fill()
		}
		function drawSine(t, zoom, delay){
			let x = t
			let y = Math.sin(x)/zoom
			context.moveTo(yAxis, unit*y+xAxis)

			for(let i = yAxis; i <= width + 10; i += 10){
				x = t+(-yAxis+i)/unit/zoom
				y = Math.sin(x - delay)/3
				context.lineTo(i, unit*y+xAxis)
			}
		}
		init()
	}
	componentWillUnmount(){
		this.setState({
			animating: false
		})
	}
	render() {
		return (
			<div>
				<canvas className='wave'></canvas>
				<style jsx>{`
					canvas{
						width: 100%;
						height: ${settings.canvasHeight};
						transform: scale(1, -1);
						filter: FlipV;
						position: relative;
						z-index: -1;
						user-select: none;
					}
				`}</style>
			</div>
		)
	}
}
