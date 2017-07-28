'use strict'
require('dotenv').config({ silent: true })
const salsify = require('salsify-to-json')
const ids = require('./get-ids')

// Fetch product from Salsify
salsify({
		ids: ids,
		out: './json/product'
	})
	.then(() => console.log('Salsify data saved!'))
	.catch(err => {
		throw err
	})
