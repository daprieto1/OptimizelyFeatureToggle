'use strict';

const Handlers = require('./handlers');
const Routes = require('./routes');

module.exports = (services, clients) => ({
    name: 'features',
    register: (server, options) => {

        const handlers = Handlers(services, clients, options);
        server.route(Routes(handlers));
    }
});
