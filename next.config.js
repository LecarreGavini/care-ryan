const withLess = require('next-with-less')
const path = require('path')

const pathToLessFileWithVariables = path.resolve('styles/antd-custom.less')

module.exports = withLess({
	lessLoaderOptions: {
		lessOptions: {
			// modifyVars: {
			// 	'primary-color': '#52c41a',
			// 	'border-radius-base': '2px',
			// },
		},
		additionalData: content => {
			console.log(content, pathToLessFileWithVariables)
			return `${content}\n\n@import '${pathToLessFileWithVariables}';`
		},
	},
})
