import React from 'react'
import TabbedBox from 'components/tabbed-box/tabbed-box'

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: props.active || props.tabs[0]
		}
		this.changeActive = this.changeActive.bind(this);
	}
	changeActive(tabName) {
		let match = this.state.active;
		for (let tab of this.props.tabs) {
			if (tab.title === tabName) {
				match = tab;
			}
		}
		this.setState({active: match});
	}
	render() {
		return (
			<div className="tabbedBoxImage">
				<div className="tabbedBoxImage__tabbedBox">
					<TabbedBox tabs={this.props.tabs} active={this.state.active} handleTabs={this.changeActive} />
				</div>

				<div className="tabbedBoxImage__imageContainer">
					<img src={this.state.active.image} className="tabbedBoxImage__image" />
				</div>
				<style jsx>{`
					.tabbedBoxImage__tabbedBox, .tabbedBoxImage__imageContainer {
						display: inline-block;
						vertical-align: top;
					}
					.tabbedBoxImage__tabbedBox {
						box-sizing: border-box;
						width: 60%;
						padding-right: 2rem;
					}

					.tabbedBoxImage__imageContainer {
						width: 40%;
					}

					.tabbedBoxImage__image {
						display: block;
						width: 100%;
					}
				`}</style>
			</div>
		)
	}
}