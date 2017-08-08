module.exports = function(config) {
	var gulp = require('gulp');
	var htmlmin = require('gulp-htmlmin');

	gulp.task('html', function() {
		return gulp.src(config.html.src)
	        .pipe(htmlmin({
	            comments: false,
	            spare: true,
	            empty: true,
	            quotes: true
	        }))
	        .pipe(gulp.dest(config.build))
	})	

}