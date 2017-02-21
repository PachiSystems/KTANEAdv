/**
 * Created by brian.milton on 30/04/2015.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var config = require('../config');

gulp.task('js-nodeps', function(){

    return gulp.src(config.appJavaScriptAssets + '/EF/PersonaAPI.js')
        .pipe(concat('PersonaAPINoDeps.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(notify({message:'Finished concatenating & minifying PersonaAPI with NoDeps.'}));

});