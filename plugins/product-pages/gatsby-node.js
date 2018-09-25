const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	return new Promise((resolve, reject) => {
		const productTemplate = path.resolve(`src/templates/product.js`)
		resolve(
			graphql(
				`
					{
						allProducts: allProductMarkdown {
							edges {
								node {
									id
								}
							}
						}
					}
				`
			).then(results => {
				if (results.errors) {
					reject(results.errors)
				}
				const { edges } = results.data.allProducts
				// loop through results to create pages

				edges.forEach(({ node }) => {
					const markdownId = node.id.slice(node.id.indexOf(`-`) + 1, node.id.length)
					createPage({
						path: `/product/${markdownId.toLowerCase()}`,
						component: productTemplate,
						context: {
							upperId: markdownId.toUpperCase(),
							lowerId: markdownId.toLowerCase(),
						},
					})
				})
				return
			})
		)
	})
}
