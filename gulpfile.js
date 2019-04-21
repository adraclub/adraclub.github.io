// Load plugins
const gulp = require("gulp");

// Copy third party libraries from /../../node_modules/ into /vendor
gulp.task('vendor', function(cb) {

  // JQuery Assets
  gulp.src([
    '../../node_modules/jquery/dist/**/*'
  ])
  .pipe(gulp.dest('./assets/vendor/jquery'))

  // Bootstrap Assets
  gulp.src([
      '../../node_modules/bootstrap/dist/**/*'
    ])
    .pipe(gulp.dest('./assets/vendor/bootstrap'))

  // Font Awesome Assets
  gulp.src([
    '../../node_modules/font-awesome/css/**/*'
  ])
  .pipe(gulp.dest('./assets/vendor/font-awesome/css'))

  gulp.src([
    '../../node_modules/font-awesome/fonts/**/*'
  ])
  .pipe(gulp.dest('./assets/vendor/font-awesome/fonts'))

  // baguetteBox Assets
  gulp.src([
    '../../node_modules/baguettebox.js/dist/**/*'
  ])
  .pipe(gulp.dest('./assets/vendor/baguettebox'))

  cb();

});

gulp.task("default", gulp.parallel('vendor'));