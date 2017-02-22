/**
 * Created by brian.milton on 30/04/2015.
 */

var config = {};

config.applicationDirectory = './js';
config.stylesDirectory = './sass';
config.distributionDirectory = './dist';
config.appJavaScriptAssets = './dist';

config.includedJavaScript = [
    config.applicationDirectory + '/bombConfig.js',
    config.applicationDirectory + '/morseCode.js',
    config.applicationDirectory + '/simpleWires.js'
];

module.exports = config;