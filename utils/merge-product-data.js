'use strict'
const path = require('path')
const fs = require('fs-extra')
const glob = require('globby')
const dirs = [
	'./json/markdown/product',
	'./json/salsify'
]
const jsonOpt = { spaces: '\t' }

function getJsonPaths(dirs) {
	console.log('Getting product JSON paths...')
	let globStrs = dirs.map(dir => `${dir}/**/*.json`)
	return glob(globStrs)
}

function getData(paths) {
	console.log('Getting product JSON data...')
	let promises = paths.map(path => fs.readJson(path))
	return Promise.all(promises)
		.then(data => {
			let obj = {}
			paths.map((p, key) => {
				obj[p] = data[key]
				obj[p].id = path.parse(p).name
			})
			return obj
		})
}

function mergeData(obj) {
	console.log('Merging product JSON data...')
	let merged = {}
	for (let i in obj) {
		let name = obj[i].id.toLowerCase()
		if (!(name in merged)) {
			merged[name] = obj[i]
		}
		else {
			merged[name] = Object.assign(obj[i], merged[name])
		}
	}
	return merged
}

function productIdsJson(obj) {
	let ids = []
	Object.keys(obj).forEach(id => {
		if (ids.indexOf(id) === -1) {
			ids.push(id)
		}
	})
	return fs.outputJson('./json/product-ids.json', ids, jsonOpt)
		.then(() => obj)
}

function addPricing(obj) {
	console.log('Getting product prices...')
	// Keep scoped to make sure .env file exists at this point
	const getPrice = require('./product/get-price')
	return getPrice(Object.keys(obj))
		.then(prices => {
			for (let i in prices) {
				obj[i].price = prices[i]
			}
			return obj
		})
}

function saveJson(obj) {
	console.log('Saving merged product JSON data...')
	let promises = []
	let all = []
	let categories = {}
	for (let id in obj) {
		let prod = obj[id]
		all.push(prod)
		if (prod.parent && prod.category) {
			if (!(prod.category in categories)) {
				categories[prod.category] = []
			}
			categories[prod.category].push(prod)
		}
		promises.push(fs.outputJson(`./json/product/${id}.json`, prod, jsonOpt))
	}

	// Categories file
	for (let id in categories) {
		promises.push(fs.outputJson(`./json/category/${id}.json`, categories[id], jsonOpt))
	}

	return Promise.all(promises)
}

getJsonPaths(dirs)
	.then(getData)
	.then(mergeData)
	.then(productIdsJson)
	.then(addPricing)
	.then(saveJson)
	.then(() => console.log('Product JSON merged!'))