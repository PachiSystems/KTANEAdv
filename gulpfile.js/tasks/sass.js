/**
 * Created by rando on 21/02/2017.
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src(config.stylesDirectory + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.distributionDirectory + '/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});