/**
 * Created by jwarnock on 11/19/15.
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var minHtml = require('gulp-minify-html');
var minCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var wiredep = require('wiredep').stream;

gulp.task('watch', function() {
   gulp.watch('/src/**', ['jshint']);
});

gulp.task('start', function() {
   nodemon({
       script: 'server.js',
       ext: 'js html css'
   })
       .on('start', ['watch'])
       .on('change', ['watch'])
       .on('restart', function() {
           console.log('Server Restarted!')
       });
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

gulp.task('bower', function() {
   return gulp.src('./src/index.html')
       .pipe(wiredep({
           directory: './bower_components/'
       }))
       .pipe(gulp.dest('./public/'));
});

gulp.task('default', ['minify-html', 'minify-css', 'uglify','jshint', 'watch', 'bower', 'start']);