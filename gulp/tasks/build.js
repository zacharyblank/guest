module.exports = function() {
	process.optamize = true;

	var gulp = require('gulp')
		runSequence = require('run-sequence');

	gulp.task('build-styles', function(callback) {
		runSequence('html', 'styles', 'minify-styles', 'critical', callback);
	});

	gulp.task('build-scripts', function(callback) {
		runSequence('scripts', 'minify-scripts', callback);
	});

	gulp.task('build', ['build-scripts', 'assets', 'favicon', 'build-styles']);
}