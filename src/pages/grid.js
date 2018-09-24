import React from "react"
import { css } from "emotion"
import Layout from "components/layouts/index"
import Meta from "components/meta"
import createGrid from "styles/mixins/grid"

export default class GridPage extends React.Component {
	render() {
		return (
			<Layout>
				<Meta title="Grid Example" />
				<h1>Grid Example</h1>
				<div className={styles}>
					{(function() {
						const els = []
						for (let i = 0; i < 31; i++) {
							els.push(<div key={`grid${i}`}>{i + 1}</div>)
						}
						return els
					})()}
				</div>
			</Layout>
		)
	}
}

const styles = css`
	${createGrid({
		margin: 5,
		height: 200,
		columns: {
			0: 1,
			300: 2,
			600: 3,
			900: 4,
		},
	})} > * {
		background: #ccc;
		border: 1px solid #000;
	}
`
