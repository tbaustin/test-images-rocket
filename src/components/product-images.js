import React from "react"
import { css } from "emotion"

import Loader from "./loader"

function getUrl(id) {
	return id
		? id.includes(`https://images.salsify.com`)
			? id
			: `/static/img/product/w_400/${id}.png`
		: `/static/img/product/w_400/${id}.png`
}

function subImg(id, onClick) {
	const img = id.includes(`https://images.salsify.com`)
		? id
		: `/static/img/product/w_400/${id}.png`
	return (
		<a className={imageStyles} href={getUrl(id, `lg`)} key={id} onClick={onClick}>
			<img src={img} key={id} />
		</a>
	)
}

export default class ProductImages extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
		}
		this.onClick = this.onClick.bind(this)
		this.imgLoad = this.imgLoad.bind(this)
	}
	onClick(e) {
		clearTimeout(this.timeout)
		this.timeout = setTimeout(this.showLoader.bind(this), 100)
		e.preventDefault()
		let target = e.target
		if (target.tagName === `IMG`) {
			target = target.parentElement
		}
		this.main.src = target.href
	}
	showLoader() {
		this.setState({
			loading: true,
		})
	}
	imgLoad() {
		clearTimeout(this.timeout)
		this.setState({
			loading: false,
		})
	}
	render() {
		this.images = this.props.images
		if (typeof this.images === `string`) {
			this.images = [this.images]
		}
		this.mainImg = this.images[0]
		if (this.images.length > 3) {
			this.images.length = 3
		}
		if (this.images.length > 1) {
			this.thumbnails = this.images.map(id => {
				return subImg(id, this.onClick)
			})
		} else {
			this.thumbnails = ``
		}

		return (
			<section className={`${mainStyles} ${this.state.loading ? `loading` : ``}`}>
				<div className="main">
					<img
						src={getUrl(this.mainImg, `lg`)}
						ref={img => {
							this.main = img
						}}
						onLoad={this.imgLoad}
					/>
					{this.state.loading ? <Loader /> : ``}
				</div>
				<div className="sub">{this.thumbnails}</div>
			</section>
		)
	}
}

const imageStyles = css`
	width: 100%;
	padding: 5px;
	img {
		max-width: 100%;
	}
`

const mainStyles = css`
	.main {
		text-align: center;
		margin-bottom: 20px;
	}
	&.loading {
		& img {
			display: none;
		}
	}
	.sub {
		position: absolute;
		top: 20px;
		left: 20px;
		text-align: center;
		margin-bottom: 20px;
		lost-utility: clearfix;
		width: 12%;
		max-width: 80px;
		max-height: 600px;
	}
	img {
		max-width: calc(100% - 100px);
		max-height: 600px;
	}
	@media (min-width: 500px) {
		.main {
			height: 100%;
			overflow: hidden;
		}
	}
	@media (min-width: 1000px) {
		img {
			max-height: 100%;
		}
		.main {
			width: 100%;
			overflow: hidden;
			height: 100%;
		}
		.sub {
			right: 20px;
			left: auto;
		}
	}
	@media (min-width: 1400px) {
		img {
			max-height: 800px;
		}
	}
`
