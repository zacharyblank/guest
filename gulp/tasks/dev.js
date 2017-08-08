module.exports = function() {
	require('gulp').task('dev', ['server', 'scripts', 'assets', 'favicon', 'html', 'styles', 'watch']);
}
