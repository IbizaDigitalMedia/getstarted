/**
 * getstarted html task
 */

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

gulp.task('html', ['styles', 'scripts'], () => {
  return gulp.src(global.paths.app + '/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if('*.{html|php}', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest(global.paths.dist));
});