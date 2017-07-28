require('dotenv').config({ silent: true })
const express = require('express')
const next = require('next')
const fs = require('fs')
const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 3000
const app = next({dev})
const handle = app.getRequestHandler()
const router = require('./next.config').exportPathMap()


router.then(router => {
	app.prepare()
		.then(() => {
			const server = express()
			for(let i in router){
				server.get(i, (req, res) => {
					app.render(req, res, router[i].page, router[i].query)
				})
			}
			server.get('*', (req, res) => handle(req, res))
			server.listen(port)
		})

})
