import React from 'react'
import fetch from 'isomorphic-fetch'
import dynamic from 'next/dynamic'
import P from 'components/paragraph'
import Layout from 'components/_layout'
import ProductTitle from 'components/product-title'
import AddCartButton from 'components/add-cart-button'
import FindStoreForm from 'components/find-store-form'
import StarRating from 'components/reviews/star-rating'
import ProductImages from 'components/product-images/product-images'
import TabbedBoxImage from 'components/tabbed-box-image'
import ReviewList from 'components/reviews/review-list'

export default class extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			reviewsLength: 2
		}

		this.loadMoreReviews = this.loadMoreReviews.bind(this);

		this.id = props.url.query.product
		this.data = require(`../json/product/${this.id}.json`)
		try {
			this.reviews = require(`../json/reviews/${this.id}-reviews.json`)
		}
		catch (e) {
			this.reviews = {sku: this.id, reviews: [], reviewAverage: 0};
		}
	}

	loadMoreReviews() {
		this.setState({reviewsLength: this.state.reviewsLength + 8})
	}

	render(){
		// Get all product images
		const images = []
		if (Array.isArray(this.data['Web Images'])) {
			this.data['Web Images'].forEach(id => {
				images.push({
					thumb: `/static/salsify/${id}-tn.jpg`,
					large: `/static/salsify/${id}-lg.jpg`
				})
			})
		}
		else {
			const id = this.data['Web Images'];
			images.push({
				thumb: `/static/salsify/${id}-tn.jpg`,
				large: `/static/salsify/${id}-lg.jpg`
			})
		}

		const tabs = [
			{
				title: 'Specs',
				body: '<b>Body copy missing</b> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet libero laoreet, varius lacus a, elementum metus. Curabitur elit lorem, molestie sed condimentum fermentum, hendrerit a elit. Duis nec lorem enim. Proin nec auctor leo, sit amet vulputate arcu. Ut accumsan a tellus quis ultrices. Nulla feugiat massa a magna porta tincidunt. Fusce sodales sagittis nibh a pellentesque. Sed mattis varius aliquet.',
				image: 'http://www.goalrilla.com/sites/all/themes/glr2016/images/products/basketball/features/goalrilla_cv_backboard_pad.jpg'
			},
			{
				title: 'Description',
				body: this.data['Long Description'],
				image: 'http://www.goalrilla.com/sites/all/themes/glr2016/images/products/basketball/features/goalrilla_cv_backboard_pad.jpg'
			},
			{
				title: 'Technology',
				body: '<b>Body copy missing</b> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet libero laoreet, varius lacus a, elementum metus. Curabitur elit lorem, molestie sed condimentum fermentum, hendrerit a elit. Duis nec lorem enim. Proin nec auctor leo, sit amet vulputate arcu. Ut accumsan a tellus quis ultrices. Nulla feugiat massa a magna porta tincidunt. Fusce sodales sagittis nibh a pellentesque. Sed mattis varius aliquet.',
				image: 'http://www.goalrilla.com/sites/all/themes/glr2016/images/products/basketball/features/goalrilla_cv_backboard_pad.jpg'
			},
		]

		return (
			<Layout title={ this.data['Item Name'] }>
				<div className="productPage">

					<div className="productPage__basicInfo">
						<h1 className="productPage__title"><ProductTitle title={this.data['Item Name']} /></h1>
						<div className="productPage__reviewStars"><StarRating rating={this.reviews.reviewAverage} /></div>
						<div className="productPage__reviewAmount">
							{this.reviews.reviews.length} {this.reviews.reviews.length > 1 ? 'reviews' : 'review'}
						</div>
						<div className="productPage__price">{this.data['MSRP']}</div>
						<div className="productPage__addToCart">
							<AddCartButton />
						</div>
						<div className="productPage__findStore">
							<FindStoreForm />
						</div>
						<div className="productPage__buyersGuide">
							<a href="#" className="productPage__buyersGuideLink">Buyers Guide</a>
							<p>Find out what goal is right for you</p>
						</div>
						<div className="productPage__productIncludes">
							{/* placeholder for now */}
							<h2 className="productPage__includesTitle">Includes</h2>
							<ul className="productPage__includesList">
								<li className="productPage__includesItem">
									<img src="/static/universal-pole-pad.png" className="productPage__includesImage" />
									Universal pole pad
								</li>
								<li className="productPage__includesItem">
									<img src="/static/universal-backboard-pad.png" className="productPage__includesImage" />
									Universal backboard pad
								</li>
								<li className="productPage__includesItem">
									<img src="/static/actuator-detail.png" className="productPage__includesImage" />
									Goalrilla anchor system
								</li>
							</ul>
						</div>
					</div>

					<div className="productPage__productImages">
						<ProductImages images={images} length="5" />
					</div>

					<div className="productPage__detailedInfo">
						<TabbedBoxImage tabs={tabs} />
					</div>

					<div className="productPage__reviews">
						<ReviewList title="Reviews" length={this.state.reviewsLength} reviews={this.reviews.reviews} average={this.reviews.reviewAverage} loadMore={this.loadMoreReviews} />
					</div>
				</div>
				<style jsx>{`
					.productPage {
						max-width: 1200px;
						margin: 0 auto;
					}
					.productPage__basicInfo, .productPage__productImages {
						display: inline-block;
						vertical-align: top;
					}

					.productPage__basicInfo {
						box-sizing: border-box;
						width: 35%;
						margin-right: 3rem;
						text-align: center;
					}

					.productPage__title {
						margin-bottom: 0;
						font-size: 4rem;
					}

					.productPage__reviewStars, .productPage__price {
						font-size: 1.7rem;
					}

					.productPage__reviewAmount {
						margin-bottom: 2rem;
						font-size: 1.2rem;
						text-transform: uppercase;
					}

					.productPage__addToCart {
						margin-top: 1rem;
					}

					.productPage__findStore {
						margin-top: 2.5rem;
					}

					.productPage__productImages {
						width: 60%;
					}

					.productPage__buyersGuide {
						margin: 2rem auto;
					}

					.productPage__buyersGuideLink {
						font-weight: bold;
						font-size: 2.3rem;
						text-transform: uppercase;
						text-decoration: none;
						color: #231F20;
					}

					.productPage__buyersGuide p {
						margin: 0;
					}

					.productPage__productIncludes {
						margin-top: 8rem;
						text-align: left;
						text-transform: uppercase;
					}

					.productPage__includesTitle {
						padding-left: 1.5rem;
					}

					.productPage__includesList {
						list-style: none;
						margin: 0;
						padding: 0;
					}

					.productPage__includesItem {
						display: inline-block;
						vertical-align: top;
						box-sizing: border-box;
						padding: 0 1.5rem;
						width: 33%;
						overflow-x: hidden;
						text-align: center;
					}

					.productPage__includesImage {
						height: 15rem;
						width: auto;
					}

					.productPage__detailedInfo, .productPage__reviews {
						margin-top: 4rem;
					}
				`}</style>
			</Layout>
		)
	}
}
