'use strict';

const Optimizely = require('./optimizely');

module.exports = async (options) => {

    return {
        optimizely: await Optimizely(options.optimizely)
    }
}
