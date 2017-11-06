'use strict'
// Merges Salsify product data with markdown data
const fs = require('fs-extra')
const glob = require('globby')
const path = require('path')

const products = {}

function readAllFiles(files){
	return new Promise((resolve, reject) => {
		console.log('Reading product JSON files...')
		const promises = files.map(file => {
			return new Promise((resolve, reject) => {
				const id = path.parse(file).name
				fs.readJson(file)
					.then(obj => {
						obj.id = id
						if(products[id]){
							products[id] = Object.assign(products[id], obj)
						}
						else{
							products[id] = obj
						}
					})
					.then(resolve)
					.catch(reject)
			})
		})
		Promise.all(promises)
			.then(resolve)
			.catch(reject)
	})
}

function addPricing(obj) {
	console.log('pricing:', obj)
	let keys = Object.keys(obj)
	if (!keys.length) return Promise.resolve(obj)
	console.log('Getting product prices...')
	// Keep scoped to make sure .env file exists at this point
	const getPrice = require('./product/get-price')
	return getPrice(keys)
		.then(prices => {
			for (let i in prices) {
				obj[i].price = prices[i]
			}
			return obj
		})
}

function saveAllFiles(){
	return new Promise((resolve, reject) => {
		console.log('Saving all concatenated product JSON files...')
		const promises = [
			fs.outputJson(`./json/product/all.json`, products, {
				spaces: '\t'
			})
		]
		for(let i in products){
			promises.push(fs.outputJson(`./json/product/${i}.json`, products[i], {
				spaces: '\t'
			}))
		}
		Promise.all(promises)
			.then(resolve)
			.catch(reject)
	})
}

console.log('Converting all product to JSON...')
console.log('Getting all Salsify JSON files...')
glob(`./json/salsify/**/*.json`)
	.then(readAllFiles)
	.then(() => {
		console.log('Getting all product markdown JSON files...')
		return glob(`./json/markdown/product/**/*.json`)
	})
	.then(readAllFiles)
	.then(addPricing)
	.then(saveAllFiles)
	.then(() => console.log('Product to JSON done!'))
	.catch(err => {
		throw new Error(err)
	})