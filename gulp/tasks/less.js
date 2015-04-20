/**
 * Created by huangxinghui on 2015/4/20.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var config = require('../config').less;
var browserSync = require('browser-sync');

gulp.task('less', function () {
    return gulp.src(config.src)
        .pipe(less())
        .pipe(autoprefix('last 2 version', 'ie 8', 'ie 9'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream: true}));
});