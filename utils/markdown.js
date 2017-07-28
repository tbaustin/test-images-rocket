'use strict'
const markdown = require('markdown-to-json-files')
markdown('./', `markdown/pages`, './json/markdown/pages')
	.then(() => console.log('Output markdown to JSON.'))
	.catch(console.error)
