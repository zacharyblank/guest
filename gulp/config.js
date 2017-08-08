module.exports = {

	src: 'src',
	
	build: 'build',

	assets: {

		src: 'src/assets/**/*'

	},

	favicon: {

		src: 'src/*.{png,xml,ico,json,svg}'

	},

	scripts: {
		src: ['src/**/*.{js,html}', 'node_modules/hitch-modules/**/*.{js,html}', '!node_modules/hitch-modules/node_modules/**/*'],

		entrypoint: 'src/index.js',

		environment: require('../.env.js')
	},

	server: {
		port: 8601
	},

	html: {
		src: 'src/**/*.html',
	},

	styles: {
		entrypoint: 'src/styles/index.less',
		
		src: 'src/styles/**/*.less'
	}

}