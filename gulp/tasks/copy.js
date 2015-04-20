/**
 * Created by huangxinghui on 2015/4/20.
 */
var gulp = require('gulp');
var vendor = require('../config').vendor;

gulp.task('copy', function () {
    gulp.src([vendor.src + '/bootstrap/dist/**/*'])
        .pipe(gulp.dest(vendor.dest + '/bootstrap'));
});