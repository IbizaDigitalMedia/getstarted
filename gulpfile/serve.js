/**
 * getstarted scripts task
 */

const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('serve', ['styles', 'scripts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: [global.paths.tmp, global.paths.app],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    global.paths.app + '/*.html',
    global.paths.app + '/images/**/*'
  ]).on('change', reload);

  gulp.watch(global.paths.app + '/styles/**/*.scss', ['styles']);
  gulp.watch(global.paths.app + '/scripts/**/*.js', ['scripts']);
  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: global.paths.dist
    }
  });
});

gulp.task('serve:test', ['scripts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: global.paths.test,
      routes: {
        '/scripts': global.paths.tmp + '/scripts',
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch(global.paths.app + '/scripts/**/*.js', ['scripts']);
  gulp.watch(global.paths.test + '/spec/**/*.js').on('change', reload);
  gulp.watch(global.paths.test + '/spec/**/*.js', ['lint:test']);
});