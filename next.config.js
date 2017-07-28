const path = require('path')
const glob = require('glob-promise')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const fs = require('fs-extra')

module.exports = {
	poweredByHeader: false,
	exportPathMap: sitemap => {
		return new Promise((resolve, reject) => {
			const pages = {}

			// Product pages
			glob('./json/product/*.json')
				.then(products => {
					products.forEach(file => {
						const id = path.parse(file).name
						pages[`/product/${id}`] = {
							page: '/product',
							query: {
								product: id
							}
						}
						// Exclude submit reviews pages from sitemap
						if(!sitemap){
							/*
							pages[`/write-review/${id}`] = {
								page: '/write-review',
								query: {
									product: id
								}
							}
							*/
						}
					})
				})


				// Component pages
				.then(() => glob('./pages/*.js'))
				.then(files => {
					files.forEach(file => {
						let pageId = path.parse(file).name
						// Skip dynamic pages
						if(
							pageId[0] === '_' ||
							pageId === 'product' ||
							pageId === 'page' ||
							pageId === 'index' ||
							pageId === 'styleguide' ||
							pageId === 'submit-review'
						){
							return
						}
						pageId = `/${pageId}`
						pages[pageId] = {
							page: pageId
						}
					})
				})

				// Markdown pages
				.then(() => glob('./json/markdown/pages/*.json'))
				.then(markdown => {
					markdown.forEach(file => {
						const obj = require(file)
						const id = path.parse(file).name
						let permalink = obj.permalink || `/${id}`
						if(permalink[0] !== '/'){
							permalink = `/${permalink}`
						}
						pages[permalink] = {
							page: '/page',
							query: {
								id: id
							}
						}
					})
				})

				.then(() => {
					resolve(Object.assign({
						'/': { page: '/' }
					}, pages))
				})
				.catch(console.error)
		})
	},
	webpack: (config, { dev }) => {
		config.module.rules.push(
			{
				test: /\.(css|scss)/,
				loader: 'emit-file-loader',
				options: {
					name: 'dist/[path][name].[ext]'
				}
			},
			{
				test: /\.css$/,
				use: [
					'babel-loader',
					'raw-loader',
					'postcss-loader'
				]
			}
		)
		config.plugins.push(new OpenBrowserPlugin({ url: 'http://localhost:3000/' }))
		return config
	}
}
