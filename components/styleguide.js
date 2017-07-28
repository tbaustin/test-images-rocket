import Head from 'next/head'
import pkg from 'package.json'

{/* Import components */}
import Button from 'components/forms/button'
import Submit from 'components/forms/submit'
import Input from 'components/forms/input'
import Email from 'components/forms/email'
import Phone from 'components/forms/phone'
import Textarea from 'components/forms/textarea'
import Select from 'components/forms/select'
import P from 'components/paragraph'
import H1 from 'components/h1'
import H2 from 'components/h2'
import H3 from 'components/h3'
import Youtube from 'components/embed/youtube'
import DealerLocator from 'components/dealer-locator/dealer-locator'
import WriteReview from 'components/write-review'
import Error from 'components/messages/error'
import Info from 'components/messages/info'
import Loader from 'components/loader'
import Modal from 'components/modal'
import ReviewList from 'components/reviews/review-list'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

/* Import sample data */
import reviewData from '../content/sample-reviews.json'
import mapStyles from '../styles/mapStyle.json'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			modalShowing: false,
			reviewsLoaded: 2
		}
	}
	render(){
		return(
			<div>
				<Head>
					<title>{ pkg.title } Styleguide</title>
				</Head>
				<section>
					{/* Component sets */}
					<div>
						<h3>Typography Elements</h3>
						<H1>Header One</H1>
						<H2>Header Two</H2>
						<H3>Header Three</H3>
						<P>A paragraph component. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <b>Ut enim ad minim veniam,</b> quis nostrud exercitation ullamco laboris nisi ut <i>aliquip ex ea commodo</i> consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <u>cillum dolore</u> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
						<P>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</P>
					</div>
					<div>
						<h3>Form Elements</h3>
						<Input label='Input:' required />
						<Email label='Email:' required />
						<Phone label='Phone:' required />
						<Select label='Select:' required>
							<option value='a'>Option A</option>
							<option value='b'>Option B</option>
							<option value='c'>Option C</option>
						</Select>
						<Textarea label='Text Area:' required />
						<Button>I'm a Button!</Button>
					</div>
					<div>
						<h3>Modal Window</h3>
						<a href='#' onClick={(e) => {
							e.preventDefault()
							this.setState({ modalShowing: true })
						}}>Open window</a>
						<Modal open={this.state.modalShowing} onClose={() => this.setState({ modalShowing: false })}>
							<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
							<P>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</P>
							<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
							<P>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</P>
							<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
							<P>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</P>
							<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
							<P>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</P>
						</Modal>
					</div>
					<div>
						<h3>Status Messages</h3>
						<Info message="This is an info message." />
						<Error message="This is an error message." />
					</div>
					<div>
						<h3>Animations</h3>
						<h4>Loading:</h4>
						<Loader />
					</div>
					<div>
						<h3>Reviews</h3>
						<ReviewList reviews={reviewData.reviews} title={"Product reviews for "+reviewData.sku.toUpperCase()} average={reviewData.reviewAverage} length={this.state.reviewsLoaded} />
					</div>
					<div>
						<h3>Embeds</h3>
						<Youtube id='aGoH40XPGR4'></Youtube>
						<DealerLocator brand="goalrilla" mapStyles={mapStyles.styles} distance="30" zip="47713" />
					</div>
					<div>
						<h3>Pages</h3>
						<a href="/pagethatdoesnotexist">Error page</a>
					</div>
				</section>
				<style jsx>{`
					/* Styling for styleguide */
					section{
						max-width: 1200px;
						margin: 0 auto;
						padding: 30px;
						transition: max-width .5s;
					}

					div{
						margin-bottom: 60px;
					}
					h3{
						letter-spacing: 1px;
						color: #999;
						border-bottom: 1px solid #999;
						padding-bottom: 10px;
						margin-bottom: 20px;
						font-weight: 200;
					}
					@media(min-width:1200px){
						section{
							margin-top: 50px;
							margin-bottom: 100px;
						}
					}
				`}</style>
			</div>
		)
	}
}
