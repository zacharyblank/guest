module.exports = function(config) {
	var gulp = require('gulp'),
    	bro = require('gulp-bro'),
    	uglify = require('gulp-uglify'),
		plumber = require('gulp-plumber'),
	    envify = require('envify/custom'),
		bytediff = require('gulp-bytediff'),
	    stringify = require('stringify');

    gulp.task('watch-scripts', ['scripts'], function(done) {
    	process.browserSync.reload();
    	done();
    })

	gulp.task('scripts', function(done) {

		var transforms = [
            ['stringify', {global: true} ],
            envify(config.scripts.environment),
        ]

	    return gulp.src(config.scripts.entrypoint, { read: false })
	        .pipe(bro({
	            insertGlobals: true,
	            transform: transforms,
	            debug: true
	        }))
	        .pipe(gulp.dest(config.build))
	});

	gulp.task('minify-scripts', function() {
	    gulp.src(config.build + '/index.js')
	    	.pipe(plumber())
	    	.pipe(bytediff.start())
				.pipe(uglify({mangle: false}))
			.pipe(bytediff.stop())
			.pipe(plumber.stop())
			.pipe(gulp.dest(config.build));
	});
}