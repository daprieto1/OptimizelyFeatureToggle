'use strict';

const Features = require('../lib/modules/features');
const Services = require('../lib/services');

module.exports = async () => {

    const services = Services();

    const manifest = {
        options: {
            port: process.env.PORT || 3000,
            load: {
                sampleInterval: 1000,
                maxEventLoopDelay: 2000
            }
        },
        plugins: [
            {
                plugin: Features(services),
                options: {}
            }
        ]
    };

    return manifest;
};
