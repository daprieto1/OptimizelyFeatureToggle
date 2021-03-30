'use strict';

const optimizelySDK = require('@optimizely/optimizely-sdk');
require('custom-env').env('development');

optimizelySDK.setLogLevel('info');
optimizelySDK.setLogger(optimizelySDK.logging.createLogger());

const optimizelyClientInstance = optimizelySDK.createInstance({
    sdkKey: process.env.OPTIMIZELEY_SDK_KEY, // Provide the sdkKey of your desired environment here
    datafileOptions: {
        autoUpdate: true,
        updateInterval: 1000
    }
});
module.exports = optimizelyClientInstance;
