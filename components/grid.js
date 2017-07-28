import React from 'react'
export default class extends React.Component {
	render(){
		return (
			<div className="row">
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
				<div>Item 4</div>
				<div>Item 5</div>
				<div>Item 6</div>
				<div>Item 7</div>
				<div>Item 8</div>
				<div>Item 9</div>
				<div>Item 10</div>
				<div>Item 11</div>
				<div>Item 12</div>
				<style jsx>{`
					.row{
						lost-utility: clearfix;
						margin-bottom: 30px;
					}
					@media(min-width:600px){
						.row div{
							lost-column: 1/2;
						}
					}
					@media(min-width:900px){
						.row div{
							lost-column: 1/4;
						}
					}
				`}</style>
			</div>
		)
	}
}
