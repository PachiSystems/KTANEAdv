/**
 * Created by brian.milton on 30/04/2015.
 */

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch-dev', function(){
    gulp.watch(config.appJavaScriptAssets + '/**/*.js',['js-dev']);
});