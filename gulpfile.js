/**
 * Created by huangxinghui on 2014/12/11.
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rev = require('gulp-rev');

var browserifyConfig =  {
    entries: './app/main.js',
    standalne: 'bundle'
}

gulp.task('clear', function(cb) {
    del(['build'], cb);
});

gulp.task('browserify', function() {
    browserify(browserifyConfig)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('jshint', function() {
    gulp.src('js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('rev', function () {
    gulp.src('build/js/*.js')
        .pipe(rev())
        .pipe(gulp.dest('build/js'))
});

gulp.task('default', ['clear', 'jshint', 'browserify', 'rev']);