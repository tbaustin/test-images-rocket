import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

export default class Header extends React.Component{
	render(){
		return (
			<header className={headerStyles}>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/about'>About</Link></li>
					<li><Link to='/grid'>Grid</Link></li>
					<li><Link to='/contact'>Contact</Link></li>
					<li><a href='/email-templates/cms-invitation'>Email Template</a></li>
				</ul>
			</header>
		)
	}
}

const headerStyles = css`
	ul {
		list-style-type: none;
		padding: 30px;
		margin: 0;
	}
	li {
		display: inline-block;
	}
	a {
		padding: 0 10px;
		display: inline-block;
	}
	ul > li {
		:first-of-type > a {
			padding-left: 0;
		},
		:last-of-type > a {
			padding-right: 0;
		}
	}
`