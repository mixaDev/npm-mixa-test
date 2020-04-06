var gulp     = require('gulp');

var del      = require('del');


gulp.task('copy', function () {
    return gulp.src('src/*.js')
      .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(cb) {
    del.sync('dist');
    cb();
});

gulp.task('default',
  gulp.series(
    'clean',
    'copy'
  )
);