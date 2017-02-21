/**
 * Created by brian.milton on 30/04/2015.
 */

var config = {};

config.applicationDirectory = './js';
config.stylesDirectory = './sass';
config.distributionDirectory = './dist';
config.applicationDirectory = './js';
config.appJavaScriptAssets = './dist';

config.includedJavaScript = [
    config.applicationDirectory + '/morseCode.js'
];

module.exports = config;