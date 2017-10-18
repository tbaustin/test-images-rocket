'use strict'
require('dotenv').config({ silent: true })
const fs = require('fs-extra')
const expose = require('../../config/expose-env')

console.log('Exposing .env variables...')
// Get env variables
let clientObj = {}
expose.forEach(key => {
	if (process.env[key]) {
		clientObj[key] = process.env[key]
	}
})

	// Save file
fs.outputJson('./json/env.json', clientObj)
	.then(() => console.log('Done saving client .env variables!'))
