import React from 'react'
import Loader from 'components/loader'

function getUrl(id, suffix){
	return `/static/product/${id}-${suffix}.jpg`
}

function subImg(id, onClick, stopBubbling){
	return (
		<a href={ getUrl(id, 'lg') } key={ id } onClick={ onClick }>
			<img src={ getUrl(id, 'tn') } key={ id } />
			<style jsx>{`
				a{
					lost-waffle: 1/3;
				}
				img{
					max-width: 100%;
				}
			`}</style>
		</a>
	)
}

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			loading: false
		}
		this.onClick = this.onClick.bind(this)
		this.imgLoad = this.imgLoad.bind(this)
	}
	onClick(e){
		this.setState({
			loading: true
		})
		e.preventDefault()
		let target = e.target
		if(target.tagName === 'IMG'){
			target = target.parentElement
		}
		this.main.src = target.href
	}
	imgLoad(){
		this.setState({
			loading: false
		})
	}
	render(){
		this.images = this.props.images
		if(typeof this.images === 'string'){
			this.images = [ this.images ]
		}
		this.mainImg = this.images[0]
		if(this.images.length > 4){
			this.images.length = 4
		}
		if(this.images.length > 1){
			this.thumbnails = this.images.map(id => {
				return subImg(id, this.onClick)
			})
		}
		else{
			this.thumbnails = ''
		}
		return (
			<section className={ this.state.loading ? 'loading': '' }>
				<div className='main'>
					<img
						src={ getUrl(this.mainImg, 'lg') }
						ref={(img) => { this.main = img}}
						onLoad={ this.imgLoad }
						/>
					{ this.state.loading ? <Loader /> : '' }
				</div>
				<div className='sub'>
					{ this.thumbnails }
				</div>
				<style jsx>{`
					.main{
						text-align: center;
						margin-bottom: 20px;
					}
					.loading{
						& img{
							display: none;
						}
					}
					.sub{
						text-align: center;
						margin-bottom: 20px;
						lost-utility: clearfix;
					}
					img{
						max-width: 100%;
						max-height: 300px;
					}
					@media(min-width:500px){
						.main{
							height: 300px;
							overflow: hidden;
						}
					}
				`}</style>
			</section>
		)
	}
}
