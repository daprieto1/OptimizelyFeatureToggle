'use strict';

const optimizelySDK = require('@optimizely/optimizely-sdk');
require('custom-env').env('development');

optimizelySDK.setLogLevel('info');
optimizelySDK.setLogger(optimizelySDK.logging.createLogger());

module.exports = async (options) => {

    return optimizelySDK.createInstance({
        sdkKey: process.env.OPTIMIZELEY_SDK_KEY,
        datafileOptions: {
            autoUpdate: true,
            updateInterval: 1000
        }
    });
};
