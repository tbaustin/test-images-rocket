import React from 'react'
import ImageSwitcher from 'components/product-images/image-switcher'

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImage: this.props.images[0] || ''
		}
		this.handleSwitch = this.handleSwitch.bind(this);
	}

	handleSwitch(image) {
		this.setState({currentImage: image});
	}

	render() {
		return (
			<div className="productImages">
				<div className="productImages__displayImageContainer">
					<img src={this.state.currentImage.large} className="productImages__displayImage" />
				</div>
				<div className="productImages__imageSwitcher">
					<ImageSwitcher images={this.props.images} length={this.props.length || 5} handleSwitch={this.handleSwitch} />
				</div>
				<style jsx>{`
					.productImages__displayImageContainer {
						width: 80%;
					}
					.productImages__displayImage {
						box-sizing: border-box;
						padding-right: 4rem;
						max-height: 35vw;
						max-width: 100%;
					}

					.productImages__displayImageContainer, .productImages__imageSwitcher {
						display: inline-block;
						vertical-align: middle;
					}
				`}</style>
			</div>
		)
	}
}