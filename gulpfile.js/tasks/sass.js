/**
 * Created by rando on 21/02/2017.
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config');

gulp.task('sass', function () {
    return gulp.src(config.stylesDirectory + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.distributionDirectory + '/css'));
});