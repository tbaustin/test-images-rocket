import React from 'react'
import Layout from 'components/_layout'
import Input from 'components/forms/input'
import Textarea from 'components/forms/textarea'
import Button from 'components/forms/button'
import Form from 'components/forms/form'
import H1 from 'components/h1'
import P from 'components/paragraph'

export default class extends React.Component{
	render(){
		return(
			<Layout>
				<main>
					<section>
						<H1>Contact Us</H1>
						<Form>
							<Input label='Name:' required />
							<Input label='Email Address:' required />
							<Textarea label='Message:' required />
							<Button type='submit'>Submit</Button>
						</Form>
					</section>
					<section>
						<H1>Rocket Broadheads</H1>
						<P>
							<div>2200 Stringtown Road</div>
							<div>Evansville, IN 47711</div>
						</P>
						<P>
							<div>Customer Service</div>
							<div><a href='tel:8006949494'>800.694.9494</a></div>
						</P>
					</section>
					<style jsx>{`
						@media(min-width: 1000px){
							main{
								lost-utility: clearfix;
							}
							section:first-of-type{
								lost-column: 2/3;
							}
							section:last-of-type{
								padding-left: 30px;
								lost-column: 1/3;
							}
						}
					`}</style>
				</main>
			</Layout>
		)
	}
}
