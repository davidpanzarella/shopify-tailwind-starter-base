const gulp = require('gulp');
const copy = require('gulp-copy');

gulp.task('copy', function () {
  return gulp
    .src('node_modules/swiper/swiper-bundle.min.*')
    .pipe(copy('assets', { prefix: 3 }));
});
