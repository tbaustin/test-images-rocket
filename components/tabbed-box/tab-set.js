import React from 'react'

export default class extends React.Component {
	render() {
		const tabs = this.props.tabs.map(tab => (
			<li className={'tabSet__tab' + (tab === this.props.active ? ' tabSet__tab--active' : '')} onClick={() => this.props.handleClick(tab)}>
				{tab}
				<style jsx>{`
					.tabSet__tab {
						display: table-cell;
						border-style: solid;
						border-color: #fff;
						border-width: 0 5px 10px 5px;
						padding: 1.5rem;
						font-size: 1.5rem;
						text-align: center;
						text-transform: uppercase;
						color: #FF671B;
					}

					.tabSet__tab:first-of-type {
						border-left: 0;
					}

					.tabSet__tab:last-of-type {
						border-right: 0;
					}

					.tabSet__tab.tabSet__tab--active {
						border-bottom: 0;
					}
				`}</style>
			</li>
		))

		return (
			<ul className="tabSet">
				{tabs}
				<style jsx>{`
					.tabSet {
						display: table;
						padding: 0;
						margin: 0;
						width: 100%;
						list-style: none;
					}
				`}</style>
			</ul>
		)
	}
}