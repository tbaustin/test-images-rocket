import React from 'react'

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayIndex: 0 // current top image to display
		}
		this.shiftUp = this.shiftUp.bind(this);
		this.shiftDown = this.shiftDown.bind(this);
	}
	handleSwitch(image) {
		this.props.handleSwitch(image);
	}
	shiftUp() {
		const newIndex = (this.state.displayIndex > 0 ? this.state.displayIndex - 1 : 0);
		this.setState({displayIndex: newIndex});
	}
	shiftDown() {
		const maxIndex = this.props.images.length - parseInt(this.props.length);
		const newIndex = (this.state.displayIndex < maxIndex ? this.state.displayIndex + 1 : maxIndex);
		this.setState({displayIndex: newIndex});
	}
	render() {
		const thumbs = this.props.images.map(image => (
			<div className="imageSwitcher__thumb">
				<img src={image.thumb} onClick={()=>this.handleSwitch(image)} className="imageSwitcher__thumbImage" />
			</div>
		));

		// trim array of thumbnails to appropriate length
		const trimmedThumbs = thumbs.slice(this.state.displayIndex, this.state.displayIndex + parseInt(this.props.length));

		return (
			// todo add scrolling arrows to change displayIndex
			<div className="imageSwitcher">
				<button className="imageSwitcher__shiftUp" onClick={this.shiftUp}>{'\u25B2'}</button>
				<div className="imageSwitcher__thumbs">
					{trimmedThumbs}
				</div>
				<button className="imageSwitcher__shiftDown" onClick={this.shiftDown}>{'\u25BC'}</button>
				<style jsx>{`
					.imageSwitcher {
						text-align: center;
					}

					.imageSwitcher__shiftUp, .imageSwitcher__shiftDown {
						font-size: 2rem;
						color: #6D6E71;
						background: transparent;
						border: 0;
						cursor: pointer;
					}

					.imageSwitcher__thumbs {
						margin: 2rem auto;
					}
				`}</style>
			</div>
		)
	}
}