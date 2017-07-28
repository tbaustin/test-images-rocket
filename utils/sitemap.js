'use strict'
const fs = require('fs-extra')
const Sitemap = require('sitemap')
const pkg = require('../package.json')
const router = require('../next.config').exportPathMap(true)

// Build sitemap from router
router.then(router => {
	const urls = []
	for(let i in router){
		if(i === '/styleguide') continue
		urls.push({ url: i })
	}
	const sitemap = Sitemap.createSitemap({
		hostname: pkg.homepage,
		urls: urls
	})
	sitemap.toXML((err, xml) => {
		if(err) console.error(err)
		else{
			fs.outputFile(`./dist/sitemap.xml`, xml)
				.then(() => console.log('Sitemap built.'))
				.catch(console.error)
		}
	})
})
