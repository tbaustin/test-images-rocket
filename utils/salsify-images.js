'use strict'
require('dotenv').config({ silent: true })
const salsify = require('salsify-image-downloader')

// Fetch product from Salsify
salsify({
		src: './json/salsify',
		out: './img/salsify'
	})
	.then(() => console.log('Salsify images downloaded!'))
	.catch(err => {
		throw err
	})
