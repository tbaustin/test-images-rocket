'use strict'
// https://www.npmjs.com/package/sharp
module.exports = {
	'salsify/*': [
		{
			suffix: '-tn',
			process: img => {
				return img.resize(100, 100)
			}
		},
		{
			suffix: '-lg',
			process: img => {
				return img.resize(800)
			}
		}
	]
}
