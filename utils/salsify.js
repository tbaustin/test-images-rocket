'use strict'
require('dotenv').config({ silent: true })
const salsify = require('salsify-to-json')
const getIds = require('./get-ids')

// Fetch product from Salsify
getIds(true)
	.then(ids => salsify({ ids: ids, out: './json/salsify'}))
	.then(() => console.log('Salsify data saved!'))
	.catch(err => {
		throw console.error(err)
	})
