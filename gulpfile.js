/**
 * Created by jwarnock on 11/19/15.
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var minHtml = require('gulp-minify-html');
var minCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('watch', function() {
   gulp.watch('/src/**', ['jshint', 'htmlmin']);
});

gulp.task('start', function() {
   nodemon({
       script: 'server.js',
       ext: 'js html'
   })
});

gulp.task('minify-html', function() {
    var opts = {
        conditionals:true,
        spare:true
    };

    return gulp.src('./src/*.html')
        .pipe(minHtml(opts))
        .pipe(gulp.dest('./public/'));
});

gulp.task('minify-css', function() {
    return gulp.src('./src/css/*.css')
        .pipe(minCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./public/css/'))
});

gulp.task('uglify', function() {
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./public/js/'))
});

gulp.task('jshint', function() {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['jshint', 'minify-html', 'minify-css', 'uglify', 'start', 'watch']);