/**
 * Created by jwarnock on 11/18/15.
 */
var gulp = require('gulp');

gulp.src('*.html')
    .pipe(gulp.dest('../public'));

gulp.task('default', [])