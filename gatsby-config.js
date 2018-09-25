require(`dotenv`).config({ silent: true })
const path = require(`path`)
const proxy = require(`http-proxy-middleware`)
const config = require(`./site-config`)
const fs = require(`fs-extra`)
const matter = require(`front-matter`)

// fetch ids from product markdown (include variant ids)
let ids = []
const productPages = fs.readdirSync(`${__dirname}/src/markdown/products/`)
productPages.forEach(page => {
	let data = fs.readFileSync(
		`${__dirname}/src/markdown/products/${page}`,
		`utf8`
	)
	data = data.toString()
	data = matter(data)
	const { variants, id } = data.attributes

	if (variants) {
		variants.forEach(variant => {
			if (ids.indexOf(variant.id.toUpperCase()) !== -1) {
				return
			}
			ids.push(variant.id.toUpperCase())
		})
	}
	if (id) {
		if (ids.indexOf(id.toUpperCase()) !== -1) {
			return
		}
		ids.push(id.toUpperCase())
	}
})
console.log(`${ids.length} Products fetched from salsify`)

module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-root-import`,
			options: {
				root: path.join(__dirname, `src`),
			},
		},
		{
			resolve: `gatsby-plugin-emotion`,
			options: {
				hoist: true,
				sourceMap: true,
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-remove-trailing-slashes`,
		`gatsby-plugin-netlify-cms-paths`,
		`blog`,
		{
			resolve: `email-templates`,
			options: {
				siteUrl: process.env.URL || config.siteUrl,
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				exclude: [`/email-templates/*`],
			},
		},
		{
			resolve: `gatsby-plugin-robots-txt`,
			options: {
				policy: [
					{
						userAgent: `*`,
						disallow: [`/email-templates`],
					},
				],
			},
		},
		`gatsby-plugin-netlify`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/markdown`,
				name: `pages`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/static/uploads`,
				name: `uploads`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/markdown/products`,
				name: `products`,
			},
		},
		`gatsby-source-product-markdown`,
		{
			resolve: `gatsby-plugin-markdown-pages`,
			options: {
				path: `./src/markdown/pages`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-plugin-netlify-cms-paths`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
					{
						resolve: `gatsby-remark-external-links`,
						options: {
							target: `_blank`,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1200,
							linkImagesToOriginal: false,
							withWebp: {
								quality: 95,
							},
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				modulePath: `${__dirname}/src/components/cms/index.js`,
				enableIdentityWidget: false,
				manualInit: true,
			},
		},
		`cms-no-index`,
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: config.siteUrl,
			},
		},
		// {
		// 	resolve: `webtasks`,
		// 	options: {
		// 		name: `gatsby-boilerplate-autodeploy`,
		// 		path: `src/webtasks/autodeploy.js`,
		// 		container: process.env.WEBTASKS_CONTAINER,
		// 		token: process.env.WEBTASKS_TOKEN,
		// 		cron: `0 0 * * *`,
		// 		secrets: {
		// 			BUILD_HOOK: process.env.BUILD_HOOK,
		// 		},
		// 		shouldDeploy: process.env.BRANCH === `master`,
		// 	},
		// },

		// Client plugins
		`route-delayed-animation`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-polyfill-io`,
		`product-pages`,
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: `./src/img/favicon.png`,
				injectHTML: true,
				icons: {
					android: false,
					appleIcon: false,
					appleStartup: false,
					coast: false,
					favicons: true,
					firefox: false,
					twitter: false,
					yandex: false,
					windows: false,
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-2411855-10`,
				anonymize: true,
				respectDNT: true,
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Oswald`,
						subsets: [`latin`],
					},
					{
						family: `Open Sans`,
						subsets: [`latin`],
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-zygote`,
			options: {
				api: `https://yh5fc30fhh.execute-api.us-east-1.amazonaws.com/production/handler`,
				properties: {
					site: `rocket`,
				},
			},
		},
		{
			resolve: `gatsby-source-salsify`,
			options: {
				ids: ids,
				org: `rocket`,
				media: [`webImages`],
				types: {
					webImages: `array`,
					summaryBullets: `array`,
				},
				apiKey: process.env.SALSIFY_KEY,
			},
		},
	],
	siteMetadata: config,
	developMiddleware: app => {
		app.use(
			`/.netlify/functions/`,
			proxy({
				target: `http://localhost:9000`,
				pathRewrite: {
					"/.netlify/functions/": ``,
				},
			})
		)
	},
}
