import React from 'react'
import styles from './_global-settings'

export default class extends React.Component {
	render(){
		return (
			<form post="https://docs.google.com/forms/d/e/1FAIpQLSfGg1a02mJkh9uCdxq2qRROoN-GVmPoNe1pq8uvxV762Lbppw/formResponse" target="reviewIframe">
				<section>
					<label style={{display: 'block', cursor: 'default'}}>Rating</label>
					<span>
						<label>
							1
							<input type="radio" name="entry.1855707733" value="1" />
						</label>
						<label>
							2
							<input type="radio" name="entry.1855707733" value="2" />
						</label>
						<label>
							3
							<input type="radio" name="entry.1855707733" value="3" />
						</label>
						<label>
							4
							<input type="radio" name="entry.1855707733" value="4" />
						</label>
						<label>
							5
							<input type="radio" name="entry.1855707733" value="5" />
						</label>
					</span>
				</section>

				<label>
					Summary
					<input type="text" name="entry.253082710" />
				</label>

				<iframe id="reviewIframe"></iframe>

				<style jsx>{`
					label{
						cursor: pointer;
					}
					input[type="text"]{
						display: block;
					}
					iframe{
						display: none;
					}
				`}</style>
			</form>
		)
	}
}
