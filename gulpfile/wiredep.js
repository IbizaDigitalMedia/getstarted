/**
 * getstarted wiredep task
 */

const gulp = require('gulp');
const wiredep = require('wiredep').stream;

gulp.task('wiredep', () => {
  gulp.src(global.paths.app + '/styles/app.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest(global.paths.app + '/styles'));

  gulp.src(global.paths.app + '/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest(global.paths.app));
});
