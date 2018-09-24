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
					const markdownId = node.id
						.slice(node.id.indexOf(`-`) + 1, node.id.length)
						.toUpperCase()
					console.log(`page created`)
					createPage({
						path: `/product/${markdownId}`,
						component: productTemplate,
						context: {
							upperId: markdownId,
							lowerId: markdownId.toLowerCase(),
						},
					})
				})
				return
			})
		)
	})
}
