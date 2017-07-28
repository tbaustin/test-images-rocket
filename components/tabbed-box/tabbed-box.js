import React from 'react'
import TabSet from 'components/tabbed-box/tab-set'
import P from 'components/paragraph'

export default class extends React.Component {
	render() {
		const tabs = this.props.tabs.map(tab => tab.title);

		return (
			<div className="tabbedBox">
				<div className="tabbedBox__tabs">
					<TabSet tabs={tabs} active={this.props.active.title} handleClick={this.props.handleTabs} />
				</div>
				<div className="tabbedBox__content">
					<P><span dangerouslySetInnerHTML={{__html: this.props.active.body}}></span></P>
				</div>
				<style jsx>{`
					.tabbedBox {
						background: #F1F2F2;
					}

					.tabbedBox__content {
						padding: 3rem 4rem;
					}
				`}</style>
			</div>
		)
	}
}