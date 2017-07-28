'use strict'
// Get product IDs
const config = require('../config/product.config')
const ids = []
for(let i in config){
	const category = config[i]
	if(category.product){
		category.product.forEach(id => {
			if(typeof id === 'string'){
				ids.push(id)
			}
			else{
				id.forEach(id => ids.push(id))
			}
		})
	}
}
module.exports = ids
