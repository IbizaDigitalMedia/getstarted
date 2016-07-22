/**
 * getstarted gulpfile
 * inspired by generator-webapp 2.1.0
 */

const gulp = require('gulp');

if (!global.paths) {
  global.paths = {
    app: 'app',
    dist: 'dist',

    tmp: '.tmp',
    test: 'test',
    tasks: './gulpfile/'
  };
}

const tasks = {
  styles: require(global.paths.tasks + 'styles'),
  scripts: require(global.paths.tasks + 'scripts'),
  lint: require(global.paths.tasks + 'lint'),
  clean: require(global.paths.tasks + 'clean'),
  html: require(global.paths.tasks + 'html'),
  images: require(global.paths.tasks + 'images'),
  serve: require(global.paths.tasks + 'serve'),
  wiredep: require(global.paths.tasks + 'wiredep'),
  build: require(global.paths.tasks + 'build'),
  extras: require(global.paths.tasks + 'extras')
};

// The default task is equivalent to
// the 'gulp build' task.
gulp.task('default', ['clean'], () => {
  gulp.start('build');
});