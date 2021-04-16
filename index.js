'use strict';

const Hapi = require('@hapi/hapi');

const Manifest = require('./config/manifest');

const start = async () => {

    const manifest = await Manifest();
    const server = await new Hapi.Server(manifest.options);
    await server.register(manifest.plugins);
    await server.start();

    return server;
};

module.exports = start().catch((err) => {

    console.log(err);
    process.exit(1);
});
