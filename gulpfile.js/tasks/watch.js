/**
 * Created by brian.milton on 30/04/2015.
 */

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function(){
    gulp.watch(config.applicationDirectory + '/**/*.js',['js-full']);
    gulp.watch(config.stylesDirectory + '/**/*.scss', ['sass']);
});