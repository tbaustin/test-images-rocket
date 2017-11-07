'use strict'
const fetch = require('isomorphic-fetch')
const env = require('../../json/env.json')
const ids = require('../../json/product-ids.json')

module.exports = () => {
	if (env.STOCK_API) {
		return fetch(env.STOCK_API, {
				method: 'POST',
				body: JSON.stringify({
					site: env.ECOMMERCE_API_SITE || 'all',
					ids: ids
				})
			})
			.then(res => res.json())
	}
	console.log('Warning: STOCK_API variable not found in environment')
	let obj = {}
	ids.map(id => {
		obj[id] = 0
	})
	return Promise.resolve(obj)
}
