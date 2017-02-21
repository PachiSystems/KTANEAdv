/**
 * Created by brian.milton on 30/04/2015.
 */

var gulp = require('gulp');
var config = require('../config');
var concat = require('gulp-concat');
var notify = require('gulp-notify');

gulp.task('js-dev', function(){

    return gulp.src(config.includedJavaScript)
        .pipe(concat('KTANELib.js'))
        .pipe(gulp.dest('dist'))
        .pipe(notify({message:'Finished concatenating JavaScript with all deps.'}));

});