/**
 * Created by huangxinghui on 2015/4/27.
 */
var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    config = require('../config');

gulp.task('eslint', function () {
    gulp.src(config.eslint.src)
        .pipe(eslint())
        .pipe(eslint.formatEach('compact', process.stderr));
});