module.exports = function(config) {
	var gulp = require('gulp'),
		imagemin = require('gulp-imagemin');

	gulp.task('assets', function() {
		gulp.src(config.assets.src)
			.pipe(imagemin([
				imagemin.jpegtran({progressive: true}),
			]))
	        .pipe(gulp.dest(config.build + '/assets'));
	});

	gulp.task('favicon', function() {
		gulp.src(config.favicon.src)
			.pipe(imagemin([
				imagemin.jpegtran({progressive: true}),
			]))
	        .pipe(gulp.dest(config.build));
	});
	
}