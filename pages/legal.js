import React from 'react'
import fetch from 'isomorphic-fetch'
import dynamic from 'next/dynamic'
import Layout from 'components/_layout'
import P from 'components/paragraph'
import H1 from 'components/h1'

export default class extends React.Component {

	render(){

		return (
			<Layout title='Legal Information'>
				<div className='cont'>
					<section>
						<H1>WARNING</H1>
						<P>To avoid extreme bodily injury when shooting an overdraw, or any other arrow support - shoot only with the blades in the closed position (where applicable) and make sure the O-rings fit in the angular groove and around the blade notch before each shot. As O-ring thickness may vary, manually inspect each O-ring before each shot, and after the broadheads have been exposed to any weather condition for any length of time. Prolonged exposure to sun may damage or weaken O-rings and may need to be replaced regularly. To prevent damage to you or your equipment from misuse, misapplication, or abuse of any Rocket Broadhead, have a competent pro shop install and inspect your archery equipment frequently. Got to trophyridge.com for full information on Rocket Broadhead’s warranty.</P>
						<P>To avoid extreme bodily injury when shooting an overdraw, or any other arrow support - shoot only with the blades in the closed position (where applicable) and make sure the O-rings fit in the angular groove and around the blade notch before each shot. As O-ring thickness may vary, manually inspect each O-ring before each shot, and after the broadheads have been exposed to any weather condition for any length of time. Prolonged exposure to sun may damage or weaken O-rings and may need to be replaced regularly. To prevent damage to you or your equipment from misuse, misapplication, or abuse of any Rocket Broadhead, have a competent pro shop install and inspect your archery equipment frequently. Got to trophyridge.com for full information on Rocket Broadhead’s warranty.</P>
						<H1>WARNING</H1>
						<P>To avoid extreme bodily injury when shooting an overdraw, or any other arrow support - shoot only with the blades in the closed position (where applicable) and make sure the O-rings fit in the angular groove and around the blade notch before each shot. As O-ring thickness may vary, manually inspect each O-ring before each shot, and after the broadheads have been exposed to any weather condition for any length of time. Prolonged exposure to sun may damage or weaken O-rings and may need to be replaced regularly. To prevent damage to you or your equipment from misuse, misapplication, or abuse of any Rocket Broadhead, have a competent pro shop install and inspect your archery equipment frequently. Got to trophyridge.com for full information on Rocket Broadhead’s warranty.</P>
					</section>
					<section>
						<H1>Patents</H1>
						<table>
							<tbody>
								<tr>
									<td>Buckblaster</td>
									<td>5879252</td>
								</tr>
								<tr>
									<td>Hammerhead</td>
									<td>5879252</td>
								</tr>
								<tr>
									<td>Meat Seeker</td>
									<td>
										<div>7677995</div>
										<div>7780554</div>
										<div>7226375</div>
									</td>
								</tr>
								<tr>
									<td>Miniblaster</td>
									<td>5879252</td>
								</tr>
								<tr>
									<td>Sidewinder</td>
									<td>5879252</td>
								</tr>
								<tr>
									<td>Steelhead-XL</td>
									<td>5879252</td>
								</tr>
								<tr>
									<td>Steelhead-XP</td>
									<td>5879252</td>
								</tr>
								<tr>
									<td>Turkey Tom-o-hawk</td>
									<td>5879252</td>
								</tr>
								<tr>
									<td>Ultimate Steel</td>
									<td>
										<div>6866600</div>
										<div>6921348</div>
										<div>7422533</div>
									</td>
								</tr>
								<tr>
									<td>Wolverine</td>
									<td>5879252</td>
								</tr>
							</tbody>
						</table>
					</section>
				</div>
				<style jsx>{`
					.cont{
						max-width: 1200px;
						margin: auto;
						lost-utility: clearfix;
					}
					table{
						width: 100%;
						border-top: 2px solid #333;
						border-spacing: 0;
					}
					td{
						border-bottom: 2px solid #333;
						padding: 4px 5px;
					}
					@media(min-width: 1000px){
						section:first-of-type{
							lost-column: 2/3;
						}
						section:last-of-type{
							padding-left: 30px;
							lost-column: 1/3;
						}
					}
				`}</style>
			</Layout>
		)
	}
}
