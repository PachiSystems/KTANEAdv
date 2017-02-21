/**
 * Created by brian.milton on 30/04/2015.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var config = require('../config');

gulp.task('js-full', function(){

    return gulp.src(config.includedJavaScript)
        .pipe(concat('KTANELib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(notify({message:'Finished concatenating & minifying JavaScript with all deps.'}));

});