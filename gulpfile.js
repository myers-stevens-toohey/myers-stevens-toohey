/**
 * Created by jwarnock on 11/19/15.
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');

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
    gulp.src(['*.js', 'src/js/**'])
        .pipe(jshint());
});

gulp.task('default', ['copy-src', 'jshint']);