var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Compile SCSS
gulp.task('css:compile', function() {
  return gulp.src('./scss/*.scss')
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});

// Default task
gulp.task('default', ['css:compile']);

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
