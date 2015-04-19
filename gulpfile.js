/**
 * Created by huangxinghui on 2014/12/11.
 */

var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var browserifyConfig =  {
    entries: './app/main.js',
    debug: true,
    extensions: ['.hbs']
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

gulp.task('default', ['clear', 'browserify']);