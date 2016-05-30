var gulp = require('gulp');
var plugins = require('gulp-load-plugins')()

gulp.task('scripts', function() {
  return gulp.src('script.js')
    .pipe(plugins.jshint())
});

gulp.default('default', 'scripts')
