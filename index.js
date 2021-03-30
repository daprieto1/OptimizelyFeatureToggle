'use strict';

const Hapi = require('@hapi/hapi');

const optimizelyClientInstance = require('./optimizely');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });


    const horizonId = '60634c96cae2c613183bd45b';
    const suraId = '60634cc9c93358b2eec32ab8';

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            var user = optimizelyClientInstance.createUserContext('user123', {Id: horizonId});
            var decision = user.decide('feature_1');
            console.log(decision);
            var isEnabled = decision['enabled'];
            return 'Hello World! ' + (isEnabled ? 'with amazing feature!!!!' : 'boring :(');
        }
    });

    server.route({
        method: 'GET',
        path: '/hello/{orgId}',
        handler: function (request, h) {

            var user = optimizelyClientInstance.createUserContext('user123', {Id: request.params.orgId});
            var decision = user.decide('feature_1');
            var isEnabled = decision['enabled'];
            return 'Welcome to PAGER ' + (isEnabled ? 'with amazing feature!!!!' : 'boring :(');
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
