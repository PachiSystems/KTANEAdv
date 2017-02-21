/**
 * Created by brian.milton on 30/04/2015.
 */

var config = {};

config.applicationDirectory = './lib';
config.distributionDirectory = './dist';
config.appJavaScriptAssets = config.applicationDirectory;
config.distJavaScriptAssets = config.distributionDirectory;

config.includedJavaScript = [
    config.appJavaScriptAssets + '/Polyfills/MixedPolyfills.js',
    config.appJavaScriptAssets + '/Polyfills/jQuery.XDomainRequest.js',
    config.appJavaScriptAssets + '/Events/PubSub.js',
    config.appJavaScriptAssets + '/Utils/AJAXUtils.js',
    config.appJavaScriptAssets + '/Utils/CookieUtils.js',
    config.appJavaScriptAssets + '/Utils/JSONUtils.js',
    config.appJavaScriptAssets + '/Utils/URLUtils.js',
    config.appJavaScriptAssets + '/Utils/EFUtils.js',
    config.appJavaScriptAssets + '/Geolocation/LatLong.js',
    config.appJavaScriptAssets + '/Geolocation/PersonaAPI.js'
];

module.exports = config;