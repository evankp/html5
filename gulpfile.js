const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const imageOpt = require('gulp-imagemin')

// Compile SCSS
gulp.task('css:compile', function() {
  return gulp.src('./scss/*.scss')
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});

gulp.task('optimizeImg', () => {
    return gulp.src('img/*')
        .pipe(imageOpt())
        .pipe(gulp.dest('dist/img'))
})

// Default task
gulp.task('default', ['css:compile', 'optimizeImg']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Dev task
gulp.task('dev', ['css:compile', 'browserSync'], function() {
  gulp.watch('./scss/*.scss', ['css:compile']);
  gulp.watch('./css/styles.css', browserSync.reload);
  gulp.watch('./js/*.js', browserSync.reload)
  gulp.watch('./*.html', browserSync.reload);
});
