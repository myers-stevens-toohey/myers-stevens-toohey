/**
 * Created by jwarnock on 11/19/15.
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');

gulp.task('watch', function() {
   gulp.watch('/src/**', ['jshint', 'copy-src']);
});

gulp.task('start', function() {
   nodemon({
       script: 'server.js',
       ext: 'js html'
   })
});

gulp.task('copy-src', function() {
    gulp.src('./src/**')
        .pipe(gulp.dest('./public'));
});

gulp.task('jshint', function() {
    return gulp.src('src/js/**')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['start', 'watch', 'copy-src', 'jshint']);