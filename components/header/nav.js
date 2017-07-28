import React from 'react'
import ReactDOM from 'react-dom'

const breakpoint = 1000

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = { showing: false }
		this.hideDropdowns = this.hideDropdowns.bind(this)
		this.clickHandler = this.clickHandler.bind(this)
	}
	componentDidMount(){
		const el = ReactDOM.findDOMNode(this)
		this.setState({
			el: el,
			dropdowns: el.querySelectorAll('ul')
		})
	}
	hideDropdowns(){
		for(let i = this.state.dropdowns.length; i--;){
			this.state.dropdowns[i].classList.remove('showDropdown')
		}
	}
	clickHandler(e){
		const w = window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth
		// If mobile menu
		if(w < breakpoint){
			if(e.target.tagName === 'A'){
				console.log('Link clicked')
				console.log(e.target.parentElement)
				const dropdown = e.target.parentElement.querySelector('ul')
				if(dropdown){
					e.preventDefault()
					this.hideDropdowns()
					dropdown.classList.add('showDropdown')
				}
				else{
					this.hideDropdowns()
				}
			}
			else{
				if(this.props.onClose){
					this.props.onClose()
				}
			}
		}
	}
	render(){
		return (
			<nav className={`${this.props.showing ? 'show' : ''} ${this.props.className}`} onClick={this.clickHandler}>

				<ul>
					<li>
						<a href='#'>Hoops</a>
					</li>
					<li>
						<a href='#'>Training</a>
					</li>
					<li>
						<a href='#'>Services</a>
						<ul>
							<li>
								<a href='#'>Basketball</a>
								<ul>
									<li><a href='#'>Goalrilla</a></li>
									<li><a href='#'>Goalsetter</a></li>
									<li><a href='#'>Silverback</a></li>
								</ul>
							</li>
							<li>
								<a href='#'>Table Tennis</a>
								<ul>
									<li><a href='#'>Stiga</a></li>
									<li><a href='#'>Ping Pong</a></li>
								</ul>
							</li>
							<li>
								<a href='#'>Archery</a>
								<ul>
									<li><a href='#'>Bear</a></li>
									<li><a href='#'>Trophy Ridge</a></li>
									<li><a href='#'>Cajun Bowfishing</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>


				<style jsx>{`
					nav{
						user-select: none;
						text-transform: uppercase;
						position: fixed;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background-color: rgba(0, 0, 0, .7);
						display: none;
						&.show{
							display: block;
						}
						&:after{
							content: '';
							display: block;
							clear: both;
						}
						& ul{
							display: none;
						}
						& > ul{
							margin-top: 100px;
							margin-left: 20px;
							& li{
								background-color: #FF671B;
								margin-bottom: 20px;
								width: 130px;
								position: relative;
								& a{
									display: block;
									padding: 16px 10px;
								}
								&:last-of-type{
									margin-bottom: 0;
								}
							}
						}
						& .showDropdown{
							display: block;
						}
						& ul{
							list-style-type: none;
							padding: 0;
							/* Dropdowns */
							& ul{
								position: absolute;
								width: 100vw;
								font-size: .7em;
								left: 140px;
								top: 8px;
								& li{
									background-color: #fff;
								}
								& a{
									color: #000;
									padding: 10px 8px;
								}
							}
						}
					}
					.show{
						& > ul{
							display: block;
						}
					}
					a{
						color: #fff;
						display: block;
						text-decoration: none;
						padding: 9px;
						&:hover{
							background-color: rgba(0, 0, 0, .1);
						}
					}
					@media(min-width:${breakpoint}px){
						nav{
							position: relative;
							z-index: 2;
							margin-bottom: 40px;
							display: block;
							background: transparent;
							& > ul{
								margin-top: 0;
								display: block;
								& > li{
									display: inline-block;
								}
								& li{
									background-color: transparent;
								}
							}
						}
					}
				`}</style>

			</nav>
		)
	}
}
