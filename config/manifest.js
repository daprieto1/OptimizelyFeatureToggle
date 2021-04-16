'use strict';

const Features = require('../lib/modules/features');
const Services = require('../lib/services');
const Clients = require('../lib/clients');

module.exports = async () => {

    const clientsOptions = {optimizely: {}};

    const clients = await Clients(clientsOptions);
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
                plugin: Features(services, clients),
                options: {}
            }
        ]
    };

    return manifest;
};
