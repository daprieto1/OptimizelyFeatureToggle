'use strict';

const Handlers = require('./handlers');
const Routes = require('./routes');

module.exports = (services) => ({
    name: 'features',
    register: (server, options) => {

        const handlers = Handlers(services, options);
        server.route(Routes(handlers));
    }
});
